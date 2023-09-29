import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Badminton from '../assets/badminton.jpeg'
import LogoKoni from '../assets/koni.png'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (response.ok && response.status === 200) {
        const json = await response.json()
        window.localStorage.setItem('token', json.token)
        navigate('/DataAtlit')
      } else {
        alert("Username atau password salah !");
      }
    };
  return (
    <div className='bg-gray-900'>

<div className="flex flex-wrap w-full">
    <div className="flex flex-col w-full md:w-1/2">
    <div className="flex  pt-12 md:justify-start md:pl-12 md:-mb-24">
  <a onClick={() => navigate('/')} className="p-4 text-xl font-bold text-white bg-red-800 cursor-pointer">
    Home
  </a>
</div>

        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <div className='mx-auto'><img src={LogoKoni} style={{width: "200px" ,height:"200px"}} /></div>
            <p className='text-center text-gray-300 mt-5 text-2xl'>Selamat datang di halaman login kami. Silakan masukkan informasi login Anda untuk melanjutkan.</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-4">
                    <div className="flex relative ">
                        <span className=" rounded-tl-lg rounded-bl-lg inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg className="h-4 w-4 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
</svg>

                        </span>
                        <input type="text" id="design-login-email" value={username} onChange={(event) => setUsername(event.target.value)} className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent rounded-tr-lg rounded-br-lg" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4 mb-12">
                        <div className="flex relative ">
                            <span className="rounded-tl-lg rounded-bl-lg inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                    </path>
                                </svg>
                            </span>
                            <input type="password" id="design-login-password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent rounded-tr-lg rounded-br-lg" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-800 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 rounded-tr-lg rounded-lg">
                            <span className="w-full">
                                Submit
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src={Badminton}/>
            </div>
        </div>

    </div>
  )
}

export default LoginPage