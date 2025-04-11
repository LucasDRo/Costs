import styles from './ProjectCard.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({id, name, budget, category, handleRemove}) {
    return (
        <div className={styles.card_container}>
            <h4>{name}</h4>
            <h3>{category?.name}</h3>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p>
                <span></span> {category}
            </p>
            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>
    );
}

export default ProjectCard;