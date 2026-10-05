import { Link, router } from '@inertiajs/react'

export default function Index({ registrations }) {
  const deleteReg = (id) => {
    if(confirm('Are you sure you want to delete?')) {
      router.delete(`/registrations/${id}`);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#6366f1] rounded-full flex items-center justify-center text-white font-bold">C</div>
          <div>
            <p className="font-bold text-[13px]">CPSU - CCIT-01</p>
            <p className="text-[10px] text-gray-400">BSIT 1C-F Registration</p>
          </div>
        </div>
        <Link href="/registrations/create" className="bg-[#6366f1] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-600">+ New Registration</Link>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-2">Registrations</h1>
        <p className="text-gray-500 mb-6">Total: {registrations.length} students</p>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r) => (
                <tr key={r.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{r.name}</td>
                  <td className="px-6 py-4 text-gray-500">{r.email}</td>
                  <td className="px-6 py-4"><span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs">{r.course}</span></td>
                  <td className="px-6 py-4">{r.phone}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link href={`/registrations/${r.id}/edit`} className="text-blue-600 hover:underline text-sm">Edit</Link>
                    <button onClick={()=>deleteReg(r.id)} className="text-red-600 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {registrations.length === 0 && <div className="p-12 text-center text-gray-400">No registrations yet. Click New Registration!</div>}
        </div>
      </div>
    </div>
  )
}