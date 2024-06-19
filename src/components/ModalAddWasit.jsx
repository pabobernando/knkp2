import React, { useState, useEffect } from "react";
import caborData from "../config/caborData";

const initialState = {
  nik: "",
  nama: "",
  alamat: "",
  ttl: "",
  telephone: "",
  gender: "",
  keterangan: "",
  prestasi: "",
  image: "",
  lampiran: "",
  caborId: 0,
};

function ModalAddWasit({
  isOpen,
  onOk,
  onClose,
  mode,
  setUploadedImage,
  setUploadedLampiran,
  initialValue = undefined,
}) {
  const [formValue, setFormValue] = useState(initialState);
  const [uploadedImage] = useState(null);
  const [uploadedLampiran] = useState(null);

  const CaborId = caborData;
  useEffect(() => {
    if (mode === "edit" && initialValue) {
      setFormValue(initialValue);
    } else {
      setFormValue(initialState);
    }
  }, [mode, initialValue]);

  function updateForm(field, value) {
    const cForm = Object.assign({}, formValue);
    setFormValue({
      ...cForm,
      [field]: value,
    });
  }

  function handleFileUpload(event, field) {
    const file = event.target.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    if (file.size > 1024 * 1024 * 5) {
      console.error("File size exceeds the limit of 5MB");
      return;
    }

    if (!file.type.match("image/.*") && field === "image") {
      console.error("Invalid image format. Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const base64File = e.target.result.replace("data:image/png;base64,", "");
      if (field === "image") {
        setUploadedImage(base64File);
      } else {
        setUploadedLampiran(base64File);
      }
      updateForm(field, base64File);
    };
    reader.onerror = (error) => console.error("Error reading file:", error);
  }

  function handleClose() {
    setFormValue(initialState);
    setUploadedImage(null);
    onClose();
  }

  function handleSubmit(event) {
    event.preventDefault();
    onOk(formValue);
  }

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center z-40 justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-lg shadow sm:max-w-sm sm:w-full sm:mx-auto sm:overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="block px-2 py-1 sm:px-6">
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 text-gray-500 bg-white">
                    Tambah Data Wasit
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full space-y-2">
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        onChange={(event) => handleFileUpload(event, "image")}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        value={formValue.nik}
                        type="number"
                        name="nik"
                        id="nik"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Nomor Indentitas Kependudukan"
                        required
                        onChange={(event) =>
                          updateForm("nik", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        name="nama"
                        value={formValue.nama}
                        id="nama"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Nama Lengkap"
                        onChange={(event) =>
                          updateForm("nama", event.target.value)
                        }
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        name="alamat"
                        value={formValue.alamat}
                        id="alamat"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Alamat Lengkap"
                        required
                        onChange={(event) =>
                          updateForm("alamat", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        name="ttl"
                        value={formValue.ttl}
                        id="ttl"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="TTL"
                        required
                        onChange={(event) =>
                          updateForm("ttl", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        name="telephone"
                        value={formValue.telephone}
                        id="telephone"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                    <div className=" relative ">
                      <input
                        type="text"
                        name="prestasi"
                        value={formValue.prestasi}
                        id="prestasi"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Prestasi"
                        onChange={(event) =>
                          updateForm("prestasi", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="text"
                        name="keterangan"
                        value={formValue.keterangan}
                        id="keterangan"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Keterangan"
                        onChange={(event) =>
                          updateForm("keterangan", event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <input
                        type="file"
                        name="lampiran"
                        id="lampiran"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        onChange={(event) =>
                          handleFileUpload(event, "lampiran")
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <select
                        name="caborId"
                        value={formValue.caborId}
                        id="caborId"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                  <div>
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
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default ModalAddWasit;
