<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Validation\Rule;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'identificacion' => 'required|string|min:8|max:15|unique:'.User::class,
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'celular' => 'required|string|min:10|max:15',
            'role' => ['required', 'string', 'max:15', Rule::in(['admin', 'acudiente', 'equipo'])],
        ], [
            'identificacion.required' => 'El campo identificación es obligatorio.',
            'identificacion.string' => 'El campo identificación debe ser una cadena de caracteres.',
            'identificacion.min' => 'El campo identificación debe tener al menos 8 caracteres.',
            'identificacion.max' => 'El campo identificación no debe exceder los 15 caracteres.',
            'identificacion.unique' => 'La identificación ya está en uso.',
            
            'name.required' => 'El campo nombre es obligatorio.',
            'name.string' => 'El campo nombre debe ser una cadena de caracteres.',
            'name.max' => 'El campo nombre no debe exceder los 255 caracteres.',
        
            'email.required' => 'El campo correo electrónico es obligatorio.',
            'email.string' => 'El campo correo electrónico debe ser una cadena de caracteres.',
            'email.lowercase' => 'El campo correo electrónico debe estar en minúsculas.',
            'email.email' => 'El campo correo electrónico debe ser una dirección de correo válida.',
            'email.max' => 'El campo correo electrónico no debe exceder los 255 caracteres.',
            'email.unique' => 'El correo electrónico ya está en uso.',
        
            'password.required' => 'El campo contraseña es obligatorio.',
            'password.confirmed' => 'Las contraseñas no coinciden.',
        
            'celular.required' => 'El campo celular es obligatorio.',
            'celular.string' => 'El campo celular debe ser una cadena de caracteres.',
            'celular.min' => 'El campo celular debe tener al menos 10 caracteres.',
            'celular.max' => 'El campo celular no debe exceder los 15 caracteres.',
        
            'role.required' => 'El campo rol es obligatorio.',
            'role.string' => 'El campo rol debe ser una cadena de caracteres.',
            'role.max' => 'El campo rol no debe exceder los 15 caracteres.',
            'role.in' => 'El campo rol debe ser uno de los siguientes valores: admin, acudiente, equipo.',
        ]);

        $user = User::create([
            'identificacion' => $request->identificacion,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'celular' => $request->celular,
            'role' => 'equipo',
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
