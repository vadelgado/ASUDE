<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log; 
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Comprobantes;
use App\Models\Alumno;


class ComprobantesController extends Controller
{

    public function index()
    {
        $user = auth()->user();
    
        if ($user ) {
            $comprobantes = $user->comprobantes()->with('alumno')->get();
        } else {
            // Manejar el caso en el que el usuario no tiene un alumno asociado
            $comprobantes = collect(); // Puedes asignar una colección vacía o manejarlo según tus necesidades
        }
    
        return Inertia::render('Comprobantes/Index', [
            'comprobantes' => $comprobantes,
        ]);
    }

    public function indexAdmin()
    {
        $comprobantes = Comprobantes::with('alumno')->get();
        return Inertia::render('Comprobantes/Index', [
            'comprobantes' => $comprobantes
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
        try {
            $comprobante = Comprobantes::create([
                'fk_user' => Auth::user()->id,
                'fk_alumno' => $request->input('alumnoId'),
                'fecha' => Carbon::now()->format('Y-m-d'),
                'secureUrl' => $request->input('secureUrl'),
                'valor' => $request->input('valor'),   
            ]);
    
            return redirect('alumno')->with('success', 'Comprobante agregado exitosamente.');
        } catch (\Illuminate\Database\QueryException $e) {
            Log::error('Error de base de datos: ' . $e->getMessage());
            return response()->json(['error' => 'Error de base de datos: ' . $e->getMessage()], 500);
        } catch (\Exception $e) {
            Log::error('Error inesperado: ' . $e->getMessage());
            return response()->json(['error' => 'Error inesperado: ' . $e->getMessage()], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Comprobantes $comprobantes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comprobantes $comprobantes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comprobantes $comprobantes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comprobantes $comprobantes)
    {
        //
    }
}
