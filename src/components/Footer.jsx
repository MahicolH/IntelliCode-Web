import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap bar">
        <span>© {new Date().getFullYear()} IntelliCode Analytics & Software</span>
        <span>Software a tu medida</span>
      </div>
    </footer>
  );
}
