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
        <div className="text-center">
        <img src={LogoKoni} alt="Logo Koni" className="mx-auto w-60 h-60" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-20" >
            <span className="block xl:inline">KONI</span>{" "}
            <span className="block text-red-600 xl:inline">KULON PROGO</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 text-justify sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
  Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.
</p>

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-3 mb-10">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
              >
                Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 text-center px-8 mt-8'>
        <div class="grid grid-cols-1 sm:grid-cols-2 border-2 border-red-600 rounded-lg pt-3 pb-3 px-8 mx-8">
            <div class="flex items-center justify-center sm:justify-start">
              <svg class="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
           <div class="flex flex-col items-center sm:items-center justify-center px-4 sm:px-0 py-4 sm:py-0">
            <h1 class="text-lg sm:text-xl font-bold text-center sm:text-center">Atlit</h1>
             <h1 class="text-xl sm:text-2xl font-bold text-center sm:text-center">246</h1>
           </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 border-2 border-red-600 rounded-lg px-8 pt-3 pb-3 mx-8">
            <div class="flex items-center justify-center sm:justify-start">
              <svg class="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
           <div class="flex flex-col items-center sm:items-center justify-center px-4 sm:px-0 py-4 sm:py-0">
            <h1 class="text-lg sm:text-xl font-bold text-center sm:text-center">Atlit</h1>
             <h1 class="text-xl sm:text-2xl font-bold text-center sm:text-center">246</h1>
           </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 border-2 border-red-600 rounded-lg pt-3 pb-3 px-8 mx-8">
            <div class="flex items-center justify-center sm:justify-start">
              <svg class="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
           <div class="flex flex-col items-center sm:items-center justify-center px-4 sm:px-0 py-4 sm:py-0">
            <h1 class="text-lg sm:text-xl font-bold text-center sm:text-center">Atlit</h1>
             <h1 class="text-xl sm:text-2xl font-bold text-center sm:text-center">246</h1>
           </div>
        </div>
        </div>

        {/* VISI MISI */}
        <div className='grid grid-cols-2 mt-10'>
          <div>
          <h1 className='text-center mt-5'>VISI</h1>
          <h2>Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</h2>
          </div>
          <div>
            <h1 className='text-center mt-5'>MISI</h1>
            <ul>
              <li>
              Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel
              </li>
              <li>
              Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan
              </li>
              <li>
              Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga
              </li>
              <li>
                Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Home