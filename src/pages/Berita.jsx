import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { beritaData } from '../store/beritaData';
import NavbarAndroid from '../components/NavbarAndroid';

function Berita() {
  return (
    <div className='bg-gray-900 h-screen'>
      <Navbar />
      <div className="w-full p-12 bg-gray-900">
        <div className="flex items-center justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-white">
              Berita Koni Kulon Progo
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {beritaData.map((berita, index) => (
            <div key={berita.id} className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <Link to={`/Detail/${berita.id}`} class="block w-full h-full">
                <img alt={`blog photo ${berita.id}`} src={berita.imgSrc} className="object-cover w-full max-h-40" />
                <div className="w-full p-4 bg-gray-800">
                  <p className="font-medium text-red-500 text-md">
                    {berita.category}
                  </p>
                  <p className="mb-2 text-xl font-medium text-white">
                    {berita.title}
                  </p>
                  <p className="font-light text-gray-300 text-md">
                    {berita.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                      <img alt="profil" src={berita.authorImg} className="mx-auto object-cover rounded-full h-10 w-10" />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-white">
                        {berita.author}
                      </p>
                      <p className="text-gray-400">
                        {berita.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <NavbarAndroid />
    </div>
  )
}

export default Berita;
