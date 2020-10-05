<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AppController extends Controller
{
    /**
     * Vista predeterminada de la aplicación.
     */
    public function view() {
        return view('welcome', [
            "user" => Auth::check() ? Auth::user() : json_encode([])
        ]);
    }
}
