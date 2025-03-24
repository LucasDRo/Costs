import { Link } from "react-router-dom";
import styles from "./Linkbutton.module.css"

function Linkbutton({ to, text }){
    return(
        <Link to={to} className={styles.btn}>
            {text}
        </Link>
    )
}

export default Linkbutton;