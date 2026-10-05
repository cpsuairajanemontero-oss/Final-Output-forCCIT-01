import { Link, useForm } from '@inertiajs/react';

export default function Index({ registrations }) {
    const { delete: destroy } = useForm();
    const handleDelete = (id) => {
        if(confirm('Delete this registration?')) {
            destroy(route('registrations.destroy', id));
        }
    }
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
            <Link href={route('registrations.create')} className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block">
                + New Registration
            </Link>
            <table className="w-full border mt-4">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Course</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Address</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map(reg => (
                        <tr key={reg.id}>
                            <td className="border p-2">{reg.name}</td>
                            <td className="border p-2">{reg.email}</td>
                            <td className="border p-2">{reg.course}</td>
                            <td className="border p-2">{reg.phone}</td>
                            <td className="border p-2">{reg.address}</td>
                            <td className="border p-2">
                                <Link href={route('registrations.edit', reg.id)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</Link>
                                <button onClick={() => handleDelete(reg.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}