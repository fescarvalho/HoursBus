import styles from "./Card.module.css";
import { FaArrowDown } from "react-icons/fa";
import { CardProps } from "../interface";
import { useState } from "react";
import { Horarios } from "./../hours-mock.json";

const Card = ({ titleTo, titleFrom }: CardProps) => {
  const [show, setShow] = useState(false);

  const showClass = () => {
    setShow(true);
  };

  return (
    <div className={styles.cardMain}>
      <div className={styles.cardTitle} onClick={showClass}>
        <h2>{titleFrom}</h2>
        <FaArrowDown />
        <h2>{titleTo}</h2>
      </div>
      <div className={styles.cardContent}>
        <ul className={styles.list}>
          <li className={styles.active}>{Horarios.PorciunculaItaperuna[0]}</li>
          <li className={styles.active}>{Horarios.PorciunculaItaperuna[1]}</li>
          <li className={styles.active}>{Horarios.PorciunculaItaperuna[2]}</li>
          <li>{Horarios.PorciunculaItaperuna[3]}</li>
          <li className={styles.active}>{Horarios.PorciunculaItaperuna[4]}</li>
          <li>{Horarios.PorciunculaItaperuna[5]}</li>
          <li className={styles.active}>{Horarios.PorciunculaItaperuna[6]}</li>
          <li>{Horarios.PorciunculaItaperuna[7]}</li>
          <li className={styles.active}>{Horarios.PorciunculaItaperuna[8]}</li>
          <li>{Horarios.PorciunculaItaperuna[9]}</li>
        </ul>
        <p>
          <span></span>Tambem aos domingos e feriados
        </p>
      </div>
    </div>
  );
};

export default Card;
