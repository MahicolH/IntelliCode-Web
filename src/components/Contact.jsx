import './Contact.css';
import { SITE } from '../config';
export default function Contact() {
  return (
    <section id="contacto" className="wrap section" data-tone="light">
      <div className="contact">
        <h2>Cuéntame tu proyecto</h2>
        <p>Escríbenos y te respondemos con una propuesta clara.</p>
        <div className="actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
          <a className="btn btn-dark" href={'mailto:' + SITE.email}>Escribir por correo</a>
        </div>
      </div>
    </section>
  );
}
