import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import NavbarAndroid from "../components/NavbarAndroid";
import KoniLogo from "../assets/koni.png";
import { useNavigate } from "react-router-dom";

function Berita() {
  const navigate = useNavigate();
  const [dataBerita, setDataBerita] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getDataBerita = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/berita?page=0&limit=10"
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      console.log(data);
      setDataBerita(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok && response.status === 200) {
        const json = await response.json();
        window.localStorage.setItem("token", json.token);
        setTimeout(() => {
          window.localStorage.removeItem("token");
        }, 60 * 60 * 1000);
        console.log("Login successful:", json);
        setShowModal(false);
        setIsLoggedIn(true);
      } else {
        alert("Failed to login. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    getDataBerita();
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <div className="w-full p-12 bg-gray-900">
        <div className="flex items-center justify-between mb-12 header">
          <div className="flex items-center">
            <p className="mb-4 text-4xl font-bold text-white">
              Berita Koni Kulon Progo
            </p>
          </div>
          <div className="flex items-center">
            {!isLoggedIn && (
              <button
                className="ml-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                onClick={handleLoginClick}
              >
                Login Admin
              </button>
            )}
            {isLoggedIn && (
              <button
                className="ml-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                onClick={() => {
                  navigate("/createNews");
                }}
              >
                Create News
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {dataBerita.map((berita) => (
            <div
              key={berita.id}
              className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
            >
              <Link to={`/Detail/${berita.id}`} className="block w-full h-full">
                <img
                  alt={`blog photo ${berita.id}`}
                  src={`data:image/jpeg;base64,${berita.image}`}
                  className="object-cover w-full max-h-40"
                />
                <div className="w-full p-4 bg-gray-800">
                  <p className="font-medium text-red-500 text-md">
                    {berita.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="mb-2 text-xl font-medium text-white">
                      {berita.title}
                    </p>
                    {isLoggedIn && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/editNews/${berita.id}`);
                        }}
                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <p className="font-light text-gray-300 text-md">
                    {berita.content}
                  </p>
                  <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src={`data:image/jpeg;base64,${berita.avatar}`}
                        className="mx-auto object-cover rounded-full h-10 w-10"
                      />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-white">{berita.author}</p>
                      <p className="text-gray-400">{berita.post_date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <NavbarAndroid />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src={KoniLogo}
                alt="Koni Logo"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-red-600 hover:text-red-700"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handleCloseModal}
                    type="button"
                    className="w-1/2 mr-2 flex justify-center rounded-md bg-white border border-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 ml-2 flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Berita;
