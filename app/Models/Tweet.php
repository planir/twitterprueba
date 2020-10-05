<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["content"];

    /**
     * Retornar los datos del creador del tweet.
     * 
     * @return App\Models\User
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
