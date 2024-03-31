<?php 

namespace App\Http\Controllers;

use App\Models\TorneoEnCurso;
use App\Models\torneo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TorneoEnCursoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $torneoEnCurso = torneo::all();        
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
    public function show(TorneoEnCurso $torneoEnCurso)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TorneoEnCurso $torneoEnCurso)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TorneoEnCurso $torneoEnCurso)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TorneoEnCurso $torneoEnCurso)
    {
        //
    }
}
