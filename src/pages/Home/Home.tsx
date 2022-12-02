import CardItaVar from "../../components/CardItaPorc";
import CardVarIta from "../../components/CardVarIta";
import CardItaPorc from "../../components/CardItaPorc";
import CardPorcIta from "../../components/CardPorcIta";
import { motion } from "framer-motion";
import "./Home.css";
const Home = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <p className="aviso">
        <span className="avisotwo">ATENÇÃO!!!</span>
        Horários seguem a mudança feita dia 22/02/2022, de acordo com o aviso pregado no
        guichê da rodoviária de Natividade-RJ
      </p>
      <p className="avisotwo">CLIQUE NA ROTA PARA VER OS HORÁRIOS</p>
      <div className="cards">
        <CardPorcIta titleFrom="Porciúncula" titleTo="Itaperuna" />
        <CardVarIta titleFrom="Varre-Sai" titleTo="Itaperuna" />
        <CardItaPorc titleFrom="Itaperuna" titleTo="Porciúncula" />
        <CardItaVar titleFrom="Itaperuna" titleTo="Varre-Sai" />
      </div>
    </motion.div>
  );
};

export default Home;
