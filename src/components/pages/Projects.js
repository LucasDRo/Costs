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
    }, 2000);
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
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
      <div className={style.project_container}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.categories.name}
              key={project.id}
            />
          ))}
          {!loading && <Loading />}
      </div>
    </div>
  );
}

export default Projects;
