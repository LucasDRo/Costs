import Message from "../layout/Message";
import style from "./Projects.module.css";
import { useLocation } from "react-router-dom";
import Linkbutton from "../layout/Linkbutton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import { FaBookBookmark } from "react-icons/fa6";
import Loading from "../layout/Loading";

function Projects({}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 400);
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json)
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={style.project_master_container}>
      <div className={style.title_container}>
        <h1>
          <FaBookBookmark />
          Meus Projetos
        </h1>
        <Linkbutton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <div className={style.project_container}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.categories.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!loading && <Loading />}
        {loading && projects.length === 0 && (
          <div className={style.no_projects}>
            <h2>Não há projetos cadastrados</h2>
            <p>Crie seu projeto para começar</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
