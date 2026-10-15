import './Services.css';
import Icon from './Icon';
import { services } from '../data/services';
export default function Services() {
  return (
    <section id="servicios" className="wrap section">
      <h2>Lo que hacemos</h2>
      <p className="lead">Soluciones completas, desde una página web hasta el sistema que lleva la operación de tu empresa.</p>
      <ul className="services">
        {services.map((s) => (
          <li key={s.title} className={'svc' + (s.featured ? ' featured' : '')}>
            <Icon name={s.icon} />
            <div><h3>{s.title}</h3><p>{s.text}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
