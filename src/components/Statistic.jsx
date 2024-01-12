import React,{useState, useEffect} from 'react'

function Statistic() {

  const [jumlahAtlit, setJumlahAtlit] = useState()
  const [jumlahPelatih, setJumlahPelatih] = useState()
  const [jumlahWasit, setJumlahWasit] = useState()

    useEffect(() => {
        fetch('https://api.konikulonprogo.com/api/v1/count')
      .then(response => response.json())
      .then(data => {
        setJumlahAtlit(data.atlit)
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
      fetch('https://api.konikulonprogo.com/api/v1/count')
      .then(response => response.json())
      .then(data => {
        setJumlahPelatih(data.pelatih)
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
      fetch('https://api.konikulonprogo.com/api/v1/count')
      .then(response => response.json())
      .then(data => {
        setJumlahWasit(data.wasit)
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
      }, []);

      
  return (
    <div className='bg-gray-900'>
<div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div className="w-full px-4 py-4  bg-gray-900 border border-red-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
            </div>
        </div>
        <h3 className="py-4 text-xl font-semibold text-white sm:text-xl">
            Jumlah Atlit
        </h3>
        <p className="py-4 text-white text-xl font-extrabold ">
            {jumlahAtlit}
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-gray-900 rounded-lg border border-red-500 shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

            </div>
        </div>
        <h3 className="py-4 text-xl font-semibold text-white sm:text-xl ">
            Jumlah Pelatih
        </h3>
        <p className="py-4 text-text-white text-md text-white text-xl font-extrabold">
            {jumlahPelatih}
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-gray-900 border border-red-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
            </div>
        </div>
        <h3 className="py-4 text-xl font-semibold text-white sm:text-xl ">
            Jumlah Wasit
        </h3>
        <p className="py-4 text-white text-xl font-extrabold">
            {jumlahWasit}
        </p>
    </div>
</div>

    </div>
  )
}

export default Statistic