import React from "react";
import styles from "./Footer.module.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <h4>Desenvolvido por Fernando Carvalho</h4>
    </div>
  );
};

export default Footer;
