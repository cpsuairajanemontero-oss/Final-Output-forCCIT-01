import { useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        name: '', email: '', course: '', phone: '', address: ''
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('registrations.store'));
    }
    return (
        <div className="p-8 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Registration Form - CREATE</h1>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <input type="text" placeholder="Full Name" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border p-2 rounded" />
                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                </div>
                <div>
                    <input type="email" placeholder="Email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full border p-2 rounded" />
                    {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>
                <div>
                    <input type="text" placeholder="Course" value={data.course} onChange={e => setData('course', e.target.value)} className="w-full border p-2 rounded" />
                    {errors.course && <div className="text-red-500 text-sm">{errors.course}</div>}
                </div>
                <div>
                    <input type="text" placeholder="Phone" value={data.phone} onChange={e => setData('phone', e.target.value)} className="w-full border p-2 rounded" />
                    {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                </div>
                <div>
                    <input type="text" placeholder="Address" value={data.address} onChange={e => setData('address', e.target.value)} className="w-full border p-2 rounded" />
                    {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Save Registration</button>
                <Link href={route('registrations.index')} className="block text-center text-blue-600 mt-2">Back to List</Link>
            </form>
        </div>
    );
}