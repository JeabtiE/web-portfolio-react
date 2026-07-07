import { useState } from "react";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card project-card">
      <img
        src={project.image}
        className="project-card__image"
        alt={project.title}
      />
      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="badge project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="h6 project-card__title">{project.title}</h3>
        <p className="small project-card__summary">{project.summary}</p>

        {expanded && (
          <p className="small project-card__details">{project.details}</p>
        )}
        <button
          type="button"
          className="btn btn-link p-0 project-card__toggle-label"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        {project.award && (
          <div>
            <span className="project-card__award">{project.award}</span>
          </div>
        )}

        {project.link && (
          <div>
            <a
              href={project.link}
              className="project-card__link"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
