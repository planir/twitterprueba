<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$view = 'App\Http\Controllers\AppController@view';

Route::get('/', $view)->middleware('auth');
Route::get('/login', $view)->name('login')->middleware('guest');

Route::get('/{vue_capture?}', $view)->where('vue_capture', '[\/\w\.-]*');

Route::prefix('auth')->group(function() {
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    Route::post('login', 'App\Http\Controllers\AuthController@login');
});