import { Project } from "../types";
import projects from "../data/projects.json";

function ProjectCard() {
  const name: string = "Doe";
  const theProjects: Project[] = projects;
  return (
    <>
      <h1>Portfolio</h1>
      <p>My name is {name}</p>
      <section>
        {theProjects.map((project) => (
          <article key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default ProjectCard;
