import styles from "./Footer.module.css";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <h4>Desenvolvido por Fernando Carvalho </h4>
      <ul className={styles.social}>
        <a href="https://www.instagram.com/fescarv/" target="_blanck">
          <li>
            <FaInstagram />
          </li>
        </a>
        <a href="https://twitter.com/_fescarv" target="_blanck">
          <li>
            <FaTwitter />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/fecarvalhodev/" target="_blanck">
          <li>
            <FaLinkedinIn />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
