import './TechMarquee.css';
import { TECH } from '../data/tech';

const COPIES = 4;

export default function TechMarquee() {
  return (
    <div className="tech">
      <p className="tech-title">Tecnologías con las que trabajamos</p>
      <div className="tech-viewport">
        <ul className="tech-track">
          {Array.from({ length: COPIES }, (_, k) =>
            TECH.map((t) => (
              <li key={k + t.name} className="tech-item" style={{ '--c': t.color }} aria-hidden={k > 0 ? 'true' : undefined}>
                {t.path && <svg viewBox="0 0 24 24" aria-hidden="true"><path d={t.path} /></svg>}
                {t.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
