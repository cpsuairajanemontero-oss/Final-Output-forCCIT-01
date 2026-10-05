import { useForm, Link } from '@inertiajs/react'

export default function Edit({ registration }) {
  const { data, setData, put, processing, errors } = useForm({
    name: registration.name || '',
    email: registration.email || '',
    course: registration.course || '',
    phone: registration.phone || '',
    address: registration.address || ''
  });

  const submit = (e) => {
    e.preventDefault();
    put(route('registrations.update', registration.id));
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
          <div><p className="font-bold text-sm">CPSU - CCIT-01</p><p className="text-[10px] text-gray-400">Edit Student</p></div>
        </div>
        <Link href={route('registrations.index')} className="text-sm bg-gray-100 px-4 py-2 rounded-full">← Back</Link>
      </nav>

      <div className="flex justify-center pt-10">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold mb-2">Edit Registration</h1>
          <p className="text-sm text-gray-500 mb-6">Update info for {registration.name}</p>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full mt-1 border rounded-lg px-4 py-3" />
              {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full mt-1 border rounded-lg px-4 py-3" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Course</label>
                <input type="text" value={data.course} onChange={e => setData('course', e.target.value)} className="w-full mt-1 border rounded-lg px-4 py-3" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)} className="w-full mt-1 border rounded-lg px-4 py-3" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Address</label>
              <input type="text" value={data.address} onChange={e => setData('address', e.target.value)} className="w-full mt-1 border rounded-lg px-4 py-3" />
            </div>
            <button disabled={processing} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-lg font-medium shadow">
              {processing? 'Updating...' : 'Update Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}