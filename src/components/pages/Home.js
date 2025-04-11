import styles from "./Home.module.css";
import saving from "./../../img/pig1.png";
import Linkbutton from "../layout/Linkbutton";

function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.bloco1}>
        <div>
          <h1>
            Bem vindo ao <span>Costs</span>
          </h1>
          <p>Comece a genrenciar os seus projetos agora mesmo</p>
          <Linkbutton to="newproject" text="Criar Projeto" />
        </div>
        <img src={saving} alt="Costs" />
      </div>
      <div className={styles.bloco2}>
        <div>
          <h1>
            Gerencie Seus Projetos de Forma <span>Simples e Eficaz</span>
          </h1>
          <p>
            Com o Costs, você pode organizar, monitorar e controlar todos os
            aspectos dos seus projetos em um único painel. Não importa o tamanho
            ou a complexidade, temos as ferramentas que você precisa para manter
            tudo sob controle.
          </p>
          <Linkbutton to="newproject" text="Criar Projeto" />
        </div>
        <div>
          <h1>
            Acompanhe os Custos em <span>Tempo Real</span>
          </h1>
          <p>
            Com a nossa plataforma, você tem total transparência sobre os gastos
            de cada projeto. Acompanhe as despesas à medida que elas ocorrem e
            garanta que seu orçamento seja sempre respeitado, sem surpresas no
            final.
          </p>
          <Linkbutton to="newproject" text="Criar Projeto" />
        </div>
        <div>
          <h1>
            Relatórios Detalhados para Tomar <span>Decisões Inteligentes</span>
          </h1>
          <p>
            Obtenha relatórios precisos e completos sobre o progresso, custos e
            desempenho dos seus projetos. Com essas informações ao seu alcance,
            você pode tomar decisões rápidas e bem-informadas, aumentando a
            eficiência e o sucesso dos seus projetos.
          </p>
          <Linkbutton to="newproject" text="Criar Projeto" />
        </div>
      </div>
    </section>
  );
}

export default Home;
