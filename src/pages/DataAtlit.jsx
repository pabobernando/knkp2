import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSide from '../components/NavbarSide'
import ModalDelete from '../components/ModalDelete';
import ModalAdd from '../components/ModalAdd';

function DataAtlit() {

    const [athletes, setAthletes] = useState([]);
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenAdd, setIsOpenAdd] = useState(false)
    const [selectedAthele, setSelectedAthele] = useState()

    const openModal = (atlit) => {
      console.log(atlit);
      setSelectedAthele(atlit)
      setIsOpen(true);
    };

    const openModalAdd = () => {
      setIsOpenAdd(true)
      console.log("modal bukak")
    }
  
    const closeModal = () => {
      setIsOpen(false);
      setIsOpenAdd(false)
    };

    const closeModalAdd = () => {
      setIsOpenAdd(false)
      console.log("modal nutup")
    }

    function refreshPage() {
      window.location.reload(false);
    }
  
    const token = window.localStorage.getItem('token')
    if (!token) {
      navigate('/LoginPage2')
    }
  
    useEffect(() => {
      fetch('http://localhost:3000/api/v1/atlit')
        .then(response => response.json())
        .then(data => {
          setAthletes(data) 
        })
        .catch(error => console.error(error));
    }, []);

    const handleDelete = () => {
      const atlit = selectedAthele
      fetch(`http://localhost:3000/api/v1/atlit/${atlit.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.ok) {
          // nek lancar 
          const updatedAthletes = athletes.filter(a => a.id !== atlit.id);
          setAthletes(updatedAthletes);
          setIsOpen(false)
        } else {
          // nek semisal err
          throw new Error('Gagal menghapus data atlet');
        }
      })
      .catch(error => console.error(error));
    }

    const handleAdd = (form) => {
 
      fetch('http://localhost:3000/api/v1/atlit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then(response => {
        if (response.ok) {
          setIsOpenAdd(false);
        } else {
          throw new Error('Gagal menambahkan data atlet');
        }
      })
      .catch(error => console.error(error));
    }
    
    const handleEdit = (form) => {
      const atlit = selectedAthele;
      fetch(`http://localhost:3000/api/v1/atlit/${atlit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      })
      .then(response => {
        if (response.ok) {
          setIsOpenAdd(false);
          refreshPage()
        } else {
          throw new Error('Gagal edit data atlet');
        }
      })
      .catch(error => console.error(error))
    }
    
    

  return (
    
<main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
    <ModalDelete onClose={closeModal} onOk={handleDelete} isOpen={isOpen} dataName={selectedAthele?.nama} />
    <ModalAdd onClose={closeModalAdd} onOk={handleEdit} isOpen={isOpenAdd} initialValue={selectedAthele} />
    <div className="flex items-start justify-between">
        <div className="relative hidden h-screen shadow-lg lg:block w-80">
            <NavbarSide />
        </div>
        <div className="flex flex-col w-full md:space-y-4">
            
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                    DATA ATLIT
                </h1>
                <header className="z-40 flex items-center justify-between w-full h-16">
                <div className="block ml-6 lg:hidden">
                    <button  className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                        <svg width="20" height="20" className="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                    <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                        <button className="flex items-center p-2 text-white bg-red-400 rounded-full shadow hover:text-gray-700 text-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

                        </button>
                        <button onClick={openModalAdd} className="flex items-center p-2 text-white bg-red-400 rounded-full shadow hover:text-gray-700 text-md">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

                        </button>
                    </div>
                </div>
            </header>
                <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-1">
                    <div className="w-full">
                    <table className="table-auto">
        <thead>
          <tr>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2 rounded-tl-lg">#</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Nik</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Nama Lengkap</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Alamat</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">TTL</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Telephone</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Gender</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Prestasi</th>
            <th className=" border-2 solid bg-red-800 text-white px-4 py-2">Cabor</th>
            <th className=' border-2 solid bg-red-800 text-white px-4 py-2 rounded-tr-lg'>Action</th>
          </tr>
        </thead>
        <tbody>
          {athletes.map((athlete, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{athlete.nik}</td>
              <td className="border px-4 py-2">{athlete.nama}</td>
              <td className="border px-4 py-2">{athlete.alamat}</td>
              <td className="border px-4 py-2">{athlete.ttl}</td>
              <td className="border px-4 py-2">{athlete.telephone}</td>
              <td className="border px-4 py-2">{athlete.gender}</td>
              <td className="border px-4 py-2">{athlete.prestasi}</td>
              <td className="border px-4 py-2">{athlete.cabor.nama}</td>
              <td className='border px-4 py-2'>
                
                <button onClick={() => {
                  setSelectedAthele(athlete)
                  openModalAdd()
                }} className="flex items-center p-2 text-white bg-red-400 rounded-full shadow hover:text-gray-700 text-md">
              <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

                        </button><br /><button onClick={() => openModal(athlete)} className="flex items-center p-2 text-white bg-red-400 rounded-full shadow hover:text-gray-700 text-md">
                        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>


                            
                        </button></td>
            </tr>
          ))}
        </tbody>
      </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

  )
}

export default DataAtlit