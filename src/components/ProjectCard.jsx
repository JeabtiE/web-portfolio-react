import { useEffect, useRef, useState } from "react";

function ProjectCardCarousel({ images, title }) {
  const [index, setIndex] = useState(0);
  const hoveringRef = useRef(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      if (!hoveringRef.current) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="project-card__carousel"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          className="project-card__image project-card__carousel-slide"
          alt={`${title} ${i + 1}`}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <div className="project-card__carousel-dots">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={
                "project-card__carousel-dot" +
                (i === index ? " project-card__carousel-dot--active" : "")
              }
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  return (
    <div className="card project-card">
      <ProjectCardCarousel images={images} title={project.title} />
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
