import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Circular from "./pages/Circular/Circular";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Rotas() {
  return (
    <>
      <div className="app-content">
        <div className="app-content2">
          <Header />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/circular" element={<Circular />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Rotas;
