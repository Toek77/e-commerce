<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Author extends Model
{
    use Hasfactory;

    protected $fillable = [
        'name',
        'user_id',
    ];

    //1 An Author has 1 User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //3 An Author wrote many Articles
    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    //7 An Author has many Comments through Articles
    public function comments(){
        return $this->morphmany(Comment::class, 'commentable');
    }

    //9 An Author has many Audiences through Articles
    public function audiences(){
        return $this->hasManyThrough(Audience::class, Article::class);
    }
}
