import './IntelliClass.css';
import { SITE } from '../config';
import Icon from './Icon';
import HeroBackground from './HeroBackground';
import useReveal from '../hooks/useReveal';
import { classes } from '../data/classes';

export default function IntelliClass() {
  const ref = useReveal();

  return (
    <section id="intelliclass" className="band screen" data-tone="dark" ref={ref}>
      <HeroBackground />
      <div className="band-veil" aria-hidden="true" />
      <div className="wrap band-grid">
        <div className="band-text" data-reveal>
          <h2>IntelliClass: aprende haciendo</h2>
          <p className="lead">Nuestra área de formación en tecnología. Aprendes con proyectos reales, a tu ritmo o con acompañamiento directo.</p>
          <a className="band-link" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Quiero aprender <span aria-hidden="true">→</span></a>
        </div>
        <div className="band-cards">
          {classes.map((c) => (
            <article key={c.title} className="class-card" data-reveal>
              <span className="class-tag">{c.tag}</span>
              <div className="class-body">
                <Icon name={c.icon} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul>
                  {c.points.map((p) => (
                    <li key={p.label}><strong>{p.label}:</strong> {p.text}</li>
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
