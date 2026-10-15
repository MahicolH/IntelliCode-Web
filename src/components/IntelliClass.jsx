import './IntelliClass.css';
import { SITE } from '../config';
export default function IntelliClass() {
  return (
    <section id="intelliclass" className="band">
      <div className="wrap section split">
        <div>
          <h2>IntelliClass: aprende haciendo</h2>
          <p className="lead">Nuestra área de formación en tecnología. Aprendes con proyectos reales, a tu ritmo o con acompañamiento directo.</p>
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Quiero aprender</a>
        </div>
        <div className="classes">
          <div><h3>Cursos IntelliClass</h3><p>Programas estructurados por tema, con ejercicios y material de apoyo.</p></div>
          <div><h3>Clases dirigidas</h3><p>Sesiones personalizadas donde resolvemos tus dudas y tus proyectos.</p></div>
        </div>
      </div>
    </section>
  );
}
