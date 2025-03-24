import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png";
import styles from "./NavBar.module.css";
import Container from "./Container";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img className={styles.img} src={logo} alt="logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">
              <FaHouseChimneyWindow /> Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">
              <FaInbox /> Projetos
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">
              <FaPhone /> Contato
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/company"><FaBuilding /> Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newproject"><FaPlus /> Novo Projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
