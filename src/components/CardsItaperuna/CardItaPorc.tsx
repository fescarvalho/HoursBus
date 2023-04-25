import styles from "../Card.module.css";
import { FaArrowDown } from "react-icons/fa";
import { CardProps } from "../../interface";
import { useState } from "react";
import { ItaperunaPorciuncula } from "./../../hours-mock.json";

const CardItaPorc = ({ titleTo, titleFrom }: CardProps) => {
  const [show, setShow] = useState(false);

  const showClass = () => {
    setShow(!show);
  };

  return (
    <div className={`${show === true ? styles.cardMainActive : styles.cardMain}`}>
      <div
        className={`${show === true ? styles.cardTitleActive : styles.cardTitle}`}
        onClick={showClass}
      >
        <h2>{titleFrom}</h2>
        <FaArrowDown />
        <h2>{titleTo}</h2>
      </div>

      <div className={`${show == true ? styles.cardContent : styles.cardContentFalse}`}>
        <ul className={styles.list}>
          <p>HORARIOS DE SEGUNDA A SEXTA</p>
          <h2>
            <span></span>Manhã<span></span>
          </h2>
          {ItaperunaPorciuncula.Manhã.map((item) => (
            <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
              {item.hr}
            </li>
          ))}
        </ul>
        <ul className={styles.listDown}>
          <h2>
            <span></span>Tarde<span></span>
          </h2>
          {ItaperunaPorciuncula.Tarde.map((item) => (
            <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
              {item.hr}
            </li>
          ))}
        </ul>
        <ul className={styles.listDown}>
          <h2>
            <span></span>Noite<span></span>
          </h2>
          {ItaperunaPorciuncula.Noite.map((item) => (
            <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
              {item.hr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardItaPorc;
