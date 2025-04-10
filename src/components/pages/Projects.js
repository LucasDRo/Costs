import Message from "../layout/Message";
import style from "./Projects.module.css";
import { useLocation } from "react-router-dom";

function Projects({}) {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={style.project_container}>
      {message && <Message type="success" msg={message} />}
      <h1>Meus Projetos</h1>
    </div>
  );
}

export default Projects;
