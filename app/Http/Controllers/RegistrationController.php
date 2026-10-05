<?php
namespace App\Http\Controllers;
use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;
class RegistrationController extends Controller {
    public function index() { return Inertia::render('Registration/Index', ['registrations' => Registration::latest()->get()]); }
    public function create() { return Inertia::render('Registration/Create'); }
    public function store(Request $request) {
        $request->validate(['name'=>'required','email'=>'required|email|unique:registrations','course'=>'required','phone'=>'required','address'=>'required']);
        Registration::create($request->all());
        return redirect()->route('registrations.index');
    }
    public function edit(Registration $registration) { return Inertia::render('Registration/Edit', ['registration'=>$registration]); }
    public function update(Request $request, Registration $registration) {
        $request->validate(['name'=>'required','email'=>'required|email','course'=>'required','phone'=>'required','address'=>'required']);
        $registration->update($request->all());
        return redirect()->route('registrations.index');
    }
    public function destroy(Registration $registration) { $registration->delete(); return redirect()->route('registrations.index'); }
}