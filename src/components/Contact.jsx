import './Contact.css';
import { SITE } from '../config';
import Icon from './Icon';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contacto" className="contact-section" data-tone="dark" ref={ref} aria-labelledby="contacto-titulo">
      <div className="contact-wrap">
        <header className="contact-head" data-reveal>
          <p className="contact-eyebrow">Contacto</p>
          <h2 id="contacto-titulo">Cuéntanos tu proyecto.</h2>
          <p className="lead">Escríbenos y te respondemos con una propuesta clara de costo y tiempos.</p>
        </header>
        <div className="contact-cards">
          <a className="contact-card contact-card-main" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-reveal>
            <Icon name="whatsapp" />
            <span className="contact-text">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">Escribir por WhatsApp</span>
            </span>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </a>
          <a className="contact-card" href={'mailto:' + SITE.email} data-reveal>
            <Icon name="mail" />
            <span className="contact-text">
              <span className="contact-label">Correo</span>
              <span className="contact-value">{SITE.email}</span>
            </span>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
