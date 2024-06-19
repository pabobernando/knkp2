import React, { useState, useEffect } from "react";
import caborData from "../config/caborData";

const initialState = {
  nik: "",
  nama: "",
  alamat: "",
  ttl: "",
  telephone: "",
  prestasi: "",
  image: "",
  caborId: 0,
};

function ModalAdd({
  isOpen,
  onOk,
  onClose,
  mode,
  setUploadedImage,
  initialValue = undefined,
}) {
  const [formValue, setFormValue] = useState(initialState);
  const [uploadedImage] = useState(null);

  const CaborId = caborData;

  useEffect(() => {
    if (mode === "edit" && initialValue) {
      setFormValue(initialValue);
    } else {
      setFormValue(initialState);
    }
  }, [mode, initialValue]);

  function updateForm(field, value) {
    setFormValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleClose() {
    setFormValue(initialState);
    setUploadedImage(null);
    onClose();
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (!file) {
      console.error("No image selected");
      return;
    }

    if (file.size > 1024 * 1024 * 5) {
      console.error("Image size exceeds the limit of 5MB");
      return;
    }

    if (!file.type.match("image/.*")) {
      console.error("Invalid image format. Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const base64Image = e.target.result.replace("data:image/png;base64,", "");
      setUploadedImage(base64Image);
      updateForm("image", base64Image);
    };
    reader.onerror = (error) => console.error("Error reading image:", error);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onOk(formValue);
  }

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center z-40 justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="block px-4 py-2 sm:px-10">
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 text-gray-500 bg-white">
                    {mode === "add" ? "Tambah Data Atlit" : "Edit Data Atlit"}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full space-y-4">
                  <div className="w-full">
                    <div className="relative">
                      <input
                        value={formValue.nik}
                        type="number"
                        name="nik"
                        id="nik"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Nomor Indentitas Kependudukan"
                        required
                        onChange={(event) =>
                          updateForm("nik", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="text"
                        name="nama"
                        value={formValue.nama}
                        id="nama"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Nama Lengkap"
                        onChange={(event) =>
                          updateForm("nama", event.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="text"
                        name="alamat"
                        value={formValue.alamat}
                        id="alamat"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Alamat Lengkap"
                        required
                        onChange={(event) =>
                          updateForm("alamat", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="text"
                        name="ttl"
                        value={formValue.ttl}
                        id="ttl"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="TTL"
                        required
                        onChange={(event) =>
                          updateForm("ttl", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="text"
                        name="telephone"
                        value={formValue.telephone}
                        id="telephone"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Telephone"
                        required
                        onChange={(event) =>
                          updateForm("telephone", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <select
                        name="gender"
                        value={formValue.gender}
                        id="gender"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                        onChange={(event) =>
                          updateForm("gender", event.target.value)
                        }
                      >
                        <option value="">Jenis Kelamin</option>
                        <option value="PUTRA">PUTRA</option>
                        <option value="PUTRI">PUTRI</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="text"
                        name="prestasi"
                        value={formValue.prestasi}
                        id="prestasi"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Prestasi"
                        onChange={(event) =>
                          updateForm("prestasi", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <select
                        name="caborId"
                        value={formValue.caborId}
                        id="caborId"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                        onChange={(event) =>
                          updateForm("caborId", parseInt(event.target.value))
                        }
                      >
                        <option value="">Cabang Olahraga</option>
                        {CaborId.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.nama}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full space-x-2 rounded-md shadow-sm my-5">
                    <button
                      onClick={handleClose}
                      className="py-2 px-4 bg-white border border-black hover:bg-gray-500 hover:text-white focus:ring-black focus:ring-offset-black text-black w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ModalAdd;
