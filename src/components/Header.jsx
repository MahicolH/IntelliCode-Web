import './Header.css';
import { useState } from 'react';
import { SITE } from '../config';
const links = [['servicios', 'Servicios'], ['intelliclass', 'IntelliClass'], ['proyectos', 'Proyectos'], ['quien-soy', 'Quién soy'], ['contacto', 'Contacto']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap bar">
        <a className="logo" href="#inicio" aria-label="IntelliCode, inicio">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>
          IntelliCode
        </a>
        <nav id="menu" className={'nav' + (open ? ' open' : '')} aria-label="Principal">
          {links.map(([id, t]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{t}</a>)}
          {SITE.appUrl && <a className="nav-app" href={SITE.appUrl}>Ingresar a la app</a>}
        </nav>
        <a className="btn btn-primary btn-sm" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Hablemos</a>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}
