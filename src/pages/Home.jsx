import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import LogoKoni from '../assets/koni.png'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CaborName from '../components/CaborName'

function Home() {


  
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen">

      {/* HOME */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        
<div className="bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-red-500">
            Komite Olahraga Nasional Indonesia Kab Kulonprogo
            </span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
        Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Lebih Lanjut
                </button>
            </div>
        </div>
    </div>
    <img src={LogoKoni} className="absolute top-0 right-0 hidden h-50 lg:block"/>
</div>



        <div className='grid grid-cols-3 text-center px-8 mt-8'>
        <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-red-600 rounded-lg pt-3 pb-3 px-8 mx-8">
            <div className="flex items-center justify-center sm:justify-start">
              <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
           <div className="flex flex-col items-center sm:items-center justify-center px-4 sm:px-0 py-4 sm:py-0">
            <h1 className="text-lg sm:text-xl font-bold text-center sm:text-center">ATLIT</h1>
             <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-center">246</h1>
           </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-red-600 rounded-lg px-8 pt-3 pb-3 mx-8">
            <div className="flex items-center justify-center sm:justify-start">
              <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
           <div className="flex flex-col items-center sm:items-center justify-center px-4 sm:px-0 py-4 sm:py-0">
            <h1 className="text-lg sm:text-xl font-bold text-center sm:text-center">PELATIH</h1>
             <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-center">246</h1>
           </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-red-600 rounded-lg pt-3 pb-3 px-8 mx-8">
            <div className="flex items-center justify-center sm:justify-start">
              <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
           <div className="flex flex-col items-center sm:items-center justify-center px-4 sm:px-0 py-4 sm:py-0">
            <h1 className="text-lg sm:text-xl font-bold text-center sm:text-center">WASIT</h1>
             <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-center">246</h1>
           </div>
        </div>
        </div>

        {/* VISI MISI */}
        <div className="container mx-auto mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-5">VISI</h1>
      <h2 className="text-lg">Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</h2>
    </div>
    <div>
      <h1 className="text-center text-4xl font-bold mb-5">MISI</h1>
      <ul className="list-disc pl-5">
        <li className="mb-3">
          Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel
        </li>
        <li className="mb-3">
          Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan
        </li>
        <li className="mb-3">
          Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga
        </li>
        <li className="mb-3">
          Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi
        </li>
      </ul>
    </div>
  </div>
</div>

      </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Home