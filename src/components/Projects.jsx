import './Projects.css';
import { projects } from '../data/projects';
export default function Projects() {
  return (
    <section id="proyectos" className="wrap section">
      <h2>Proyectos</h2>
      <p className="lead">Ejemplos del tipo de soluciones que construimos.</p>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <p className="ptype">{p.type}{p.example && <span className="tag">Ejemplo</span>}</p>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
