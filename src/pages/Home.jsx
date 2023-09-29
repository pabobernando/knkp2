import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import LogoKoni from '../assets/ilustrasi1.png'
import LogoAtlit from '../assets/siluetA.jpg'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Cta from '../components/Cta'
import VisiMisi from '../components/VisiMisi'

function Home() {

  const [jumlahAtlit, setJumlahAtlit] = useState()
  const [jumlahPelatih, setJumlahPelatih] = useState()
  const [jumlahWasit, setJumlahWasit] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/count')
  .then(response => response.json())
  .then(data => {
    setJumlahAtlit(data.atlit)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://localhost:3000/api/v1/count')
  .then(response => response.json())
  .then(data => {
    setJumlahPelatih(data.pelatih)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  fetch('http://localhost:3000/api/v1/count')
  .then(response => response.json())
  .then(data => {
    setJumlahWasit(data.wasit)
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  }, []);

  
  return (
    <>
    <Navbar className="drop-shadow-2xl" />
    <Cta />
    <VisiMisi />
    <Footer />
    </>
    
  )
}

export default Home