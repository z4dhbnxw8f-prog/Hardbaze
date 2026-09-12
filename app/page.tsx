'use client';
import { FormEvent, useState } from 'react';
const services = [
  ['Recording', 'Capture a performance with clarity and feeling.'],
  ['Mixing & Mastering', 'Make every detail translate.'],
  ['Music Production', 'Build a sound world around your song.'],
  ['Vocal Development', 'Find the delivery that makes writing land.'],
  ['Creative Collaboration', 'Bring the right people into the room.'],
  ['Music & Visual Content', 'Create images that belong to the music.'],
];
const people = [
  ['ABIDOX KO', 'Member', 'HARDBAZE', '/images/abidox_ko_1789220231558.jpg'],
  ['ABIDOX KO', 'Member', 'HARDBAZE', '/images/abidox_ko_1789220193669.jpg'],
  ['PERMA MUSIC', 'Member', 'HARDBAZE', '/images/permamusic_1789220366224.jpg'],
  [
    'SHARP OFFICIAL',
    'Member',
    'HARDBAZE',
    '/images/sharp_official10_1789220316706.jpg',
  ],
  [
    'SHARP OFFICIAL',
    'Member',
    'HARDBAZE',
    '/images/sharp_official10_1789220318232.jpg',
  ],
  [
    'HARDBAZE MEMBER',
    'Member',
    'HARDBAZE',
    '/images/WhatsApp Image 2026-01-27 at 23.13.14.jpeg',
  ],
  ['HARDBAZE MEMBER', 'Member', 'HARDBAZE', '/images/FB_IMG_1788811626598.jpg'],
  ['HARDBAZE MEMBER', 'Member', 'HARDBAZE', '/images/FB_IMG_1788811605285.jpg'],
  ['HARDBAZE MEMBER', 'Member', 'HARDBAZE', '/images/IMG_1764.JPG'],
];
const tracks = [
  ['After Hours', 'AMARÉ', 'AFRO-FUSION', '03:42'],
  ['No Signal', 'NIA x KAYO', 'ALTÉ R&B', '02:58'],
  ['Room 02', 'Hardbaze Session', 'LIVE PERFORMANCE', '04:16'],
];
export default function Home() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState('All'),
    [play, setPlay] = useState(-1),
    [form, setForm] = useState('book'),
    [sent, setSent] = useState(false);
  const shown =
    filter === 'All'
      ? people
      : people.filter(
          (p) =>
            p[1] === filter.slice(0, -1) ||
            (filter === 'Visual Creators' && p[1] === 'Visual Creator'),
        );
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <main>
      <header>
        <a className="brand" href="#home">
          HARD<span>BAZE</span>
        </a>
        <button className="menu" onClick={() => setMenu(!menu)}>
          {menu ? 'CLOSE' : 'MENU'}
        </button>
        <nav className={menu ? 'open' : ''}>
          {[
            'Studio',
            'Sessions',
            'Artists',
            'Services',
            'About',
            'Contact',
          ].map((x) => (
            <a
              onClick={() => setMenu(false)}
              href={'#' + x.toLowerCase()}
              key={x}
            >
              {x}
            </a>
          ))}
          <a className="button small" href="#book">
            Book a Session
          </a>
        </nav>
      </header>
      <section id="home" className="hero">
        <div
          className="heroimg"
          role="img"
          aria-label="Artist singing into microphone in a studio"
        />
        <div className="hero-copy">
          <p className="eyebrow">HARDBAZE STUDIO · AFRICA, EVERYWHERE</p>
          <h1>
            Where Sound
            <br />
            <i>Meets</i> Vision.
          </h1>
          <p>
            A creative home for African artists making work with intention,
            freedom and a point of view.
          </p>
          <div className="actions">
            <a className="button" href="#book">
              Book a Studio Session ↗
            </a>
            <a className="link" href="#sessions">
              Explore Sessions ↓
            </a>
          </div>
        </div>
        <div className="wave">||||||||||||||||||||||||||||||||</div>
      </section>
      <section id="studio" className="studio section">
        <div>
          <p className="eyebrow orange">01 — THE STUDIO</p>
          <h2>
            Made for the work
            <br />
            behind the work.
          </h2>
          <p>
            Hardbaze Studio is a creative music platform built to help artists
            turn ideas into powerful, finished work. From recording and mixing
            to music production and visual content, we bring together sound,
            creativity, and collaboration to help artists express their unique
            identity.
          </p>
          <p>
            Our mission is to create a space where talent is respected, ideas
            are shared, and every artist has the opportunity to grow. Whether
            you are recording your first song or developing your next big
            project, Hardbaze Studio is here to help bring your vision to life.
          </p>
          <a className="link dark" href="#services">
            Discover the studio →
          </a>
        </div>
        <div className="studioimg">
          <blockquote>
            “Talent is respected here.
            <br />
            Ideas have room to grow.”
          </blockquote>
        </div>
      </section>
      <section id="services" className="section services">
        <p className="eyebrow orange">02 — WHAT WE DO</p>
        <h2>
          Bring the idea.
          <br />
          We’ll make room for it.
        </h2>
        <div className="servicegrid">
          {services.map((s, i) => (
            <article key={s[0]}>
              <span>0{i + 1}</span>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
              <a href="#book">↗</a>
            </article>
          ))}
        </div>
      </section>
      <section id="sessions" className="sessions">
        <div
          className="sessionimg"
          role="img"
          aria-label="Live music performance in warm spotlight"
        />
        <div>
          <p className="eyebrow">HARDBAZE SESSION — EST. 2026</p>
          <h2>
            A platform for talent.
            <br />
            <i>A voice for the next generation.</i>
          </h2>
          <p>
            Hardbaze Session is a freestyle platform created to discover,
            showcase, and celebrate emerging artists. It gives upcoming talents
            a space to express themselves, share their stories, and connect
            with listeners through authentic music.
          </p>
          <p>
            More than just a recording session, Hardbaze Session is about
            community, creativity, and opportunity. From raw freestyles to
            unforgettable performances, it captures the energy of the artist
            and the spirit of the culture.
          </p>
          <div className="actions">
            <a className="button light" href="#music">
              Watch Sessions ↗
            </a>
            <a className="link" href="#book">
              Apply to perform →
            </a>
          </div>
        </div>
        <aside>
          <small>FEATURED SESSION</small>
          <strong>04</strong>
          <b>
            MAHALIA S.<em>ALTÉ SOUL · 08.09.26</em>
          </b>
          <button>▶</button>
        </aside>
      </section>
      <section id="artists" className="section artists">
        <p className="eyebrow orange">03 — OUR PEOPLE</p>
        <h2>
          The people shaping
          <br />
          the sound.
        </h2>
        <div className="filters">
          {[
            'All',
            'Artists',
            'Producers',
            'Engineers',
            'Visual Creators',
            'Management',
          ].map((x) => (
            <button
              className={filter === x ? 'active' : ''}
              onClick={() => setFilter(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="crew">
          {shown.length ? (
            shown.map((p) => (
              <article key={p[3]}>
                <img src={p[3]} alt={'Portrait of ' + p[0]} loading="lazy" />
                <p>
                  {p[1]} <span>↗</span>
                </p>
                <h3>{p[0]}</h3>
                <small>{p[2]}</small>
              </article>
            ))
          ) : (
            <p>New people are joining the collective. Check back soon.</p>
          )}
        </div>
      </section>
      <section id="music" className="section music">
        <p className="eyebrow orange">04 — LISTEN IN</p>
        <h2>
          Recent from
          <br />
          Hardbaze.
        </h2>
        <div className="now">
          <button onClick={() => setPlay(play === 0 ? -1 : 0)}>
            {play === 0 ? 'Ⅱ' : '▶'}
          </button>
          <b>
            NOW PLAYING
            <br />
            <strong>
              {tracks[play < 0 ? 0 : play][0]} —{' '}
              {tracks[play < 0 ? 0 : play][1]}
            </strong>
          </b>
          <div className="progress">
            <i />
          </div>
          <span>01:12</span>
        </div>
        <div className="tracks">
          {tracks.map((t, i) => (
            <button onClick={() => setPlay(play === i ? -1 : i)} key={t[0]}>
              <span>0{i + 1}</span>
              <b>
                {t[0]}
                <small>{t[1]}</small>
              </b>
              <em>{t[2]}</em>
              <em>{t[3]}</em>
              <i>{play === i ? 'Ⅱ' : '▶'}</i>
            </button>
          ))}
        </div>
      </section>
      <section id="about" className="vision">
        <p className="eyebrow">A CREATIVE MOVEMENT</p>
        <h2>
          African talent
          <br />
          deserves <i>room</i> to move.
        </h2>
        <p>
          Our vision: to build a movement where African talent can grow,
          connect, and reach a wider audience.
        </p>
        <div>
          {[
            'Artists supported',
            'Sessions recorded',
            'Releases completed',
            'Audience reached',
          ].map((x) => (
            <span key={x}>
              <b>
                00<i>+</i>
              </b>
              <small>{x}</small>
            </span>
          ))}
        </div>
      </section>
      <section id="book" className="section booking">
        <div>
          <p className="eyebrow">05 — LET’S START</p>
          <h2>
            Bring your next
            <br />
            idea to life.
          </h2>
          <p>
            Tell us what you’re working on. We’ll get back to you with the right
            next step.
          </p>
          <div className="tabs">
            <button
              className={form === 'book' ? 'active' : ''}
              onClick={() => {
                setForm('book');
                setSent(false);
              }}
            >
              Book a studio session
            </button>
            <button
              className={form === 'apply' ? 'active' : ''}
              onClick={() => {
                setForm('apply');
                setSent(false);
              }}
            >
              Apply for a session
            </button>
          </div>
        </div>
        {sent ? (
          <div className="success">
            <p>RECEIVED</p>
            <h3>Thank you.</h3>
            <p>
              Your details are with the Hardbaze team. We’ll be in touch soon.
            </p>
            <button onClick={() => setSent(false)}>
              Send another request →
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <label>
              Name
              <input required placeholder="Your full name" />
            </label>
            <label>
              Artist / stage name
              <input required placeholder="How should we know you?" />
            </label>
            <label>
              Email
              <input required type="email" placeholder="you@email.com" />
            </label>
            <label>
              {form === 'book' ? 'Service required' : 'Genre'}
              <select required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {(form === 'book'
                  ? services.map((s) => s[0])
                  : ['Afrobeats', 'Hip-hop', 'R&B / Soul', 'Alternative']
                ).map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label className="full">
              {form === 'book'
                ? 'Project description'
                : 'Why do you want to perform?'}
              <textarea required placeholder="Give us the essentials…" />
            </label>
            <button className="button">
              {form === 'book' ? 'Send booking request' : 'Submit application'}{' '}
              ↗
            </button>
          </form>
        )}
      </section>
      <section id="contact" className="newsletter">
        <p className="eyebrow orange">STAY CLOSE</p>
        <h2>
          Join the
          <br />
          <i>Hardbaze</i> movement.
        </h2>
        <p>
          New sessions, releases, events and opportunities — in your inbox, when
          it matters.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('You’re on the list.');
          }}
        >
          <input
            required
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button>→</button>
        </form>
        <small>
          By subscribing, you agree to receive updates from Hardbaze.
        </small>
      </section>
      <footer>
        <a className="brand" href="#home">
          HARD<span>BAZE</span>
        </a>
        <p>
          Sound, vision and community for the next generation of African
          artists.
        </p>
        <div>
          <a href="#studio">Studio</a>
          <a href="#sessions">Sessions</a>
          <a href="#book">Booking</a>
          <a href="#contact">Instagram ↗</a>
        </div>
        <small>© 2026 Hardbaze. All rights reserved. Privacy · Impressum</small>
      </footer>
    </main>
  );
}
