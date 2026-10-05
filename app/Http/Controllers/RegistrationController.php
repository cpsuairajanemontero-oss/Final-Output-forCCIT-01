<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    // LIST - show all students
    public function index()
    {
        $registrations = Registration::latest()->get();
        return Inertia::render('Registration/Index', [
            'registrations' => $registrations
        ]);
    }

    // SHOW CREATE FORM
    public function create()
    {
        return Inertia::render('Registration/Create');
    }

    // SAVE NEW STUDENT - WITH VALIDATION
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|max:100',
            'email' => 'required|email|unique:registrations,email',
            'course' => 'required',
            'phone' => 'required|digits:11|regex:/^09[0-9]{9}$/',
            'address' => 'required|min:5|max:255',
        ], [
            'name.required' => 'Full name is required!',
            'name.min' => 'Name must be at least 3 characters!',
            'email.required' => 'Email is required!',
            'email.email' => 'Please enter a valid email!',
            'email.unique' => 'This email is already registered!',
            'course.required' => 'Please select a course!',
            'phone.required' => 'Phone number is required!',
            'phone.digits' => 'Phone must be exactly 11 digits!',
            'phone.regex' => 'Phone must start with 09!',
            'address.required' => 'Address is required!',
            'address.min' => 'Address is too short!',
        ]);

        Registration::create($validated);

        return redirect()->route('registrations.index')->with('success', 'Student registered successfully!');
    }

    // SHOW EDIT FORM
    public function edit(Registration $registration)
    {
        return Inertia::render('Registration/Edit', [
            'registration' => $registration
        ]);
    }

    // UPDATE STUDENT - WITH VALIDATION
    public function update(Request $request, Registration $registration)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|max:100|regex:/^[a-zA-Z\s]+$/',
            'email' => 'required|email|unique:registrations,email,' . $registration->id,
            'course' => 'required',
            'phone' => 'required|digits:11|regex:/^09[0-9]{9}$/',
            'address' => 'required|min:5|max:255',
        ], [
            'name.required' => 'Full name is required!',
            'email.required' => 'Email is required!',
            'email.unique' => 'This email is already taken!',
            'course.required' => 'Please select a course!',
            'phone.required' => 'Phone number is required!',
            'phone.digits' => 'Phone must be exactly 11 digits!',
            'address.required' => 'Address is required!',
        ]);

        $registration->update($validated);

        return redirect()->route('registrations.index')->with('success', 'Student updated successfully!');
    }

    // DELETE STUDENT
    public function destroy(Registration $registration)
    {
        $registration->delete();
        return redirect()->route('registrations.index')->with('success', 'Student deleted successfully!');
    }
}