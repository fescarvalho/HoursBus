import CardNatIta from "../components/CardsNatividade/CardNatIta";
import { motion } from "framer-motion";
import CardNatPorc from "./CardsNatividade/CardNatPorc";
import CardNatVarre from "./CardsNatividade/CardNatVarre";
import CardNatCampos from "./CardsNatividade/CardNatCampos";
import CardNatQue from "./CardsNatividade/CardNatQue";

const Natividade = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <p className="aviso">
        <span className="avisotwo">ATENÇÃO!!!</span>
        Horários atualizados de acordo com o post do instagram oficial da Rodoviaria de
        Natividade - @rodoviarianatividade
      </p>
      <p className="avisotwo">CLIQUE NA ROTA PARA VER OS HORÁRIOS</p>
      <div className="cards">
        <CardNatIta titleFrom="Natividade" titleTo="Itaperuna" />
        <CardNatPorc titleFrom="Natividade" titleTo="Porciuncula" />
        <CardNatVarre titleFrom="Natividade" titleTo="Varre-Sai" />
        <CardNatCampos titleFrom="Natividade" titleTo="Campos" />
        <CardNatQue titleFrom="Natividade" titleTo="Querendo" />
      </div>
    </motion.div>
  );
};

export default Natividade;
