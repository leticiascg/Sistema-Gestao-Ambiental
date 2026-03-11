import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SolicitarColeta from "./pages/SolicitarColeta";
import Denuncias from "./pages/Denuncias";
import ProcedimentosDescarte from "./pages/ProcedimentosDescarte";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/solicitar-coleta" element = {<SolicitarColeta />} />
        <Route path = "/denuncias" element = {<Denuncias />} />
        <Route path = "/procedimentos-descarte" element = {<ProcedimentosDescarte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;