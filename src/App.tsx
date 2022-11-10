import "./App.css";

import CardItaVar from "./components/CardItaVar";
import CardVarIta from "./components/CardVarIta";
import CardItaPorc from "./components/CardItaPorc";
import CardPorcIta from "./components/CardPorcIta";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <p className="aviso">
          <span>ATENÇÃO!!!</span>
          Horários seguem a mudança feita dia 22/02/2022, de acordo com o aviso pregado no
          guichê da rodoviária de Natividade-RJ
        </p>
        <div className="cards">
          <CardPorcIta titleFrom="Porciúncula" titleTo="Itaperuna" />
          <CardItaPorc titleFrom="Itaperuna" titleTo="Porciúncula" />
          <CardVarIta titleFrom="Varre-Sai" titleTo="Itaperuna" />
          <CardItaVar titleFrom="Itaperuna" titleTo="Varre-Sai" />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
