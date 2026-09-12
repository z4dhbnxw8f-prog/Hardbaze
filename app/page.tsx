'use client';
import { useForm, ValidationError } from '@formspree/react';
import { FormEvent, useEffect, useState } from 'react';
const services = [
  ['Recording', 'Capture a performance with clarity and feeling.'],
  ['Mixing & Mastering', 'Make every detail translate.'],
  ['Music Production', 'Build a sound world around your song.'],
  ['Vocal Development', 'Find the delivery that makes writing land.'],
  ['Creative Collaboration', 'Bring the right people into the room.'],
  ['Music & Visual Content', 'Create images that belong to the music.'],
];
const people = [
  [
    'Sicab',
    'Artist|Member',
    '🇬🇲',
    'https://framerusercontent.com/images/UWGRF9h1WkkEdpXBExgTwOJsIyg.png?scale-down-to=512&width=1276&height=1274',
  ],
  ['BS3', 'Artist', '🇬🇲', '/images/bs3.png'],
  ['Baysic', 'Artist|Member', '🇬🇲', '/images/baysic.png'],
  ['Abidox Ko', 'Artist|Member', '🇲🇱', '/images/abidox_ko_1789220231558.jpg'],
  ['Abidox Ko', 'Member', '🇲🇱', '/images/abidox_ko_1789220193669.jpg'],
  ['Perma Music', 'Artist|Member', '🇹🇷 🇬🇲', '/images/permamusic_1789220366224.jpg'],
  [
    'Sharp Official',
    'Artist|Member',
    '🇬🇲',
    '/images/sharp_official10_1789220318232.jpg',
  ],
  [
    'Chvpoxxl',
    'Artist|Producer|Engineer|Member',
    '🇬🇲 🇩🇪 🇧🇯',
    '/images/hardbaze-engineer.png',
  ],
  [
    'Ouzeyduboiz',
    'Artist|Producer|Engineer|Visual Creator|Member',
    '🇬🇲 🇹🇷',
    '/images/FB_IMG_1788811626598.jpg',
  ],
];
export default function Home() {
  const [menu, setMenu] = useState(false),
    [filter, setFilter] = useState('All'),
    [form, setForm] = useState('book'),
    [activeNav, setActiveNav] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [state, handleSubmit] = useForm('meaqwbbl');
  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setNewsletterMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to subscribe right now.');
      }

      setNewsletterStatus('success');
      setNewsletterMessage("You're on the list.");
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterMessage(
        error instanceof Error
          ? error.message
          : 'Unable to subscribe right now.',
      );
    }
  };

  const shown = people
    .filter(
      (p) =>
        filter === 'All' ||
        p[1].split('|').includes(
          filter === 'Visual Creators'
            ? 'Visual Creator'
            : filter.slice(0, -1),
        ),
    )
    .filter(
      (person, index, matches) =>
        matches.findIndex((p) => p[0] === person[0]) === index,
    );
  useEffect(() => {
    const sections = ['studio', 'services', 'sessions', 'artists', 'music', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveNav(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <main>
      <header>
        <a className="brand" href="#home">
          <img src="/images/hardbaze-logo.jpg" alt="Hardbaze" />
        </a>
        <button className="menu" onClick={() => setMenu(!menu)}>
          {menu ? 'CLOSE' : 'MENU'}
        </button>
        <nav className={menu ? 'open' : ''}>
          {[
            'Studio',
            'Services',
            'Sessions',
            'Artists',
            'Music',
            'About',
            'Contact',
          ].map((x) => (
            <a
              className={activeNav === x.toLowerCase() ? 'active' : ''}
              onClick={() => {
                setActiveNav(x.toLowerCase());
                setMenu(false);
              }}
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
            <cite>— Ouzeyduboiz</cite>
          </blockquote>
        </div>
      </section>
      <section id="services" className="section services">
        <div className="flag-slideshow" aria-hidden="true">
          <span className="flag-slide gambia" />
          <span className="flag-slide mali" />
          <span className="flag-slide turkey" />
          <span className="flag-slide benin" />
        </div>
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
        <div className="sessionimg" aria-hidden="true">
          <img src="/images/WhatsApp Image 2026-01-27 at 23.13.14.jpeg" alt="" />
          <img src="/images/hardbaze-engineer.png" alt="" />
          <img src="/images/abidox_ko_1789220231558.jpg" alt="" />
          <img src="/images/sharp_official10_1789220318232.jpg" alt="" />
          <img src="/images/IMG_1764.JPG" alt="" />
          <img src="/images/FB_IMG_1788811605285.jpg" alt="" />
        </div>
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
            'Members',
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
                  {p[1].split('|').join(' · ')} <span>↗</span>
                </p>
                <h3 className={p[0] === 'Ouzeyduboiz' ? 'ouzey-name' : undefined}>
                  {p[0]}
                  {p[2] && <span className="flag"> {p[2]}</span>}
                </h3>
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
        <div className="media-sessions">
          <section className="audio-session">
            <p className="eyebrow orange">AUDIO SESSIONS</p>
            <div className="spotify-release">
              <p className="eyebrow">LATEST RELEASE</p>
              <iframe
                src="https://open.spotify.com/embed/track/6K0So5cAhHU3lNpxa9k1Mk?utm_source=generator"
                title="Latest Hardbaze release on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="spotify-release">
              <p className="eyebrow">RECENT RELEASE</p>
              <iframe
                src="https://open.spotify.com/embed/track/4IDqH6PiymDde1hNIQzCW7?utm_source=generator"
                title="Recent Hardbaze release on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="spotify-release">
              <p className="eyebrow">RECENT RELEASE</p>
              <iframe
                src="https://open.spotify.com/embed/track/2f2Ah07pge0i0SvHszGlCY?utm_source=generator"
                title="Recent Hardbaze release on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="spotify-release">
              <p className="eyebrow">RECENT RELEASE</p>
              <iframe
                src="https://open.spotify.com/embed/track/3oG4ClHwdaizZe8xMr5UVI?utm_source=generator"
                title="Recent Hardbaze release on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="spotify-release">
              <p className="eyebrow">RECENT RELEASE</p>
              <iframe
                src="https://open.spotify.com/embed/track/3rOGTyWx43PNm9XwK1GXPd?utm_source=generator"
                title="Recent Hardbaze release on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="spotify-release">
              <p className="eyebrow">ABIDOX KO — RELEASE</p>
              <iframe
                src="https://open.spotify.com/embed/track/7arn1UUep8NXmD4gg5P13i?utm_source=generator"
                title="Abidox Ko release on Spotify"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </section>
          <section className="video-session">
            <p className="eyebrow orange">VIDEO SESSIONS</p>
            <a
              className="video-preview"
              href="https://youtu.be/Xy0Kj0KrykA?si=m0grcvB_Rgd_ev-x"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.ytimg.com/vi/Xy0Kj0KrykA/hqdefault.jpg"
                alt="Hardbaze video session preview"
              />
              <span>
                <small>VIDEO SESSION</small>
                Watch the latest session
                <b>Watch on YouTube ↗</b>
              </span>
            </a>
            <a
              className="video-preview"
              href="https://youtu.be/Cjhv0c_2nyA?si=kGpDpC5RM9XiRM0-"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.ytimg.com/vi/Cjhv0c_2nyA/hqdefault.jpg"
                alt="Hardbaze video session preview"
              />
              <span>
                <small>VIDEO SESSION</small>
                Watch the latest session
                <b>Watch on YouTube ↗</b>
              </span>
            </a>
            <a
              className="video-preview"
              href="https://youtu.be/9H64KqcvWI0?si=gacLZAtTjg4q2leu"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.ytimg.com/vi/djMUO-a3s7Q/hqdefault.jpg"
                alt="Upcoming Hardbaze release preview"
              />
              <span>
                <small>UPCOMING RELEASE</small>
                Preview the next session
                <b>Watch on YouTube ↗</b>
              </span>
            </a>
            <a
              className="video-preview"
              href="https://youtu.be/AMJSlivfyp8?si=MhFR7tNyjnlAHd3J"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.ytimg.com/vi/AMJSlivfyp8/hqdefault.jpg"
                alt="Hardbaze video session preview"
              />
              <span>
                <small>VIDEO SESSION</small>
                Watch the latest session
                <b>Watch on YouTube ↗</b>
              </span>
            </a>
          </section>
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
              ['100', '+', 'Artists supported'],
              ['100', '+', 'Sessions recorded'],
              ['100', '+', 'Releases completed'],
              ['17K', '', 'Audience reached'],
            ].map(([value, suffix, label]) => (
            <span key={label}>
              <b>
                  {value}
                  {suffix && <i>{suffix}</i>}
              </b>
              <small>{label}</small>
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
              }}
            >
              Book a studio session
            </button>
            <button
              className={form === 'apply' ? 'active' : ''}
              onClick={() => {
                setForm('apply');
              }}
            >
              Apply for a session
            </button>
            <button
              className={form === 'feature' ? 'active' : ''}
              onClick={() => {
                setForm('feature');
              }}
            >
              Request a feature / repost
            </button>
          </div>
        </div>
        {state.succeeded ? (
          <div className="success">
            <p>RECEIVED</p>
            <h3>Thank you.</h3>
            <p>
              Your details are with the Hardbaze team. We’ll be in touch soon.
            </p>
            <button onClick={() => window.location.reload()}>
              Send another request →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="request_type" value={form} />
            <label>
              Name
              <input required name="name" placeholder="Your full name" />
            </label>
            <label>
              Artist / stage name
              <input required name="stage_name" placeholder="How should we know you?" />
            </label>
            <label>
              Email
              <input required type="email" name="email" placeholder="you@email.com" />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
            </label>
            <label>
              {form === 'book'
                ? 'Service required'
                : form === 'apply'
                  ? 'Genre'
                  : 'Type of work'}
              <select
                required
                name={form === 'book' ? 'service_required' : form === 'apply' ? 'genre' : 'type_of_work'}
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                {(form === 'book'
                  ? services.map((s) => s[0])
                  : form === 'apply'
                    ? ['Afrobeats', 'Hip-hop', 'R&B / Soul', 'Alternative']
                    : ['Music release', 'Music video', 'Freestyle', 'Visual art', 'Other']
                ).map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            {form === 'feature' && (
              <label>
                Link to your work
                <input required type="url" name="work_link" placeholder="Spotify, YouTube, Instagram…" />
              </label>
            )}
            <label className="full">
              {form === 'book'
                ? 'Project description'
                : form === 'apply'
                  ? 'Why do you want to perform?'
                  : 'Why should we feature it?'}
              <textarea
                required
                name="message"
                placeholder={
                  form === 'feature'
                    ? 'Tell us about the release, your story, and the requested feature or repost…'
                    : 'Give us the essentials…'
                }
              />
              <ValidationError field="message" prefix="Message" errors={state.errors} />
            </label>
            <button className="button" disabled={state.submitting}>
              {form === 'book'
                ? 'Send booking request'
                : form === 'apply'
                  ? 'Submit application'
                  : 'Send feature request'}{' '}
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
        <form onSubmit={handleNewsletterSubmit}>
          <input
            required
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            value={newsletterEmail}
            onChange={(e) => {
              setNewsletterEmail(e.target.value);
              if (newsletterStatus !== 'idle') {
                setNewsletterStatus('idle');
                setNewsletterMessage('');
              }
            }}
          />
          <button disabled={newsletterStatus === 'loading'}>
            {newsletterStatus === 'loading' ? '...' : '→'}
          </button>
        </form>
        {newsletterMessage && (
          <small
            style={{
              display: 'block',
              marginTop: '0.75rem',
              color:
                newsletterStatus === 'success' ? '#7ee7a2' : '#f6b3b3',
            }}
          >
            {newsletterMessage}
          </small>
        )}
        <small>
          By subscribing, you agree to receive updates from Hardbaze.
        </small>
      </section>
      <section className="testimonials section">
        <p className="eyebrow orange">ARTIST FEEDBACK</p>
        <h2>
          Built with
          <br />
          the artists.
        </h2>
        <p className="testimonial-note">
          Verified feedback from artists in the Hardbaze community.
        </p>
        <div className="testimonial-grid">
          <article>
            <span>★★★★★</span>
            <p>
              “Hardbaze completely changed my music journey. The platform gave me the
              exposure I needed, helped my sound reach new listeners, and opened doors
              I never thought possible. More than just a music platform, Hardbaze gave
              me the confidence and opportunity to grow as an artist. I’m truly grateful
              to be part of this movement.”
            </p>
            <small>Chvpoxxl · Artist</small>
          </article>
          <article>
            <span>★★★★★</span>
            <p>
              “Hardbaze has played a major role in my music journey. It gave my music
              greater visibility, connected me with new listeners, and helped me build
              a stronger presence as an artist. The exposure and support I received
              through the platform have been truly valuable. Hardbaze isn’t just
              showcasing music—it’s helping artists like me grow and be heard.”
            </p>
            <small>Sharp Official · Artist</small>
          </article>
          <article>
            <span>★★★★★</span>
            <p>
              “Working with Hardbaze from The Gambia has elevated my music career to a
              whole new level. The platform helped my sound reach audiences beyond
              borders, increased my visibility, and connected me with opportunities I
              once thought were out of reach. Hardbaze believed in my talent and gave
              me a powerful platform to grow, be heard, and establish myself as an artist.”
            </p>
            <small>Sicab · Artist</small>
          </article>
        </div>
      </section>
      <footer>
        <div className="footer-brand">
          <a className="brand" href="#home">
            <img src="/images/hardbaze-logo.jpg" alt="Hardbaze" />
          </a>
          <p>
            Sound, vision and community for the next generation of African
            artists.
          </p>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          <a href="#studio">Studio</a>
          <a href="#sessions">Sessions</a>
          <a href="#book">Booking</a>
          <a
            href="https://www.instagram.com/hardbaze_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
          <a href="https://www.youtube.com/@thehardbazesession" target="_blank" rel="noreferrer">
            YouTube ↗
          </a>
        </div>
        <div className="artist-socials">
          <span>Artist socials</span>
          <a
            href="https://www.instagram.com/ouzeyduboiz?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Ouzeyduboiz ↗
          </a>
          <a
            href="https://www.instagram.com/bs3official1/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
          >
            BS3 ↗
          </a>
          <a
            href="https://www.instagram.com/permamusic?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Perma Music ↗
          </a>
          <a
            href="https://www.instagram.com/sharpofficial_10?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Sharp Official ↗
          </a>
          <a
            href="https://www.instagram.com/sicab_official?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Sicab ↗
          </a>
          <a
            href="https://www.instagram.com/abidox_ko?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Abidox Ko ↗
          </a>
          <a href="https://www.instagram.com/chvpoxxl/" target="_blank" rel="noreferrer">
            Chvpoxxl ↗
          </a>
        </div>
        <small>© 2026 Hardbaze. All rights reserved. Privacy · Impressum</small>
      </footer>
    </main>
  );
}
