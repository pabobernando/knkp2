import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate()

  return (
    <div>
           <nav className="flex items-center justify-between flex-wrap bg-red-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">konikulonprogo.com</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 016 0h8a3 3 0 010 6H6a3 3 0 010-6h8a3 3 0 010 6h-2.667A2.666 2.666 0 0110.667 12h-1.334A2.666 2.666 0 016 9.333H3a3 3 0 01-3-3zm0 7a3 3 0 016 0h8a3 3 0 010 6H6a3 3 0 010-6h8a3 3 0 010 6h-2.667A2.666 2.666 0 0110.667 18h-1.334A2.666 2.666 0 016 15.333H3a3 3 0 01-3-3z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a onClick={() => navigate('/')} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:cursor-pointer mr-4">
                Beranda
          </a>
          <a onClick={() => navigate('/Pengurus')} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:cursor-pointer mr-4">
            Pengurus
          </a>
          <a onClick={() => navigate('/Berita')} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:cursor-pointer mr-4">
        Berita
      </a>
    </div>
    <div>
      <a onClick={() => navigate('/DataAtlit')} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 hover:cursor-pointer">Dashboard</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar