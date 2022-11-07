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
          <h2>
            <span></span> Manhã<span></span>
          </h2>
          <li className={styles.active}>{Horarios.ItaperunaPorciuncula[0]}</li>
          <li>{Horarios.ItaperunaPorciuncula[1]}</li>
          <li className={styles.active}>{Horarios.ItaperunaPorciuncula[2]}</li>
          <li>{Horarios.ItaperunaPorciuncula[3]}</li>
        </ul>
        <ul className={styles.listDown}>
          <h2>
            <span></span> Tarde<span></span>
          </h2>
          <li className={styles.active}>{Horarios.ItaperunaPorciuncula[4]}</li>
          <li>{Horarios.ItaperunaPorciuncula[5]}</li>
          <li className={styles.active}>{Horarios.ItaperunaPorciuncula[6]}</li>
          <li>{Horarios.ItaperunaPorciuncula[7]}</li>
          <h2 className={styles.noite}>
            <span></span> Noite<span></span>
          </h2>
          <li className={styles.active}>{Horarios.ItaperunaPorciuncula[8]}</li>
          <li className={styles.active}>{Horarios.ItaperunaPorciuncula[9]}</li>
        </ul>
        <p>
          <span></span>Também aos domingos e feriados
        </p>
      </div>
    </div>
  );
};

export default Card;
