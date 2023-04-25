import { motion } from "framer-motion";
import Loader from "../components/Loading/Loading";

/* import CardItaPorc from "../../components/CardsItaperuna/CardItaPorc";
import CardItaQue from "../../components/CardsItaperuna/CardItaQue";
import CardItaNat from "../../components/CardsItaperuna/CardItaNat";
import CardItaVar from "../../components/CardsItaperuna/CardItaVar"; */

const Itaperuna = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      {/*  <p className="aviso">
        <span className="avisotwo">ATENÇÃO!!!</span>
        Horários atualizados em 13/04/2023
      </p>
      <p className="avisotwo">CLIQUE NA ROTA PARA VER OS HORÁRIOS</p> */}
      <div className="cards">
        <h2>EM BREVE...</h2>

        {/*   <CardItaNat titleFrom="Itaperuna" titleTo="Natividade" />
        <CardItaPorc titleFrom="Itaperuna" titleTo="Porciúncula" />
        <CardItaVar titleFrom="Itaperuna" titleTo="Varre-Sai" />
        <CardItaQue titleFrom="Itaperuna" titleTo="Querendo" /> */}
      </div>
    </motion.div>
  );
};

export default Itaperuna;
