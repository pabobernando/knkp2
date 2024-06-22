import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LogoKoni from "../assets/ilustrasi1.png";
import LogoAtlit from "../assets/siluetA.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Cta from "../components/Cta";
import VisiMisi from "../components/VisiMisi";
import Statistic from "../components/Statistic";
import NavbarAndroid from "../components/NavbarAndroid";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="drop-shadow-2xl" />
      <Cta />
      <Statistic />
      <VisiMisi />
      <Footer />
      <NavbarAndroid />
    </>
  );
}

export default Home;
