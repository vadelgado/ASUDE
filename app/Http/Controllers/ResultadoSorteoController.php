<?php 

namespace App\Http\Controllers;

use App\Http\Requests\Sorteo\StoreRequest;
use App\Http\Requests\Sorteo\UpdateRequest;
use App\Models\ResultadoSorteo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Equipos;
use App\Models\torneo;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;



class ResultadoSorteoController extends Controller
{

    public function index(Request $request)
    {
        $torneo_id = $request->input('torneo_id');

        if ($torneo_id) {                    
            $equipos = Equipos::join('inscripciones', 'equipos.id', '=', 'inscripciones.fk_equipo')
                ->join('torneo', 'inscripciones.fk_torneo', '=', 'torneo.id')
            ->where('inscripciones.fk_torneo', $torneo_id)
            ->where('inscripciones.estadoInscripcion', 'Aceptada')
                ->select('equipos.id','equipos.nombreEquipo',)
                ->orderBy('equipos.nombreEquipo', 'asc')
            ->get();
            $cantidadEquiposParticipantes = torneo::find($torneo_id)->cantidadEquiposParticipantes;
            //dd($cantidadEquiposParticipantes);
            $resultadoSorteos = DB::table('resultado_sorteos')
                ->join('equipos', 'resultado_sorteos.fk_equipo', '=', 'equipos.id')                             
                ->select('resultado_sorteos.*', 'equipos.nombreEquipo', 'equipos.escudoEquipo')
                ->where('resultado_sorteos.fk_torneo', $torneo_id)     
                ->orderBy('resultado_sorteos.puesto', 'asc')           
                ->get();           
        } else {

            $equipos = null;
            $resultadoSorteos = null;
        }   
        //dd($equipos);
        return Inertia::render('ResultadoSorteo/Index', [
            'resultadoSorteos' => $resultadoSorteos,
            'equipos' => $equipos,   
            'cantidadEquiposParticipantes' => $cantidadEquiposParticipantes,
            'torneo_id' => $torneo_id ,
        ]);    
    }
    

    public function store(StoreRequest $request)
    {
        $data = $request->all();
        $data['fk_torneo'] = $request->input('fk_torneo');
        //dd($data);
        ResultadoSorteo::create($data);

    }
    

    public function update(UpdateRequest $request, $id)
    {
        $resultadoSorteo = ResultadoSorteo::findOrFail($id);
        $resultadoSorteo->update($request->all());   

    }
    

    public function destroy($id)
    {
        try {
            $resultadoSorteo = ResultadoSorteo::findOrFail($id);
            $resultadoSorteo->delete();            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al eliminar el resultado de sorteo'], 500);
        }
    }
    


}
