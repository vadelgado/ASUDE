<?php

namespace App\Http\Controllers;

use App\Models\AmonestacionesTC;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AmonestacionesTCController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $amonestacionesTC = AmonestacionesTC::all();
        return Inertia::render('AmonestacionesTC/Index', [
            'amonestacionesTC' => $amonestacionesTC
        ]);
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
    public function show(AmonestacionesTC $amonestacionesTC)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AmonestacionesTC $amonestacionesTC)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AmonestacionesTC $amonestacionesTC)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AmonestacionesTC $amonestacionesTC)
    {
        //
    }
}
