import { useEffect, useState } from "react";
import Rotas from "./Rotas";
import Loader from "./components/Loading/Loading";
import "./App.css";
import "./baseColors.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timeOut);
  }, []);

  return <div className="app">{loading ? <Loader /> : <Rotas />}</div>;
}

export default App;
