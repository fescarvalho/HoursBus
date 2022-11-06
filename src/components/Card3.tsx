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
          <li className={styles.active}>{Horarios.ItaperunaVarreSai[0]}</li>
          <li>{Horarios.ItaperunaVarreSai[1]}</li>
          <li className={styles.active}>{Horarios.ItaperunaVarreSai[2]}</li>
          <li className={styles.active}>{Horarios.ItaperunaVarreSai[3]}</li>
        </ul>
        <p>
          <span></span>Tambem aos domingos e feriados
        </p>
      </div>
    </div>
  );
};

export default Card;
