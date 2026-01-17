<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'user_id', 'commentable_id', 'commentable_type'];

    //Inverse of user wrote many comments
    public function user(){
        return $this->belongsTo(User::class);
    }

    // Polymorphic relation to commentable (Article, Audience, Author)
    public function commentable(){
        return $this->morphTo();
    }
}
