import { site } from './content.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Works from './components/Works.jsx';
import Story from './components/Story.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <div className="glow" aria-hidden="true" />
      <div className="frame">
        <Nav site={site} />
        <main>
          <Hero site={site} />
          {site.works && <Works works={site.works} />}
          {site.story && <Story story={site.story} />}
          {site.contact && <Contact contact={site.contact} />}
        </main>
        <Footer site={site} />
      </div>
    </>
  );
}
