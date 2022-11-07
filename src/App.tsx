import "./App.css";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
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
          <Card titleFrom="Porciúncula" titleTo="Itaperuna" />
          <Card1 titleFrom="Itaperuna" titleTo="Porciúncula" />
          <Card2 titleFrom="Varre-Sai" titleTo="Itaperuna" />
          <Card3 titleFrom="Itaperuna" titleTo="Varre-Sai" />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
