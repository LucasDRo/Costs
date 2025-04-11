import Message from "../layout/Message";
import style from "./Projects.module.css";
import { useLocation } from "react-router-dom";
import Linkbutton from "../layout/Linkbutton";

function Projects({}) {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={style.project_master_container}>
      <div className={style.title_container}>
        <h1>Meus Projetos</h1>
        <Linkbutton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <div className={style.project_container}>
        <p>Projetos...</p>
      </div>
    </div>
  );
}

export default Projects;
