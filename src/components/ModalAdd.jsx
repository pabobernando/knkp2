import React, { useState } from "react";
import { useEffect } from "react";

function ModalAdd( {isOpen, onOk, onClose, initialValue = undefined} ) {
    const [formValue, setFormValue] = useState({
        nik: '',
        name: '',
        alamat_lengkap: '',
        ttl: '',
        telephone: '',
    })

    useEffect(() => {
      if (initialValue) {
          setFormValue(initialValue)
      }
  }, [initialValue])

    function updateForm(field, value) {
        const cForm = Object.assign({}, formValue)
        setFormValue({
            ...cForm,
            [field]: value
        })
    }

  return isOpen && (
    <div>
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <form onSubmit={onOk}>
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-gray-500 bg-white">
                Tambah Data Atlit
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                  <input
                    value={formValue.nik}
                    type="number"
                    name="nik"
                    id="nik"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nomor Indentitas Kependudukan"
                    required
                    onChange={(event) => updateForm('nik', event.target.value)}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="nama"
                    value={formValue.nama}
                    id="nama"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nama Lengkap"
                    onChange={(event) => updateForm('nama', event.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="alamat"
                    id="alamat"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Alamat Lengkap"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="ttl"
                    id="ttl"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="TTL"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Telephone"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative">
                  <select
                    name="gender"
                    id="gender"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  >
                    <option value="">Jenis Kelamain</option>
                    <option value="MALE">Laki-laki</option>
                    <option value="FEMALE">Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="prestasi"
                    id="prestasi"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Prestasi"
                  />
                </div>
              </div>
              <div className="w-full">
  <div className="relative">
    
  </div>
</div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    onClick={(event) => {
                        event.preventDefault() 
                        onOk(formValue) 
                    }}
                    type="submit"
                    className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
          <p className="text-xs leading-5 text-gray-500">
            - Koni Kulon Progo -
          </p>
          
        </div>
      </form>
      <button onClick={onClose} className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-4">Close</button>
    </div>
    </div>
  );
}

export default ModalAdd;
