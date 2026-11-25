export default function Nav({ site }) {
  return (
    <header className="nav">
      <div className="nav-side">
        {(site.works || site.story) && (
          <nav className="toggle" aria-label="Sections">
            {site.works && <a href="#works">Works</a>}
            {site.story && <a href="#story">Story</a>}
          </nav>
        )}
      </div>
      <a href="#top" className="nav-name">{site.name}</a>
      <div className="nav-side nav-right">
        {site.contact && (
          <a href="#contact" className="pill pill-dark pill-sm">Let's chat</a>
        )}
      </div>
    </header>
  );
}
