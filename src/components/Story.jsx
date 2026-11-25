export default function Story({ story }) {
  return (
    <section className="section story" id="story">
      <h2 className="eyebrow">Story</h2>
      <div className="story-body">
        <p className="lead">{story.lead}</p>
        <div className="story-text">
          {story.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
