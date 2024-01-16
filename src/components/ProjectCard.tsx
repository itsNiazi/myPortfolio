import { Project, Personal } from "../types";
import { projects, personalInfo } from "../data/portfolioData.json";

function ProjectCard() {
  const myInfo: Personal = personalInfo;
  const theProjects: Project[] = projects;
  return (
    <>
      <h1>Portfolio</h1>
      <p>{myInfo.name}</p>
      <p>{myInfo.bio}</p>
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
