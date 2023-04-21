import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pengurus from './pages/Pengurus'
import Berita from './pages/Berita'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Pengurus' element={<Pengurus />}></Route>
        <Route path='/Berita' element={<Berita />}></Route>
        <Route path='/LoginPage' element={<LoginPage />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  )
}

export default App
