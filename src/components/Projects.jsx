import './Projects.css';
import useReveal from '../hooks/useReveal';
import { projects } from '../data/projects';

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="proyectos" className="projects-section screen" data-tone="dark" ref={ref} aria-labelledby="proyectos-titulo">
      <div className="projects-wrap">
        <header className="projects-head" data-reveal>
          <p className="projects-eyebrow">Portafolio &amp; casos de éxito</p>
          <h2 id="proyectos-titulo">Proyectos que construyen valor real.</h2>
          <p className="lead">Una muestra de los sistemas empresariales, herramientas de datos y plataformas web que hemos desarrollado.</p>
        </header>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.id} className="project" data-reveal>
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="project-media">
                <img src={p.image} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" />
              </div>
              <ul className="project-stack">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
