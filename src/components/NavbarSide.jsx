import React from 'react'
import { useNavigate } from 'react-router-dom'


function NavbarSide() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await fetch('https://api.konikulonprogo.com/api/v1/logout', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            localStorage.removeItem('token')
            navigate('/')
          } catch (err) {
            console.error(err)
          }
    }

  return (
        <div className="h-full bg-gray-900">
                <div className="flex items-center justify-start pt-6 ml-8">
                    <p className="text-xl font-bold dark:text-white text-white">
                        KONI KULON PROGO
                    </p>
                </div>
                <nav className="mt-6">
                    <div>
                        <a onClick={() => navigate('/DataAtlit')} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-white transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800 dark:text-white" href="#">
                            <span className="text-left">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-2 text-sm font-normal">
                                Data Atlit
                            </span>
                        </a>
                        <a onClick={() => navigate('/DataWasit')} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-white transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#" >
                            <span className="text-left">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-2 text-sm font-normal">
                                Data Wasit
                            </span>
                        </a>
                        <a onClick={() => navigate('/DataPelatih')} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-white transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Data Pelatih
                            </span>
                        </a>
                        <a onClick={() => navigate('/DataSarpras')} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-white transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800" href="#" >
                            <span className="text-left">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Data Sarpras
                            </span>
                        </a>
                        <a onClick={handleLogout} className="flex items-center justify-start w-full p-2 pl-6 my-2 text-white transition-colors duration-200 border-l-4 border-white hover:text-gray-800" href="#">
                            <span className="text-left">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
                            </span>
                            <span  className="mx-4 text-sm font-normal">
                                Home
                            </span>
                        </a>
                    </div>
                </nav>
    </div>
  )
}

export default NavbarSide