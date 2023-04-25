import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pengurus from './pages/Pengurus'
import Berita from './pages/Berita'
import ModalAdd from './components/ModalAdd'
import DataPelatih from './pages/DataPelatih'
import DataAtlit from './pages/DataAtlit'
import DataWasit from './pages/DataWasit'
import DataSarpras from './pages/DataSarpras'
import LoginPage2 from './pages/LoginPage2'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Pengurus' element={<Pengurus />}></Route>
        <Route path='/Berita' element={<Berita />}></Route>
        <Route path='/modalAdd' element={<ModalAdd />}></Route>
        <Route path='/DataAtlit' element={<DataAtlit />}></Route>
        <Route path='/DataPelatih' element={<DataPelatih />}></Route>
        <Route path='/DataWasit' element={<DataWasit />}></Route>
        <Route path='/DataSarpras' element={<DataSarpras />}></Route>
        <Route path='/LoginPage2' element={<LoginPage2 />}></Route>
      </Routes>
    </Router>
  )
}

export default App
