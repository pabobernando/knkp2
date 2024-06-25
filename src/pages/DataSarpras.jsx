import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarSide from "../components/NavbarSide";
import ModalDelete from "../components/ModalDeleteSarpras";
import ModalAdd from "../components/ModalAddSarpras";
import DropdownCabor from "../components/DropdownCabor";
import ModalImageSarpras from "../components/ModalImageSarpras";

function DataSarpras() {
  const [sarprass, setSarprass] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [selectedSarpras, setSelectedSarpras] = useState(null);
  const [page, setPage] = useState(0);
  const [halaman, setHalaman] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [modalMode, setModalMode] = useState("add");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModalAdd = (sarpras) => {
    setModalMode("add");
    setIsOpenAdd(true);
    setSelectedSarpras(sarpras);
  };

  const openModalEdit = (sarpras) => {
    setModalMode("edit");
    setIsOpenAdd(true);
    setSelectedSarpras(sarpras);
  };

  const openModalDelete = (sarpras) => {
    setSelectedSarpras(sarpras);
    setIsOpen(true);
  };

  const getDataSarpras = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/sarpras?page=${page}&limit=10`,
        { headers }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("get data sarpras: ", data);
      setSarprass(data);
    } catch (error) {
      console.error("Failed to fetch sarpras data:", error);
    }
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const sarpras = selectedSarpras;
    fetch(`http://localhost:3000/api/v1/sarpras/${sarpras.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })
      .then((response) => {
        if (response.ok) {
          // nek lancar
          const updatedSarprass = sarprass.filter((a) => a.id !== sarpras.id);
          setSarprass(updatedSarprass);
          setIsOpen(false);
        } else {
          // nek semisal err
          throw new Error("Gagal menghapus data sarpras");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleAdd = (form) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const formData = { ...form, image: uploadedImage };
    console.log("iki form e sek dikirim :", formData);
    fetch("http://localhost:3000/api/v1/sarpras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsOpenAdd(false);
          getDataSarpras(page);
        } else {
          throw new Error("Gagal menambahkan data sarpras");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (form) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const formData = { ...form, image: uploadedImage };
    console.log("iki form edit sek dikirim", formData);
    const sarpras = selectedSarpras;
    fetch(`http://localhost:3000/api/v1/sarpras/${sarpras.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsOpenAdd(false);
          getDataSarpras(page);
        } else {
          throw new Error("Gagal edit data sarpras");
        }
      })
      .catch((error) => console.error(error));
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsOpenAdd(false);
  };

  useEffect(() => {
    getDataSarpras({});
    const token = window.localStorage.getItem("token");
    if (!token) {
      navigate("/LoginPage");
    }
    fetchPageCount();
  }, [page]);

  const fetchPageCount = () => {
    fetch("http://localhost:3000/api/v1/count")
      .then((response) => response.json())
      .then((data) => {
        const pembulatanPage = Math.ceil(data.sarpras / 10); // membulatkan angka ke atas
        setPageCount(pembulatanPage);
        console.log(pageCount); // simpan nilai pembulatanPage ke dalam state
      })
      .catch((error) => console.error(error));
  };

  const nextPage = (newPage) => {
    if (newPage >= 0 && newPage < pageCount) {
      setPage(newPage);
    }
  };

  const handleOk = (form) => {
    if (form.id) {
      handleEdit(form);
    } else {
      handleAdd(form, uploadedImage);
    }
  };

  const downloadFile = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/sarpras/download",
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
      link.setAttribute("download", "Data Sarpras.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <ModalImageSarpras
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        imageSrc={selectedImage}
      />
      <ModalDelete
        onClose={closeModal}
        onOk={handleDelete}
        isOpen={isOpen}
        dataName={selectedSarpras?.nama}
      />
      <ModalAdd
        onClose={() => setIsOpenAdd(false)}
        onOk={handleOk}
        isOpen={isOpenAdd}
        initialValue={selectedSarpras}
        mode={modalMode}
        setUploadedImage={setUploadedImage}
      />
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen shadow-lg lg:block w-80">
          <NavbarSide />
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
              DATA SARPRAS
            </h1>
            <header className="z-40 flex items-center justify-between w-full h-16">
              <DropdownCabor
                onChange={(idCabor) => getDataSarpras({ cabor_id: idCabor })}
              />
              <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                  <button
                    onClick={downloadFile}
                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <span className="text-white hidden sm:flex">
                      Download File
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      openModalAdd();
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-white hidden sm:flex">
                      Tambah Data
                    </span>
                  </button>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="w-full">
                <table className="table-auto w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nama Barang
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Keterangan
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tahun
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cabor
                      </th>
                      <th
                        scope="col"
                        className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sarprass.map((sarpras, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {sarpras.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex flex-col">
                            <span>
                              <img
                                className="h-11 w-11 mr-4 cursor-pointer"
                                src={`data:image/jpeg;base64,${sarpras.image}`}
                                alt="lampiran"
                                onClick={() => openImageModal(sarpras.image)}
                              />
                            </span>
                            <span>{sarpras.keterangan}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {sarpras.tahun}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {sarpras.cabor.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end items-center">
                            <button
                              onClick={() => {
                                setSelectedSarpras(sarpras);
                                openModalEdit(sarpras);
                              }}
                              className="mr-2 inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
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
                              onClick={() => openModalDelete(sarpras)}
                              className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <svg
                                className="h-4 w-4 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                {" "}
                                <polyline points="3 6 5 6 21 6" />{" "}
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                                <line x1="10" y1="11" x2="10" y2="17" />{" "}
                                <line x1="14" y1="11" x2="14" y2="17" />
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
                        page === pageCount ? "bg-black cursor-not-allowed" : ""
                      }`}
                      onClick={() => nextPage(page + 1)}
                      disabled={page === pageCount - 1}
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

export default DataSarpras;
