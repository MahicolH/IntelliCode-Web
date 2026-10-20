import './Team.css';
import useReveal from '../hooks/useReveal';
import { team } from '../data/team';

export default function Team() {
  const ref = useReveal();

  return (
    <section id="quien-soy" className="team-section" data-tone="dark" ref={ref} aria-labelledby="equipo-titulo">
      <div className="team-wrap">
        <div className="team-text" data-reveal>
          <p className="team-eyebrow">Nuestro equipo</p>
          <h2 id="equipo-titulo">Las mentes detrás del código.</h2>
          <p className="lead">Un equipo interdisciplinario de ingenieros y diseñadores enfocado en construir software a la medida, plataformas web escalables y soluciones de analítica.</p>
          <p className="team-note">Combinamos arquitectura limpia, lógica de negocio y diseño UI/UX para acompañar a cada cliente desde el concepto inicial hasta la producción.</p>
          <a className="team-link" href="#contacto">Conoce más sobre nosotros <span aria-hidden="true">→</span></a>
        </div>
        <div className="team-cards">
          {team.map((m) => (
            <article key={m.id} className="member" data-reveal>
              <img src={m.photo} alt={m.alt} width="720" height="960" loading="lazy" decoding="async" />
              <div className="member-body">
                <h3>{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <ul className="member-skills">
                  {m.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
