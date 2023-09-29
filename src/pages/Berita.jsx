import { useState } from 'react';
import Navbar from '../components/Navbar'
import Catur from '../assets/catur.jpeg'
import Pembukaan from '../assets/pembukaan.jpeg'
import Bilyard from '../assets/pobsi.png'
import Futsal from '../assets/futsal.jpeg'

function Berita() {

  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        <div className='mb-8 md:mb-0'>
          <img src={Pembukaan} className="w-full mx-auto" />
          <h1 className='text-center text-3xl font-bold py-4 px-6 text-white'>PEMBUKAAN KEJURKAB KULONPROGO 2023</h1>
          <p className='text-justify px-4 text-gray-400'>Kejuaraan Kabupaten (KEJURKAB) VI Kulon Progo yang diselenggarakan oleh KONI Kulon Progo telah resmi dibuka pada hari Sabtu, 23 September 2023. Pembukaan KEJURKAB VI ini dilaksanakan di Stadion Cangkringan, Kulon Progo, dan dihadiri oleh kurang lebih 500 orang, meliputi 12 kapanewon di Kulon Progo.
          Dalam sambutannya, Bupati memberikan apresiasi kepada KONI Kulon Progo yang telah menyelenggarakan Kejurkab VI ini. Bupati juga berharap Kejurkab VI ini dapat menjadi ajang untuk meningkatkan prestasi olahraga di Kulon Progo.</p>
        </div>
        <div className='mb-8 md:mb-0'>
          <img src={Catur} className="w-full mx-auto" />
          <h1 className='text-center font-bold text-4xl py-4 text-white'>KEJURKAB VI PERCASI KULON PROGO</h1>
          <p className='text-justify text-gray-400'>
          Kejurkab Catur Kulon Progo 2023 diselenggarakan pada tanggal 27 dan 28 September 2023 di Dinas PMD Kulon Progo. Kejurkab ini akan diikuti oleh kurang lebih 50 atlet dari 12 kapanewon di Kulon Progo.
Kejurkab Catur Kulon Progo 2023 ini mempertandingkan 3 kategori, yaitu kategori Catur Cepat, Catur Kilat dan Catur Beregu. Setiap kategori akan memperebutkan medali emas, perak, dan perunggu.
Kejurkab Catur Kulon Progo 2023 ini diharapkan dapat menjadi ajang untuk meningkatkan prestasi olahraga catur di Kulon Progo. Kejurkab ini juga diharapkan dapat menjadi ajang seleksi untuk atlet-atlet Kulon Progo yang akan berlaga di Kejuaraan Provinsi (Kejurprov) DIY.
          </p>
        </div>
        <div>
          <img src={Bilyard} className="w-full mx-auto" />
          <h1 className='text-center font-bold text-3xl py-4 px-6 text-white'>POBSI KULON PROGO</h1>
          <p className='text-justify px-4 text-gray-400'>Juara umum Kejurkab VI POBSI Kulon Progo 2023 diraih oleh Kapanewon Pengasih dengan perolehan 2 medali emas, 1 medali perak, dan 2 medali perunggu. Kapanewon Temon berada di posisi kedua dengan perolehan 1 medali emas, 1 medali perak. Kapanewon Panjatan berada di posisi ketiga dengan perolehan 1 medali perak
Kejurkab VI POBSI Kulon Progo 2023 ini diharapkan dapat menjadi ajang untuk meningkatkan prestasi olahraga bilyard di Kulon Progo. Kejurkab ini juga diharapkan dapat menjadi ajang seleksi untuk atlet-atlet Kulon Progo yang akan berlaga di Kejuaraan Provinsi (Kejurprov) DIY.</p>
        </div>
      </div>
      <div className='grid grid-cols-1'>
        {/* Konten tambahan */}
      </div>
      {/* <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        <div className='mb-8 md:mb-0'>
          <div className='py-4 px-4'>
            <h1 className='text-center py-4 border-t-4 font-semibold text-1xl text-white'>PORKAB POBSI KULONPROGO LAMPAUI TARGET <br /> PORDA 2022</h1>
            <p className='text-justify text-gray-400'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan. Ketua Pengkab PODSI Kulonprogo,</p>
          </div>
        </div>
        <div className='mb-8 md:mb-0'>
          <div className='py-4 px-4'>
            <div className='border-t-4'>
              <div className='mt-4'>
                <h1 className='text-1xl font-semibold text-white'>DAYUNG KULONPROGO LAMPAUI TARGET PORDA 2022</h1>
                <p className='text-gray-400'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo </p>
              </div>
              <div className='mt-4'>
                <img src={Futsal} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='py-4 px-4'>
            <h1 className='text-center py-4 border-t-4 font-semibold text-1xl text-white'>DAYUNG KULONPROGO LAMPAUI TARGET <br /> PORDA 2022</h1>
            <p className='text-justify text-gray-400'>Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan. Ketua Pengkab PODSI Kulonprogo,</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Berita;
