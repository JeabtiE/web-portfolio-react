import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import projects from "../data/projects";
import contacts from "../data/contacts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="flex-grow-1">
      <section className="hero py-5">
        <div className="container d-flex justify-content-center">
          <div className="card hero__card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row align-items-center gap-4 p-4">
              <img src="/img/my_img.jpg" className="hero__photo rounded-4" alt="my_img" />
              <div>
                <h1 className="hero__name mb-0">
                  <span className="hero__name-first">Nattapat</span>{" "}
                  <span className="hero__name-last">Srirung</span>
                </h1>
                <p className="hero__tagline text-muted mb-0">
                  " Engineer make dreams into reality " <br />- Hayao Miyazaki
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section py-5 text-center">
        <div className="container">
          <h2 className="mb-3">About</h2>
          <p className="about-preview__text text-muted mb-3">
            I'm a Computer Engineering student at Chiang Mai University who builds and looks for
            ideas that can make a difference in various industries.
          </p>
          <Link to="/about" className="link-arrow">
            Read more
          </Link>
        </div>
      </section>

      <section id="portfolio" className="section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Portfolio</h2>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section py-5 contact-section text-center">
        <div className="container">
          <h2 className="mb-0">Contact</h2>
          <ul className="list-unstyled contact-list mt-4 mb-0">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  className="btn contact-list__link d-inline-flex align-items-center gap-2"
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                >
                  <img src={contact.icon} className="contact-list__icon" alt={contact.label} />
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
