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

    public function store(Request $request)
    {
        $request->validate([
            'value' => 'required',
            'description' => 'required',
            'active' => 'required'
        ]);

        AmonestacionesTC::create($request->all());
        return redirect()->route('amonestacionesTC.index');
    }


    public function update(Request $request, AmonestacionesTC $amonestacionesTC)
    {
        $request->validate([
            'value' => 'required',
            'description' => 'required',
            'active' => 'required'
        ]);

        $amonestacionesTC->update($request->all());
        return redirect()->route('amonestacionesTC.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AmonestacionesTC $amonestacionesTC)
    {
        //
    }
}
