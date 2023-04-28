import { useState } from 'react';
import Navbar from '../components/Navbar'
import Koni from '../assets/satosi.jpg'

function Pengurus() {

  

return (
<>
<Navbar />

<div className="p-4">
    <p className="text-3xl font-bold text-center text-gray-800">
        Pengurus Koni
    </p>
    <p className="mb-32 text-xl font-normal text-center text-gray-500">
        KULON PROGO
    </p>
    <div className="flex flex-col items-center justify-center space-y-24 md:space-y-0 md:flex-row" style={{marginBottom: "70px"}}>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={Koni} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-red-500 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-red-500">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Hendri Sulistya
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Pengendali Ledis
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Kepek, Pengasih, Kulon Progo
                    </p>
                </div>
            </div>
        </div>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={Koni} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-red-500 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-red-500">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Hendri Sulistya
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Duck Fans
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Kepek, Pengasih, Kulon Progo
                    </p>
                </div>
                
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-around space-y-24 md:space-y-0 md:flex-row mt-11">
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={Koni} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-red-500 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-red-500">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Hendri Sulistya
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Pengendali Ledis
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Kepek, Pengasih, Kulon Progo
                    </p>
                </div>
            </div>
        </div>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={Koni} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-red-500 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-red-500">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Hendri Sulistya
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Duck Fans
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Kepek, Pengasih, Kulon Progo
                    </p>
                </div>
                
            </div>
        </div>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={Koni} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-red-500 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-red-500">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Hendri Sulistya
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Milk Fans
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                    Kepek, Pengasih, Kulon Progo
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

</>
);
}

export default Pengurus;