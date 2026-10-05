import { useForm, Link } from '@inertiajs/react';

export default function Edit({ registration }) {
    const { data, setData, put, errors } = useForm({
        name: registration.name,
        email: registration.email,
        course: registration.course,
        phone: registration.phone,
        address: registration.address
    });
    const submit = (e) => {
        e.preventDefault();
        put(route('registrations.update', registration.id));
    }
    return (
        <div className="p-8 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Edit Registration - UPDATE</h1>
            <form onSubmit={submit} className="space-y-4">
                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border p-2 rounded" />
                <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full border p-2 rounded" />
                <input type="text" value={data.course} onChange={e => setData('course', e.target.value)} className="w-full border p-2 rounded" />
                <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)} className="w-full border p-2 rounded" />
                <input type="text" value={data.address} onChange={e => setData('address', e.target.value)} className="w-full border p-2 rounded" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">Update Registration</button>
                <Link href={route('registrations.index')} className="block text-center text-blue-600 mt-2">Back to List</Link>
            </form>
        </div>
    );
}