import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pengurus from './pages/Pengurus'
import Berita from './pages/Berita'
import LoginPage from './pages/LoginPage'
import DataPelatih from './pages/DataPelatih'
import DataAtlit from './pages/DataAtlit'
import DataWasit from './pages/DataWasit'
import DataSarpras from './pages/DataSarpras'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Pengurus' element={<Pengurus />}></Route>
        <Route path='/Berita' element={<Berita />}></Route>
        <Route path='/LoginPage' element={<LoginPage />}></Route>
        <Route path='/DataAtlit' element={<DataAtlit />}></Route>
        <Route path='/DataPelatih' element={<DataPelatih />}></Route>
        <Route path='/DataWasit' element={<DataWasit />}></Route>
        <Route path='/DataSarpras' element={<DataSarpras />}></Route>
      </Routes>
    </Router>
  )
}

export default App
