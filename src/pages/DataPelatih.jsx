import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSide from '../components/NavbarSide'
import ModalDelete from '../components/ModalDeletePelatih';
import ModalAdd from '../components/ModalAddPelatih';
import DropdownCabor from '../components/DropdownCabor';

function DataPelatih() {
    const [pelatihs, setPelatihs] = useState([]);
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenAdd, setIsOpenAdd] = useState(false)
    const [selectedPelatih, setSelectedPelatih] = useState()
    const [page, setPage] = useState(0)
    const [halaman, setHalaman] = useState()
    const [pageCount, setPageCount] = useState(0)

    const openModal = (pelatih) => {
      console.log(pelatih);
      setSelectedPelatih(pelatih)
      setIsOpen(true);
    };

    const getDataPelatih = ({ page = 0, limit = 10, cabor_id = '' }) => {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };
      fetch(`http://localhost:3000/api/v1/pelatih?${new URLSearchParams({
        page,
        limit,
        cabor_id,
      }).toString()}`,
      { headers }
    )
      .then((response) => response.json())
      .then((data) => {
        setPelatihs(data);
      })
      .catch((error) => console.error(error));
    };
    

      const nextPage =  (page) => {
        setPage(page)
         getDataPelatih({page, limit: 10})
         console.log("page", page)
      }

    const handleDelete = () => {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const pelatih = selectedPelatih
      fetch(`http://localhost:3000/api/v1/pelatih/${pelatih.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
      })
      .then(response => {
        if (response.ok) {
          // nek lancar 
          const updatedPelatihs = pelatihs.filter(a => a.id !== pelatih.id);
          setPelatihs(updatedPelatihs);
          setIsOpen(false)
        } else {
          // nek semisal err
          throw new Error('Gagal menghapus data pelatih');
        }
      })
      .catch(error => console.error(error));
    }

    const handleAdd = (form) => {
      const token = localStorage.getItem('token');
           const headers = {
             Authorization: `Bearer ${token}`
           };
           fetch('http://localhost:3000/api/v1/pelatih', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
               ...headers
             },
             body: JSON.stringify(form)
           })
           .then(response => {
             if (response.ok) {
               setIsOpenAdd(false);
               getDataPelatih()
             } else {
               throw new Error('Gagal menambahkan data pelatih');
             }
           })
           .catch(error => console.error(error));
         }

         const handleEdit = (form) => {
          const token = localStorage.getItem('token');
          const headers = {
            Authorization: `Bearer ${token}`
          };
          const pelatih = selectedPelatih;
          fetch(`http://localhost:3000/api/v1/pelatih/${pelatih.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              ...headers
            },
            body: JSON.stringify(form)
          })
          .then((response) => {
            if (response.ok) {
              setIsOpenAdd(false);
              getDataPelatih({});
            } else {
              throw new Error("Gagal edit data atlet");
            }
          })
          .catch((error) => console.error(error));
        }
    
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
    
    useEffect(() => {
      getDataPelatih({})
      const token = window.localStorage.getItem('token')
    if (!token) {
      navigate('/LoginPage')
    }
    fetchPageCount()
    }, []);

    const fetchPageCount = () => {
      fetch('http://localhost:3000/api/v1/count')
        .then(response => response.json())
        .then(data => {
          const pembulatanPage = Math.ceil(data.pelatih / 10); // membulatkan angka ke atas
          setPageCount(pembulatanPage);
          console.log(pageCount) // simpan nilai pembulatanPage ke dalam state
        })
        .catch(error => console.error(error));
    };

    const handleButtonClick = () => {
      setHalaman(pageCount)
      // gunakan nilai pageCount pada saat button di klik
      console.log('Page count:', pageCount);
    };

    const handleOk = (form) => {
      if (form.id) {
        handleEdit(form);
      } else {
        handleAdd(form);
      }
    }

    const downloadFile = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/pelatih/download",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...headers,
            },
          }
        );
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Data Pelatih.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (err) {
        console.error("Error downloading file:", err);
      }
    };
  
  return (
    
<main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
    <ModalDelete onClose={closeModal} onOk={handleDelete} isOpen={isOpen} dataName={selectedPelatih?.nama} />
    <ModalAdd onClose={closeModalAdd} onOk={handleOk} isOpen={isOpenAdd} initialValue={selectedPelatih} />
    <div className="flex items-start justify-between">
        <div className="relative hidden h-screen shadow-lg lg:block w-80">
            <NavbarSide />
        </div>
        <div className="flex flex-col w-full md:space-y-4">
            
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                    DATA PELATIH
                </h1>
                <header className="z-40 flex items-center justify-between w-full h-16">
                <DropdownCabor onChange={(idCabor) =>  getDataPelatih({ cabor_id: idCabor })} />
                <div className="block ml-6 lg:hidden">
                <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
                </div>
                <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                    <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                    <button onClick={downloadFile} className="bg-green-400 hover:bg-green-600 text-white font-bold py-1 px-3 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download File</span>
</button>
<button onClick={openModalAdd} className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                  <svg className="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <line x1="20" y1="8" x2="20" y2="14" />  <line x1="23" y1="11" x2="17" y2="11" /></svg>
  <span className="text-white">Tambah Data Atlit</span>
</button>
                    </div>
                </div>
            </header>
                <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-1">
                    <div className="w-full">
                    <table className="table-auto w-full">
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nik</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Lengkap</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TTL</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telephone</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prestasi</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
            <th scope='col' className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cabor</th>
            <th scope='col' className=' px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {pelatihs.map((pelatih, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.nik}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.nama}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.alamat}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.ttl}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.telephone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.prestasi}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.keterangan}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pelatih.cabor.nama}</td>
              <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                <div className='flex justify-end items-center'>
                <button onClick={() => {
                  setSelectedPelatih(pelatih)
                  openModalAdd()
                }} className="mr-2 inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793l1.293-1.293-2.293-2.293-1.293 1.293zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106a.5.5 0 0 1 .325-.468h.5v-.5a.5.5 0 0 1 .5-.5h1v-.5a.5.5 0 0 1 .5-.5h.5v-.293l-2.5-2.5z" />
                  </svg>

                        </button>
                        <button
                              onClick={() => openModal(pelatih)}
                              className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            </button>
                </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='grid grid-cols-2 mt-5'>
            <div className='text-center'>
              <button className={`text-gray-700 bg-white hover:border border-red-700 font-bold py-2 px-4 rounded-full ${
                        page === 0 ? "bg-black cursor-not-allowed" : ""
                      }`}
               onClick={() => nextPage(page - 1)}
               disabled={page === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
</button></div>
            <div className='text-center'><button className={`text-gray-700 bg-white hover:border border-red-700 font-bold py-2 px-4 rounded-full ${
                        page === halaman ? "bg-black cursor-not-allowed" : ""
                      }`}
             onClick={() => nextPage(page + 1)}
             disabled={page === pageCount}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg></button></div>
      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

  )
}

export default DataPelatih