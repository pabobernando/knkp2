import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import LogoKoni from '../assets/koni.png'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import CaborName from '../components/CaborName'

function Home() {

  const [jumlahAtlit, setJumlahAtlit] = useState()
  const [jumlahPelatih, setJumlahPelatih] = useState()
  const [jumlahWasit, setJumlahWasit] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/atlit/count')
  .then(response => response.json())
  .then(data => {
    setJumlahAtlit(data.total)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://localhost:3000/api/v1/pelatih/count')
  .then(response => response.json())
  .then(data => {
    setJumlahPelatih(data.total)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://localhost:3000/api/v1/wasit/count')
  .then(response => response.json())
  .then(data => {
    setJumlahWasit(data.total)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  }, []);

  
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


<div className="container mx-auto mt-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-40">
  <div className="relative overflow-hidden bg-white rounded-lg shadow w-60 md:w-72">
    <img src={LogoKoni} alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4"/>
    <div className="px-4 py-5 sm:p-6">
        <dl>
            <dt className="text-sm font-semibold leading-5 text-gray-500 truncate">
                Data Atlit
            </dt>
            <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                {jumlahAtlit}
            </dd>
        </dl>
    </div>
</div>
    <div>
    <div className="relative overflow-hidden bg-white rounded-lg shadow w-60 md:w-72">
    <img src={LogoKoni} alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4"/>
    <div className="px-4 py-5 sm:p-6">
        <dl>
            <dt className="text-sm font-semibold leading-5 text-gray-500 truncate">
                Data Pelatih
            </dt>
            <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                {jumlahPelatih}
            </dd>
        </dl>
    </div>
</div>

    </div>
    <div className="relative overflow-hidden bg-white rounded-lg shadow w-60 md:w-72">
    <img src={LogoKoni} alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4"/>
    <div className="px-4 py-5 sm:p-6">
        <dl>
            <dt className="text-sm font-semibold leading-5 text-gray-500 truncate">
                Data Wasit
            </dt>
            <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                {jumlahWasit}
            </dd>
        </dl>
    </div>
</div>
  </div>
</div>

        {/* VISI MISI */}
        <div className="container mx-auto mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-40">
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