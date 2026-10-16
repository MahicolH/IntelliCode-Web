import './Faq.css';
import { faq } from '../data/faq';
export default function Faq() {
  return (
    <section id="faq" className="wrap section faq" data-tone="light">
      <h2>Preguntas frecuentes</h2>
      {faq.map((f) => (
        <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
      ))}
    </section>
  );
}
