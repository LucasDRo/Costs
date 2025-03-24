import styles from "./Home.module.css";
import saving from "./../../img/saving.png";
import Linkbutton from "../layout/Linkbutton";

function Home() {
  return (
    <section className={styles.home_container}>
      <div>
        <h1>
          Bem vindo ao <span>Costs</span>
        </h1>
        <p>Comece a genrenciar os seus projetos agora mesmo</p>
        <Linkbutton to="newproject" text="Criar Projeto" />
      </div>
      <img src={saving} alt="Costs" />
    </section>
  );
}

export default Home;
