import React from "react";
import { Link } from "react-router-dom";

const NavbarAndroid = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 text-white shadow"
      >
        <div id="tabs" className="flex justify-between">
          <Link
            to="/galery"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1  xs:inline sm:inline md:inline xl:hidden"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className="inline-block mb-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="16"
                  cy="8"
                  r="2"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                ></circle>{" "}
                <path
                  d="M2 10.1537L2.98073 10.0129C9.95896 9.01086 15.9238 15.0312 14.8571 21.9998"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M22.0001 13.385L21.0266 13.2502C18.1829 12.8564 15.6098 14.2722 14.2847 16.5005"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="tab tab-home block text-xs">Gallery</span>
          </Link>
          <Link
            to="/dataAtlit"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1  xs:inline sm:inline md:inline xl:hidden"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 42 42"
              className="inline-block mb-1"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z"
                  fill="currentColor"
                  opacity="0.1"
                ></path>
                <g transform="translate(2.000000, 3.000000)">
                  <path
                    d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z"
                    fill="currentColor"
                    transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "
                  ></path>
                  <circle
                    stroke="currentColor"
                    strokeWidth="2"
                    cx="27.5"
                    cy="27.5"
                    r="7.5"
                  ></circle>
                </g>
              </g>
            </svg>
            <span className="tab tab-home block text-xs">Dashboard</span>
          </Link>
          <Link
            to="/pengurus"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1  xs:inline sm:inline md:inline xl:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              className="inline-block mb-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="12"
                  cy="6"
                  r="4"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                ></circle>{" "}
                <path
                  d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="tab tab-home block text-xs">Pengurus</span>
          </Link>
          <Link
            to="/berita"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1  xs:inline sm:inline md:inline xl:hidden"
          >
            <svg
              viewBox="0 0 32 32"
              width="25"
              height="25"
              className="inline-block mb-1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#f8f7f7"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="icomoon-ignore"> </g>{" "}
                <path
                  d="M9.069 2.672v14.928h-6.397c0 0 0 6.589 0 8.718s1.983 3.010 3.452 3.010c1.469 0 16.26 0 20.006 0 1.616 0 3.199-1.572 3.199-3.199 0-1.175 0-23.457 0-23.457h-20.259zM6.124 28.262c-0.664 0-2.385-0.349-2.385-1.944v-7.652h5.331v7.192c0 0.714-0.933 2.404-2.404 2.404h-0.542zM28.262 26.129c0 1.036-1.096 2.133-2.133 2.133h-17.113c0.718-0.748 1.119-1.731 1.119-2.404v-22.12h18.126v22.391z"
                  fill="#ffffff"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M12.268 5.871h13.861v1.066h-13.861v-1.066z"
                  fill="#ffffff"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M12.268 20.265h13.861v1.066h-13.861v-1.066z"
                  fill="#ffffff"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M12.268 23.997h13.861v1.066h-13.861v-1.066z"
                  fill="#ffffff"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M26.129 9.602h-13.861v7.997h13.861v-7.997zM25.063 16.533h-11.729v-5.864h11.729v5.864z"
                  fill="#ffffff"
                >
                  {" "}
                </path>{" "}
              </g>
            </svg>
            <span className="tab tab-home block text-xs">Berita</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NavbarAndroid;
