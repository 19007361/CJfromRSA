export default function Works({ works }) {
  return (
    <section className="section" id="works">
      <h2 className="eyebrow">Works</h2>
      <div className="works-grid">
        {works.map((work) => (
          <a key={work.title} href={work.href ?? '#works'} className="card">
            <div className="card-media">
              {work.image ? <img src={work.image} alt="" /> : <span>{work.title}</span>}
            </div>
            <div className="card-meta">
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
              {work.tags && (
                <ul className="tags">
                  {work.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
