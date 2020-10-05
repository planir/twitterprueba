<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tweet;
use Response;

class TweetController extends Controller
{
    /**
     * Mostrar todos los tweets publicados.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tweet::with(['user' => function($query){
            $query->select("id", "username");
        }])->latest()->paginate(14);
    }

    /**
     * Crear un nuevo tweet.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {  
        /**
         * Datos del tweet proporcionados por el usuario.
         * 
         * @var Array $data
         */
        $data = $request->validate([
            "content" => "required|string|max:400"
        ]);
        
        /**
         * Datos del tweet creado.
         * 
         * @var \App\Models\Tweet $tweet
         */
        $tweet = $request->user()->tweets()->create($data);

        return Response::json(["status" => "success", "id" => $tweet->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Tweet  $tweet
     * 
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Tweet $tweet)
    {
        return $tweet;
    }

    /**
     * Modificar un tweet.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Tweet  $tweet
     * 
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tweet $tweet)
    {
        // Verificar si el usuario tiene permisos para modificar el tweet.
        $this->authorize('update', $tweet);

        /**
         * Nuevos datos del tweet.
         * 
         * @var Array $data
         */
        $data = $request->validate([
            "content" => "required|string|max:400"
        ]);
        
        $tweet->update($data);

        return Response::json(["status" => "sucess"]);
    }

    /**
     * Eliminar un tweet.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Tweet  $tweet
     * 
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Tweet $tweet)
    {
        // Verificar si el usuario tiene permisos para eliminar el tweet.
        $this->authorize('delete', $tweet);

        $tweet->delete();

        return Response::json(["status" => "success"]);
    }
}
