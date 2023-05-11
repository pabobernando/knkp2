import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarSide from "../components/NavbarSide";
import ModalDelete from "../components/ModalDelete";
import ModalAdd from "../components/ModalAdd";
import DropdownCabor from "../components/DropdownCabor";

function DataAtlit() {
  const [athletes, setAthletes] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [selectedAthele, setSelectedAthele] = useState();
  const [page, setPage] = useState(0);
  const [halaman, setHalaman] = useState();
  const [pageCount, setPageCount] = useState(0);

  const openModal = (atlit) => {
    console.log(atlit);
    setSelectedAthele(atlit);
    setIsOpen(true);
  };

  const getDataAtlit = ({ page = 0, limit = 10, cabor_id = "" }) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    fetch(
      `http://localhost:3000/api/v1/atlit?${new URLSearchParams({
        page,
        limit,
        cabor_id,
      }).toString()}`,
      { headers }
    )
      .then((response) => response.json())
      .then((data) => {
        setAthletes(data);
      })
      .catch((error) => console.error(error));
  };

  const nextPage = (page) => {
    setPage(page);
    getDataAtlit({ page, limit: 10 });
    console.log("page", page);
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const atlit = selectedAthele;
    fetch(`http://localhost:3000/api/v1/atlit/${atlit.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })
      .then((response) => {
        if (response.ok) {
          // nek lancar
          const updatedAthletes = athletes.filter((a) => a.id !== atlit.id);
          setAthletes(updatedAthletes);
          setIsOpen(false);
        } else {
          // nek semisal err
          throw new Error("Gagal menghapus data atlet");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleAdd = (form) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    fetch("http://localhost:3000/api/v1/atlit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          setIsOpenAdd(false);
          getDataAtlit({});
        } else {
          throw new Error("Gagal menambahkan data atlet");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (form) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const atlit = selectedAthele;
    fetch(`http://localhost:3000/api/v1/atlit/${atlit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          setIsOpenAdd(false);
          getDataAtlit({});
        } else {
          throw new Error("Gagal edit data atlet");
        }
      })
      .catch((error) => console.error(error));
  };

  const openModalAdd = () => {
    setIsOpenAdd(true);
    console.log("modal bukak");
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsOpenAdd(false);
  };

  const closeModalAdd = () => {
    setIsOpenAdd(false);
    console.log("modal nutup");
  };

  useEffect(() => {
    getDataAtlit({});
    const token = window.localStorage.getItem("token");
    if (!token) {
      navigate("/LoginPage");
    }
    fetchPageCount();
  }, []);

  const fetchPageCount = () => {
    fetch("http://localhost:3000/api/v1/count")
      .then((response) => response.json())
      .then((data) => {
        const pembulatanPage = Math.ceil(data.atlit / 10); // membulatkan angka ke atas
        setPageCount(pembulatanPage);
        console.log(pageCount); // simpan nilai pembulatanPage ke dalam state
      })
      .catch((error) => console.error(error));
  };

  const handleButtonClick = () => {
    setHalaman(pageCount);
    // gunakan nilai pageCount pada saat button di klik
    console.log("Page count:", pageCount);
  };

  const handleOk = (form) => {
    if (form.id) {
      handleEdit(form);
    } else {
      handleAdd(form);
    }
  };

  const downloadFile = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/atlit/download",
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
      link.setAttribute("download", "Data Atlit.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <ModalDelete
        onClose={closeModal}
        onOk={handleDelete}
        isOpen={isOpen}
        dataName={selectedAthele?.nama}
      />
      <ModalAdd
        onClose={closeModalAdd}
        onOk={handleOk}
        isOpen={isOpenAdd}
        initialValue={selectedAthele}
      />
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen shadow-lg lg:block w-80">
          <NavbarSide />
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <h1 className="text-4xl font-bold text-red-800 dark:text-white ">
              DATA ATLIT
            </h1>
            <header className="z-40 flex items-center justify-between w-full h-16">
              <DropdownCabor
                onChange={(idCabor) => getDataAtlit({ cabor_id: idCabor })}
              />
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
                  <button
                    onClick={downloadFile}
                    className="flex items-center p-2 text-white bg-red-400 rounded-full shadow hover:text-gray-700 text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={openModalAdd}
                    className="flex items-center p-2 text-white bg-red-400 rounded-full shadow hover:text-gray-700 text-md"
                  >
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="w-full">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nik
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nama Lengkap
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Alamat
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        TTL
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Telephone
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prestasi
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cabor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {athletes.map((athlete, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.nik}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.alamat}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.ttl}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.telephone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.prestasi}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {athlete.cabor.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end items-center">
                            <button
                              onClick={() => {
                                setSelectedAthele(athlete);
                                openModalAdd();
                              }}
                              className="mr-2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-pencil"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793l1.293-1.293-2.293-2.293-1.293 1.293zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106a.5.5 0 0 1 .325-.468h.5v-.5a.5.5 0 0 1 .5-.5h1v-.5a.5.5 0 0 1 .5-.5h.5v-.293l-2.5-2.5z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => openModal(athlete)}
                              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="grid grid-cols-2 mt-5">
                  <div className="text-center">
                    <button
                      className={`text-gray-700 bg-white hover:border border-red-700 font-bold py-2 px-4 rounded-full ${
                        page === 0 ? "bg-black cursor-not-allowed" : ""
                      }`}
                      onClick={() => nextPage(page - 1)}
                      disabled={page === 0}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:-scale-x-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      className={`text-gray-700 bg-white hover:border border-red-700 font-bold py-2 px-4 rounded-full ${
                        page === halaman ? "bg-black cursor-not-allowed" : ""
                      }`}
                      onClick={() => nextPage(page + 1)}
                      disabled={page === pageCount}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:-scale-x-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DataAtlit;
