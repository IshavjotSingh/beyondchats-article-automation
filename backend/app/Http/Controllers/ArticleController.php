<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    // GET /api/articles
    public function index()
    {
        return response()->json(Article::latest()->get());
    }

    // POST /api/articles
    public function store(Request $request)
    {
        $article = Article::create([
            'title' => $request->title,
            'original_content' => $request->original_content,
            'updated_content' => $request->updated_content ?? null,
            'references' => $request->references ?? null,
            'status' => $request->status ?? 'original',
        ]);

        return response()->json($article, 201);
    }

    // GET /api/articles/{id}
    public function show($id)
    {
        return response()->json(Article::findOrFail($id));
    }

    // PUT /api/articles/{id}
    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->update($request->all());

        return response()->json($article);
    }

    // DELETE /api/articles/{id}
    public function destroy($id)
    {
        Article::findOrFail($id)->delete();

        return response()->json(['message' => 'Article deleted successfully']);
    }
}
