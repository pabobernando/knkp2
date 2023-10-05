import { useState } from 'react';
import Navbar from '../components/Navbar'
import { pengurusData } from '../store/pengurusData';

function Pengurus() {
  // Data pengurus (ganti dengan data yang sesuai)
  

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-900 shadow">
        <p className="text-3xl font-bold text-center text-white">
          Pengurus
        </p>
        <p className="mb-12 text-xl font-normal text-center text-gray-300 ">
          KONI KULON PROGO
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {pengurusData.map((pengurus, index) => (
            <div key={index} className="p-4">
              <div className="flex-col flex justify-center items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src={pengurus.image}
                      className="mx-auto object-cover rounded-full h-20 w-20"
                    />
                  </a>
                </div>
                <div className="mt-2 text-center flex flex-col">
                  <span className="text-lg font-medium text-white ">
                    {pengurus.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {pengurus.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pengurus;
