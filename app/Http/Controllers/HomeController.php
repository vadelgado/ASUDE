<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function PrivacyPolicy ()
    {
        return Inertia::render('PrivacyPolicy');
    }

    public function TerminosCondiciones ()
    {
        return Inertia::render('TermsAndConditions');
    }

    public function PoliticaCokies ()
    {
        return Inertia::render('PoliticaDeCookies');
    }

    public function License ()
    {
        return Inertia::render('LicensePage');
    }
}
