import { useState } from 'react';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { beritaData } from '../store/beritaData';

function Berita() {

  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        {beritaData.map((berita, index) => (
          <div key={berita.id} className='mb-8 md:mb-0'>
          <Link to={`/Detail/${berita.id}`} className='block'>
            <img src={berita.imgSrc} className="w-full mx-auto h-auto" alt={`Berita ${berita.id}`} />
            <h1 className='text-center text-3xl font-bold py-4 px-6 text-white'>{berita.title}</h1>
          </Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Berita;
