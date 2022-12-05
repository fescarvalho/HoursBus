import styles from "./CardCircle.module.css";

import { FaArrowDown } from "react-icons/fa";
import { CardProps } from "../interface";
import { useState } from "react";
import { PopularNova } from "./../hours-mock-ciruclar.json";

const CardCircularPop = ({ titleTo, titleFrom }: CardProps) => {
  const [show, setShow] = useState(false);

  const showClass = () => {
    setShow(!show);
  };

  return (
    <div
      className={`${show === true ? styles.cardMainActiveCircle : styles.cardMainCircle}`}
    >
      <div
        className={`${
          show === true ? styles.cardTitleActiveCircle : styles.cardTitleCircle
        }`}
        onClick={showClass}
      >
        <h2>{titleFrom}</h2>
        <FaArrowDown />
        <h2>{titleTo}</h2>
      </div>

      <div
        className={`${
          show == true ? styles.cardContentCircle : styles.cardContentCircleFalse
        }`}
      >
        <ul className={styles.listCircle}>
          <h2>
            <span></span>Manhã<span></span>
          </h2>
          {PopularNova.Manhã.map((item) => (
            <li key={item.hr}>{item.hr}</li>
          ))}
        </ul>
        <ul className={styles.listDownCircle}>
          <h2>
            <span></span>Tarde<span></span>
          </h2>
          {PopularNova.Tarde.map((item) => (
            <li key={item.hr}>{item.hr}</li>
          ))}
        </ul>

        <p>
          <span></span>Também aos domingos e feriados
        </p>
      </div>
    </div>
  );
};

export default CardCircularPop;
