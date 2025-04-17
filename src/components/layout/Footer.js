import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100052148408344"><FaFacebook /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/lucasdini_r/"><FaInstagram /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucas-diniz-rodrigues-879743225/"><FaLinkedin /></a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2025
      </p>
    </footer>
  );
}

export default Footer;
