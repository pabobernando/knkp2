import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pengurus from "./pages/Pengurus";
import Berita from "./pages/Berita";
import ModalAdd from "./components/ModalAdd";
import DataPelatih from "./pages/DataPelatih";
import DataAtlit from "./pages/DataAtlit";
import DataWasit from "./pages/DataWasit";
import DataSarpras from "./pages/DataSarpras";
import LoginPage from "./pages/LoginPage";
import Sambutan from "./pages/Sambutan";
import CMS from "./pages/Cms";
import Galery from "./pages/Galery";
import DetailNew from "./pages/DetailNew";
import CreateNews from "./pages/CreateNews";
import EditNews from "./pages/EditNews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Pengurus" element={<Pengurus />}></Route>
        <Route path="/Berita" element={<Berita />}></Route>
        <Route path="/modalAdd" element={<ModalAdd />}></Route>
        <Route path="/DataAtlit" element={<DataAtlit />}></Route>
        <Route path="/DataPelatih" element={<DataPelatih />}></Route>
        <Route path="/DataWasit" element={<DataWasit />}></Route>
        <Route path="/DataSarpras" element={<DataSarpras />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/Sambutan" element={<Sambutan />}></Route>
        <Route path="/CMS" element={<CMS />}></Route>
        <Route path="/Galery" element={<Galery />}></Route>
        <Route path="/Detail/:id" element={<DetailNew />}></Route>
        <Route path="/CreateNews" element={<CreateNews />}></Route>
        <Route path="/EditNews/:id" element={<EditNews />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
