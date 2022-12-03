import CardCircularPop from "../../components/CardCircularPop";
import { motion } from "framer-motion";
import CardCircularFio from "../../components/CardCircularFio";
const Circular = () => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <div className="cards cardcirle">
        <p className="aviso">
          <span className="avisotwo">ATENÇÃO!!!</span>
          Todos os horários do percurso <b>POPULAR NOVA ➡️ CANTINHO DO FIORELLO</b>,
          passam
          <b> NA IDA</b>, pelo bairro ilha (HOSPITAL) .
        </p>
        <p className="aviso">
          Os novos horários do circular não passam pelo bairro liberdade.
        </p>

        <p className="avisotwo circleaviso">CLIQUE NA ROTA PARA VER OS HORÁRIOS</p>
        <CardCircularPop titleFrom="Popular Nova" titleTo="Cantinho do Fiorello" />
        <CardCircularFio titleFrom="Cantinho do Fiorello" titleTo="Popular Nova" />
      </div>
    </motion.div>
  );
};

export default Circular;
