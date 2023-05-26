import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import LogoKoni from '../assets/ilustrasi1.png'
import LogoAtlit from '../assets/siluetA.jpg'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Wasit from '../assets/wasit.jpg'

function Home() {

  const [jumlahAtlit, setJumlahAtlit] = useState()
  const [jumlahPelatih, setJumlahPelatih] = useState()
  const [jumlahWasit, setJumlahWasit] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/count')
  .then(response => response.json())
  .then(data => {
    setJumlahAtlit(data.atlit)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://localhost:3000/api/v1/count')
  .then(response => response.json())
  .then(data => {
    setJumlahPelatih(data.pelatih)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://localhost:3000/api/v1/count')
  .then(response => response.json())
  .then(data => {
    setJumlahWasit(data.wasit)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  }, []);

  
  return (
    <>
    <Navbar className="drop-shadow-2xl" />
    <div className="bg-gray-200">

      {/* HOME */}
      <div className="mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        
      <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-800">
  <img src={LogoKoni} className="absolute top-0 right-0 hidden h-full w-1/2 lg:block object-fit-cover" />
  <div className="text-start py-12 px-4 sm:px-6 lg:py-16 lg:w-1/2 z-20">
  <h2 className="text-3xl font-extrabold dark:text-white sm:text-4xl">
    <span className="block text-red-700 font-bold font-serif">
      Komite Olahraga Nasional Indonesia Kabupaten Kulonprogo
    </span>
  </h2>
  <p className="text-xl mt-4 text-gray-500 font-semibold">
    Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.
  </p>
  <div className="lg:mt-0 lg:flex-shrink-0">
    <div className="mt-12 inline-flex rounded-md shadow">
      <button
        onClick={() => navigate('/Sambutan')}
        type="button"
        className="py-4 px-6 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Lebih Lanjut
      </button>
    </div>
  </div>
</div>

</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: "100px" }}>
<div className="mx-auto w-full flex justify-center">
  <div className="relative overflow-hidden bg-white rounded-lg shadow w-full md:w-72">
    <img src={LogoAtlit} alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4" />
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
</div>

  <div className="mx-auto w-full flex justify-center">
    <div className="relative overflow-hidden bg-white rounded-lg shadow w-full md:w-72">
      <img src={LogoAtlit} alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4" />
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
  <div className="mx-auto w-full flex justify-center">
    <div className="relative overflow-hidden bg-white rounded-lg shadow w-full md:w-72">
      <img src={LogoAtlit} alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4" />
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


</div>
<Footer/>
      </div>
    </>
    
  )
}

export default Home