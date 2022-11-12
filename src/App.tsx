import "./App.css";

import CardItaVar from "./components/CardItaVar";
import CardVarIta from "./components/CardVarIta";
import CardItaPorc from "./components/CardItaPorc";
import CardPorcIta from "./components/CardPorcIta";
import HashLoader from "react-spinners/HashLoader";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState, CSSProperties } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <div className="app">
        {loading ? (
          <div className="loader">
            <HashLoader loading={loading} color={"#f0d467"} size={60} />
          </div>
        ) : (
          <div className="app-content">
            <Header />
            <p className="aviso">
              <span>ATENÇÃO!!!</span>
              Horários seguem a mudança feita dia 22/02/2022, de acordo com o aviso
              pregado no guichê da rodoviária de Natividade-RJ
            </p>
            <div className="cards">
              <CardPorcIta titleFrom="Porciúncula" titleTo="Itaperuna" />
              <CardItaPorc titleFrom="Itaperuna" titleTo="Porciúncula" />
              <CardVarIta titleFrom="Varre-Sai" titleTo="Itaperuna" />
              <CardItaVar titleFrom="Itaperuna" titleTo="Varre-Sai" />
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
