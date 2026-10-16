import './Hero.css';
import { SITE } from '../config';
import HeroBackground from './HeroBackground';
import TechMarquee from './TechMarquee';
export default function Hero() {
  return (
    <section id="inicio" className="hero screen" data-tone="dark">
      <HeroBackground />
      <div className="hero-veil" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>Software a la medida que hace crecer tu negocio</h1>
          <p>En IntelliCode Analytics & Software diseñamos y desarrollamos páginas web, aplicaciones y sistemas a la medida de tu empresa. También te enseñamos a dominar la tecnología.</p>
          <div className="actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Cotiza tu proyecto</a>
            <a className="btn btn-dark" href="#quien-soy">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#1dff7c" /><path d="M10 8l6 4-6 4z" fill="#151515" /></svg>
              Ver presentación
            </a>
            {SITE.appUrl && <a className="btn btn-dark" href={SITE.appUrl}>Ingresar a la app</a>}
          </div>
        </div>
      </div>
      <TechMarquee />
    </section>
  );
}
