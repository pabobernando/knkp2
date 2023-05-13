import React from 'react'
import caborData from '../config/caborData'

function DropdownCabor({ onChange }) {

    const CaborId = caborData

  return (
    <div className="w-full mt-4">
        <form>
        <div className="relative">
                  <select
                    name="caborId"
                    value={CaborId.nama}
                    id="caborId"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-red-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                    onChange={(e) => onChange(e.target.value)}
                  >
                    <option value="">Cabang Olahraga</option>
                    {CaborId.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nama}
        </option>
      ))}
                  </select>
                </div>
        </form>
              </div>
  )
}

export default DropdownCabor