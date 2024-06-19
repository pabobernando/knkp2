import React from "react";

const ModalImagePelatih = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          &times;
        </button>
        <img
          src={`data:image/jpeg;base64,${imageSrc}`}
          alt="Lampiran"
          className="max-w-full max-h-screen"
        />
      </div>
    </div>
  );
};

export default ModalImagePelatih;
