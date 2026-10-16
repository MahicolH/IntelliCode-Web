import './Services.css';
import useReveal from '../hooks/useReveal';
import { services } from '../data/services';

export default function Services() {
  const ref = useReveal();

  return (
    <section id="servicios" className="services tex" data-tone="light" ref={ref} aria-labelledby="servicios-titulo">
      <div className="wrap">
        <header className="services-head" data-reveal>
          <h2 id="servicios-titulo"><span>Transformamos la complejidad</span> <span>en software simple.</span></h2>
          <p className="lead">Del concepto a la producción: desarrollo de software, plataformas web y automatización.</p>
        </header>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.id} className={'svc' + (s.wide ? ' svc-wide' : '') + (s.cta ? ' svc-cta' : '')} data-reveal>
              <div className="svc-body">
                <span className="svc-tag">{s.tag}</span>
                <div className="svc-copy">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.cta && <a className="btn btn-primary" href={s.cta.href}>{s.cta.label}</a>}
                </div>
              </div>
              {s.image && (
                <div className="svc-media">
                  <img src={s.image} alt={s.alt} width="760" height="720" loading="lazy" decoding="async" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
