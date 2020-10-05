<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Response;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Función que cumple el objetivo de registrar un nuevo usuario.
     * @param Illuminate\Http\Request $request
     * 
     * @return Response
     */
    public function register(Request $request) {
        /**
         * Verificar si los datos proporcionados son correctos.
         */
        $user = $request->validate([
            "username" => "required|string|max:60|unique:users,username",
            "email"    => "required|email|unique:users,email",
            "password" => "required|min:6"
        ]);
        
        User::create($user);

        return Response::json(["status" => "success"]);
    }

    /**
     * Función que cumple el objetivo de iniciar sesión en el sitio web.
     * @param Illuminate\Http\Request $request
     * 
     * @return Response
     */
    public function login(Request $request) {
        /**
         * Datos proporcionados del usuario.
         * 
         * @var Object $data
         */
        $data = $request->only("username", "password");

        // Si los datos proporcionados están en la base de datos.
        if(Auth::attempt($data)) {

            /**
             * Datos del usuario.
             * 
             * @var App\Models\User $user
             */
            $user = Auth::user();
            
            return Response::json([
                "status" => "success", 
                "user" => [
                    "id" => $user->id,
                    "username" => $user->username
                ]
            ]);
        } 
        // Si los datos proporcionados son incorrectos.
        else {
            
            return Response::json([
                "status" => "error", 
                "message" => "Credenciales incorrectas.", 
                "notify" => true
            ], 401);
        }
    }

    /**
     * Cerrar sesión.
     * 
     * @return Response
     */
    public function logout(Request $request) {
        Auth::logout();

        return Response::json(["status" => "success"]);
    }
}
