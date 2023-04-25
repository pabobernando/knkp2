import React, { useState } from "react";
import CaborData from "../config/caborData";

function ModalAdd() {
const CaborId = CaborData

    const handleAdd = (event) => {
        event.preventDefault();
      
        const formData = {
          nik: event.target.nik.value,
          nama: event.target.nama.value,
          alamat: event.target.alamat.value,
          ttl: event.target.ttl.value,
          telephone: event.target.telephone.value,
          gender: event.target.gender.value,
          prestasi: event.target.prestasi.value,
          caborId: parseInt(event.target.cabor_id.value)
        };
   
        fetch('http://localhost:3000/api/v1/atlit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            setIsOpenAdd(false);
          } else {
            throw new Error('Gagal menambahkan data atlet');
          }
        })
        .catch(error => console.error(error));
      }
      

  return (
    <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <form onSubmit={handleAdd}>
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
                    type="number"
                    name="nik"
                    id="nik"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nomor Indentitas Kependudukan"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nama Lengkap"
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
    <select
      name="cabor_id"
      id="cabor_id"
      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      required
    >
      <option value="">Cabor</option>
      {CaborId.map((cabor) => (
        <option key={cabor.id} value={cabor.id}>
          {cabor.nama}
        </option>
      ))}
    </select>
  </div>
</div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
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
    </div>
  );
}

export default ModalAdd;
