import CardItaVar from "../../components/CardItaVar";
import CardVarIta from "../../components/CardVarIta";
import CardItaPorc from "../../components/CardItaPorc";
import CardPorcIta from "../../components/CardPorcIta";
import { motion } from "framer-motion";
import "./Home.css";
import CardQueIta from "../../components/CardQueIta";
import CardItaQue from "../../components/CardItaQue";
import CardNatIta from "../../components/CardNatIta";
import CardItaNat from "../../components/CardItaNat";
const Home = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <p className="aviso">
        <span className="avisotwo">ATENÇÃO!!!</span>
        Horários atualizados em 13/04/2023
      </p>
      <p className="avisotwo">CLIQUE NA ROTA PARA VER OS HORÁRIOS</p>
      <div className="cards">
        <CardNatIta titleFrom="Natividade" titleTo="Itaperuna" />
        <CardItaNat titleFrom="Itaperuna" titleTo="Natividade" />
        <CardPorcIta titleFrom="Porciúncula" titleTo="Itaperuna" />
        <CardVarIta titleFrom="Varre-Sai" titleTo="Itaperuna" />
        <CardItaPorc titleFrom="Itaperuna" titleTo="Porciúncula" />
        <CardItaVar titleFrom="Itaperuna" titleTo="Varre-Sai" />
        <CardQueIta titleFrom="Querendo" titleTo="Itaperuna" />
        <CardItaQue titleFrom="Itaperuna" titleTo="Querendo" />
      </div>
    </motion.div>
  );
};

export default Home;
