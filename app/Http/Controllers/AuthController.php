<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Response;
use App\Models\User;

class AuthController extends Controller
{
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

    public function login(Request $request) {
        /**
         * 
         */
        $data = $request->only("username", "password");

        if(Auth::attempt($data)) {
            /**
             * 
             */
            $user = Auth::user();
            
            //
            return Response::json([
                "status" => "success", 
                "user" => [
                    "id" => $user->id,
                    "username" => $user->username
                ]
            ]);
        } else {

            return Response::json([
                "status" => "error", 
                "message" => "Credenciales incorrectas.", 
                "notify" => true
            ], 401);
        }
    }
}
