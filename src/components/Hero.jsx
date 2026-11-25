import Arrow from './Arrow.jsx';

export default function Hero({ site }) {
  const { hero } = site;
  return (
    <section className="hero" id="top">
      <h1 className="display">{hero?.headline ?? site.name}</h1>
      {hero?.cta && (
        <a href={hero.cta.href} className="pill pill-dark">
          {hero.cta.label} <Arrow />
        </a>
      )}
      {hero?.credentials && (
        <p className="credentials">
          {hero.credentials.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      )}
    </section>
  );
}
