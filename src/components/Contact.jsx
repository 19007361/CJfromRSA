import Arrow from './Arrow.jsx';

export default function Contact({ contact }) {
  return (
    <section className="section contact" id="contact">
      <h2 className="display display-md">{contact.headline}</h2>
      <a href={contact.href} className="pill pill-dark">
        {contact.label} <Arrow />
      </a>
    </section>
  );
}
