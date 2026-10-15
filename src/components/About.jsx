import './About.css';
export default function About() {
  return (
    <section id="quien-soy" className="wrap section split about">
      <video className="video" controls preload="none" playsInline poster="/poster.jpg" aria-label="Video de presentación de Mahicol">
        <source src="/video-presentacion.mp4" type="video/mp4" />
      </video>
      <div>
        <h2>Hola, soy Mahicol</h2>
        <p>Ingeniero de Sistemas y fundador de IntelliCode Analytics & Software. Trabajo de cerca con cada cliente para entender su negocio antes de escribir una sola línea de código.</p>
        <p>Mi objetivo es simple: que la tecnología te ahorre tiempo, ordene tu operación y te ayude a vender más.</p>
      </div>
    </section>
  );
}
