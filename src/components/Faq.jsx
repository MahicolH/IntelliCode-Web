import './Faq.css';
import useReveal from '../hooks/useReveal';
import { faq } from '../data/faq';

export default function Faq() {
  const ref = useReveal();

  return (
    <section id="faq" className="faq-section tex" data-tone="light" ref={ref} aria-labelledby="faq-titulo">
      <div className="faq-wrap">
        <div className="faq-head" data-reveal>
          <p className="faq-eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-titulo">Lo que suelen preguntarnos.</h2>
          <p className="lead">Resolvemos las dudas más comunes antes de empezar. Si la tuya no está aquí, escríbenos.</p>
          <a className="faq-link" href="#contacto">¿Tienes otra duda? Escríbenos <span aria-hidden="true">→</span></a>
        </div>
        <div className="faq-list">
          {faq.map((f, i) => (
            <details key={f.q} className="faq-item" name="faq" data-reveal>
              <summary>
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q">{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
