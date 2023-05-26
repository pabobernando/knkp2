import { useState } from 'react';
import Navbar from '../components/Navbar'
import Anggar from '../assets/anggar.jpeg'
import TaliAsih from '../assets/taliasih.jpg'
import Dayung from '../assets/dayung.jpeg'

function Berita() {

  return (
    <div>
      <Navbar />
      <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        <div className='mb-8 md:mb-0'>
          <img src={Anggar} className="w-full mx-auto" />
          <h1 className='text-center text-3xl font-bold py-4 px-6'>IKASI KULONPROGO PERTAHANKAN JUARA UMUM DI PORDA 2022</h1>
          <p className='text-justify px-4 text-gray-500'>Tim anggar Kulonprogo berhasil mempertahankan gelar juara umum Pekan Olahraga Daerah (PORDA) DIY XVI 2022 untuk keempat kalinya secara berturut-turut dengan meraih 8 medali emas, 3 perak dan 5 perunggu.</p>
        </div>
        <div className='mb-8 md:mb-0'>
          <img src={TaliAsih} className="w-full mx-auto" />
          <h1 className='text-center font-bold text-4xl py-4'>KEJURKAB KARATE PELAJAR KULONPROGO 2022</h1>
          <p className='text-justify text-gray-500'>Minggu tanggal 31 Juli 2022 bertempat di Aula SMKN 2 Pengasih, Pengurus Institut Karate-Do Indonesia (Inkai) Kulonprogo menggelar Kejuaraan Karate Pelajar se Kabupaten Kulonprogo. Sebanyak 211 atlet karate Kulonprogo mengikuti event tersebut.</p>
        </div>
        <div>
          <img src={Dayung} className="w-full mx-auto" />
          <h1 className='text-center font-bold text-3xl py-4 px-6'>DAYUNG KULONPROGO LAMPAUI TARGET PORDA 2022</h1>
          <p className='text-justify px-4 text-gray-500'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan.</p>
        </div>
      </div>
      <div className='grid grid-cols-1'>
        {/* Konten tambahan */}
      </div>
      <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        <div className='mb-8 md:mb-0'>
          <div className='bg-white py-4 px-4'>
            <h1 className='text-center py-4 border-t-4 font-semibold text-1xl'>DAYUNG KULONPROGO LAMPAUI TARGET <br /> PORDA 2022</h1>
            <p className='text-justify text-gray-500'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan. Ketua Pengkab PODSI Kulonprogo,</p>
          </div>
        </div>
        <div className='mb-8 md:mb-0'>
          <div className='bg-white py-4 px-4'>
            <div className='border-t-4'>
              <div className='mt-4'>
                <h1 className='text-1xl font-semibold'>DAYUNG KULONPROGO LAMPAUI TARGET PORDA 2022</h1>
                <p className='text-gray-500'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo </p>
              </div>
              <div className='mt-4'>
                <img src={Dayung} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-white py-4 px-4'>
            <h1 className='text-center py-4 border-t-4 font-semibold text-1xl'>DAYUNG KULONPROGO LAMPAUI TARGET <br /> PORDA 2022</h1>
            <p className='text-justify text-gray-500'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan. Ketua Pengkab PODSI Kulonprogo,</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Berita;
