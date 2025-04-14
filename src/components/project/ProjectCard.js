import styles from "./ProjectCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";

function ProjectCard({ id, name, budget, category, handleRemove }) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

  return (
    <div className={styles.card_container}>
      <h4>{name}</h4>
      <h3>{category?.name}</h3>
      <p>
        <span>Orçamento:</span> R$ {budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span>{category}
      </p>
      <div className={styles.buttons_container}>
        <p>
          <FaPencil /> Editar
        </p>
        <button onClick={remove}>
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
