export default function Footer({ site }) {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {site.name}</span>
      {site.links && (
        <ul className="footer-links">
          {site.links.map((link) => (
            <li key={link.label}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      )}
    </footer>
  );
}
