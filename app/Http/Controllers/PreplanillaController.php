<?php

namespace App\Http\Controllers;

use App\Models\Preplanilla;
use Illuminate\Http\Request;

use Inertia\Inertia;

class PreplanillaController extends Controller 
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Preplanilla/Index',);   
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Preplanilla $preplanilla)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Preplanilla $preplanilla)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Preplanilla $preplanilla)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Preplanilla $preplanilla)
    {
        //
    }
}
