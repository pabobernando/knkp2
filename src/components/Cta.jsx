import React from "react"
import Sport from '../assets/sport.png'
import { Link } from "react-router-dom"

export default function Cta() {
    return (
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="w-full object-cover mx-auto"
            src={Sport}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-red-500">KONI KULON PROGO</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Komite Olahraga Nasional Indonesia Kabupaten Kulonprogo</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
            Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.
Lebih Lanjut
            </p>
            <div className="mt-8">
              <Link
                to='/sambutan'
                className="inline-flex rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Lebih lanjut
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  