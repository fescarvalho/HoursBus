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
        <div className="cards">
          <Card titleFrom="Porciuncula" titleTo="Itaperuna" />
          <Card1 titleFrom="Itaperuna" titleTo="Porciuncula" />
          <Card2 titleFrom="VarreSai" titleTo="Itaperuna" />
          <Card3 titleFrom="Itaperuna" titleTo="VarreSai" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
