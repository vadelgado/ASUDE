<?php

namespace App\Http\Controllers;

use App\Models\FaltasCuerpoTecnico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FaltasCuerpoTecnicoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $fk_programaciones_faces_id = $request->input('partido');
        if($fk_programaciones_faces_id){
            $faltasCuerpoTecnico = FaltasCuerpoTecnico::where('fk_programaciones_faces_id', $fk_programaciones_faces_id)
                ->join('amonestaciones_t_c_s as amon', 'faltas_cuerpo_tecnicos.fk_amonestaciones_t_c_s_id', '=', 'amon.id')
                ->join('cuerpo_tecnico as ct', 'faltas_cuerpo_tecnicos.fk_cuerpo_tecnico_id', '=', 'ct.id')
                ->join('programaciones_faces as pf', 'faltas_cuerpo_tecnicos.fk_programaciones_faces_id', '=', 'pf.id')
                ->join('equipos as e', 'ct.fk_equipo', '=', 'e.id')
                ->select(
                'faltas_cuerpo_tecnicos.*', 
                'amon.value',
                'amon.description', 
                'ct.nombreCompleto', 
                'pf.FechaPartido','pf.HoraPartido',
                'e.nombreEquipo')
                ->get();
                $cuerpoTecnico = DB::table('cuerpo_tecnico as ct')
                ->join('equipos as e', 'ct.fk_equipo', '=', 'e.id')
                ->join('resultado_sorteos as rs', 'e.id', '=', 'rs.fk_equipo')
                ->join('programaciones_faces as pf', function($join) use ($fk_programaciones_faces_id) {
                    $join->on('pf.posicion_local', '=', 'rs.puesto')
                         ->orOn('pf.posicion_visitante', '=', 'rs.puesto');
                         
                })
                ->select('ct.id', 'ct.nombreCompleto', 'e.nombreEquipo')
                ->where('pf.id', $fk_programaciones_faces_id)
                ->distinct()
                ->get();
                $fk_amonestaciones_t_c_s_id = DB::table('amonestaciones_t_c_s')
                ->select('amonestaciones_t_c_s.id', 'amonestaciones_t_c_s.description', 'amonestaciones_t_c_s.value as valor')
                ->where('amonestaciones_t_c_s.description', 'not like', '%jugador%')
                ->where('amonestaciones_t_c_s.active', 1)
                ->get();
                $fk_programaciones_faces_id = DB::table('programaciones_faces as pf')
                ->where('pf.id', $fk_programaciones_faces_id)
                ->select('pf.id')
                ->get();

        } else {
            $faltasCuerpoTecnico = null;
        }
       //dd( $fk_programaciones_faces_id);
        return Inertia::render('FaltasCuerpoTecnico/Index', [
            'faltas_cuerpo_tecnicos' => $faltasCuerpoTecnico,
            'fk_programaciones_faces_id' => $fk_programaciones_faces_id,
            'cuerpoTecnico' => $cuerpoTecnico,
            'fk_amonestaciones_t_c_s_id' => $fk_amonestaciones_t_c_s_id
        ]);
        
    }

    public function store(Request $request)
    {
        $request->validate([
            
            'fk_cuerpo_tecnico_id' => 'required',
            'fk_amonestaciones_t_c_s_id' => 'required'
        ], [
            'fk_cuerpo_tecnico_id.required' => 'Por favor, seleccione una opción en el campo Cuerpo Técnico.',
            'fk_amonestaciones_t_c_s_id.required' => 'Por favor, seleccione una opción en el campo Amonestaciones TCS.',
        ]);

        $data = $request->only('fk_cuerpo_tecnico_id', 'fk_amonestaciones_t_c_s_id', 'observaciones');
        $data['fk_programaciones_faces_id'] = $request->input('fk_programaciones_faces_id');
        FaltasCuerpoTecnico::create($data);


        
    }


    public function update(Request $request, $id)
    {
        $request->validate([            
            'fk_cuerpo_tecnico_id' => 'required',
            'fk_amonestaciones_t_c_s_id' => 'required'
        ], [
            'fk_cuerpo_tecnico_id.required' => 'Por favor, seleccione una opción en el campo Cuerpo Técnico.',
            'fk_amonestaciones_t_c_s_id.required' => 'Por favor, seleccione una opción en el campo Amonestaciones TCS.',
        ]);
        $data = $request->only('fk_programaciones_faces_id','fk_cuerpo_tecnico_id', 'fk_amonestaciones_t_c_s_id', 'observaciones');
        $faltasCuerpoTecnico = FaltasCuerpoTecnico::find($id);

        $faltasCuerpoTecnico->update($data);

    }

    public function destroy(FaltasCuerpoTecnico $faltasCuerpoTecnico)
    {
        
        $faltasCuerpoTecnico->delete();

    }
}
