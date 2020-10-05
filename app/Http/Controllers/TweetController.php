<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tweet;
use Response;

class TweetController extends Controller
{
    /**
     * Display a listing of the resource.
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "content" => "required|string|max:400"
        ]);

        $tweet = $request->user()->tweets()->create($data);

        return Response::json(["status" => "success", "id" => $tweet->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Tweet $tweet)
    {
        return $tweet;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tweet $tweet)
    {
        $this->authorize('update', $tweet);

        $data = $request->validate([
            "content" => "required|string|max:400"
        ]);

        $tweet->update($data);

        return Response::json(["status" => "sucess"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Tweet $tweet)
    {
        $this->authorize('delete', $tweet);

        $tweet->delete();

        return Response::json(["status" => "success"]);
    }
}
