import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-6 font-bold">Alamat</h5>
          <p className="mb-4">Jalan Raya No. 123</p>
        </div>

        <div className="w-full md:w-1/3 text-center">
          <h5 className="uppercase mb-6 font-bold">Nomor Telepon</h5>
          <p className="mb-4">+62 123 456 789</p>
        </div>

        <div className="w-full md:w-1/3 text-center">
          <h5 className="uppercase mb-6 font-bold">WhatsApp</h5>
          <p className="mb-4">+62 123 456 789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
