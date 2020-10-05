<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Encriptar de manera automatica contraseña cuando un usuario sea añadido.
     */
    public function setPasswordAttribute($value) {
        if($value != "")
            $this->attributes['password'] = bcrypt($value);
    }

    /**
     * Obtener los tweets del usuario.
     * 
     * @return \App\Models\Tweet[]
     */
    public function tweets() {
        return $this->hasMany(Tweet::class);
    }
}
