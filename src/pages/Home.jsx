import React from 'react'
import Navbar from '../components/Navbar'
import LogoKoni from '../assets/koni.png'
import Footer from '../components/Footer'

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

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
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