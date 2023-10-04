import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { beritaData } from '../store/beritaData';

function Berita() {
  return (
    <div className='bg-gray-900 h-screen'>
      <Navbar />

      <div class="w-full p-12 bg-gray-900">
        <div class="flex items-center justify-between mb-12 header">
          <div class="title">
            <p class="mb-4 text-4xl font-bold text-white">
              Berita Koni Kulon Progo
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {beritaData.map((berita, index) => (
            <div key={berita.id} class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <Link to={`/Detail/${berita.id}`} class="block w-full h-full">
                <img alt={`blog photo ${berita.id}`} src={berita.imgSrc} class="object-cover w-full max-h-40" />
                <div class="w-full p-4 bg-gray-800">
                  <p class="font-medium text-red-500 text-md">
                    {berita.category}
                  </p>
                  <p class="mb-2 text-xl font-medium text-white">
                    {berita.title}
                  </p>
                  <p class="font-light text-gray-300 text-md">
                    {berita.description}
                  </p>
                  <div class="flex items-center mt-4">
                    <a href="#" class="relative block">
                      <img alt="profil" src={berita.authorImg} class="mx-auto object-cover rounded-full h-10 w-10" />
                    </a>
                    <div class="flex flex-col justify-between ml-4 text-sm">
                      <p class="text-white">
                        {berita.author}
                      </p>
                      <p class="text-gray-400">
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
    </div>
  )
}

export default Berita;
