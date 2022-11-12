import styles from "./Card.module.css";
import { FaArrowDown } from "react-icons/fa";
import { CardProps } from "../interface";
import { useState } from "react";
import { ItaperunaVarreSai } from "./../hours-mock.json";

const CardItaVar = ({ titleTo, titleFrom }: CardProps) => {
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardTitle}>
        <h2>{titleFrom}</h2>
        <FaArrowDown />
        <h2>{titleTo}</h2>
      </div>
      <div className={styles.cardContent}>
        <ul className={styles.list}>
          <h2>
            <span></span>Manhã<span></span>
          </h2>
          {ItaperunaVarreSai.Manhã.map((item) => (
            <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
              {item.hr}
            </li>
          ))}
        </ul>
        <ul className={styles.listDown}>
          <h2>
            <span></span>Tarde<span></span>
          </h2>
          {ItaperunaVarreSai.Tarde.map((item) => (
            <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
              {item.hr}
            </li>
          ))}
        </ul>
        <p>
          <span></span>Também aos domingos e feriados
        </p>
      </div>
    </div>
  );
};

export default CardItaVar;
