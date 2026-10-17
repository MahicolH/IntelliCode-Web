import './Icon.css';
const P = {
  web: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></>,
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  business: <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />,
  auto: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  store: <path d="M3 7h18l-1.5 5h-15zM5 12v8h14v-8" />,
  pencil: <path d="M4 20l4-1 11-11-3-3L5 16z" />,
  grid: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></>,
  devices: <><rect x="2" y="4" width="14" height="10" rx="1.5" /><path d="M9 14v4M6 18h6" /><rect x="17" y="9" width="5" height="10" rx="1" /></>,
  clipboard: <><rect x="4" y="4" width="16" height="18" rx="2" /><rect x="9" y="2" width="6" height="4" rx="1" /><path d="M9 18l1-3 6-6 2 2-6 6z" /></>,
  book: <path d="M3 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H3zM21 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z" />,
};
export default function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{P[name]}</svg>
  );
}
