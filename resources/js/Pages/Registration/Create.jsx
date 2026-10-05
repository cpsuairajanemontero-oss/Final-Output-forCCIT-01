import { useForm, Link } from '@inertiajs/react'

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: '', email: '', course: '', phone: '', address: ''
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('registrations.store'));
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* NAV - same sa Index mo */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
          <div>
            <p className="font-bold text-sm">CPSU - CCIT-01</p>
            <p className="text-[10px] text-gray-400">Registration System</p>
          </div>
        </div>
        <Link href={route('registrations.index')} className="text-sm bg-gray-100 px-4 py-2 rounded-full">← Back to List</Link>
      </nav>

      <div className="flex justify-center pt-10">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold mb-2">New Registration</h1>
          <p className="text-sm text-gray-500 mb-6">Add new student for BSIT 1C-F</p>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Ex: Montero, Aira Jane T." value={data.name} onChange={e => setData('name', e.target.value)} className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none" />
              {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="aira@example.com" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none" />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Course</label>
                <select value={data.course} onChange={e => setData('course', e.target.value)} className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                  <option value="">Select Course</option>
                  <option>BSIT 1C</option>
                  <option>BSIT 1D</option>
                  <option>BSIT 1E</option>
                  <option>BSIT 1F</option>
                </select>
                {errors.course && <div className="text-red-500 text-xs mt-1">{errors.course}</div>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input type="text" placeholder="0938..." value={data.phone} onChange={e => setData('phone', e.target.value)} className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Address</label>
              <input type="text" placeholder="Vallehermoso, Negros Oriental" value={data.address} onChange={e => setData('address', e.target.value)} className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>

            <button disabled={processing} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3.5 rounded-lg font-medium shadow mt-4">
              {processing? 'Saving...' : 'Save Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}