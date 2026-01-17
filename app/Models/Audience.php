<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audience extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'article_id', 'user_id'];

    // 2. An audience has one user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Inverse of article has many audiences
    public function article()
    {
        return $this->belongsTo(Article::class);
    }

    // 5. An audience have many comments (polymorphic)
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}