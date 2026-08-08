import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";
import heroImage from "./assets/hero.jpeg";
import journalImage from "./assets/ceylon-bride.jpg";
import journalImageTwo from "./assets/story-paris.jpg";
import journalImageThree from "./assets/story-como.jpg";
import aboutImage from "./assets/artist.jpeg";
import aboutSecondary from "./assets/approach.webp";
import destinationImage from "./assets/story-galle.jpg";
import destinationImageTwo from "./assets/story-como.jpg";
import destinationImageThree from "./assets/story-paris.jpg";
import contactImage from "./assets/commissions.jpeg";
import filmImage from "./assets/film-wide.jpeg";
import artistImage from "./assets/artist.jpeg";
import commissionsImage from "./assets/commissions.jpeg";
import approachImage from "./assets/approach.webp";
import storyColombo from "./assets/story-colombo.jpg";
import storyGalle from "./assets/story-galle.jpg";
import storyKandy from "./assets/story-kandy.jpg";
import storyComo from "./assets/story-como.jpg";
import storyParis from "./assets/story-paris.jpg";
import ceylonHands from "./assets/ceylon-hands.jpg";
import ceylonDrums from "./assets/ceylon-drums.jpg";
import ceylonPalace from "./assets/ceylon-palace.jpg";
import ceylonBride from "./assets/ceylon-bride.jpg";


import colombo1 from "./assets/colombo-1.webp";
import colombo2 from "./assets/colombo-2.png";
import colombo3 from "./assets/colombo-3.webp";
import colombo4 from "./assets/colombo-4.webp";
import colombo5 from "./assets/colombo-5.webp";
import galle1 from "./assets/galle-1.webp";
import galle2 from "./assets/galle-2.png";
import galle3 from "./assets/galle-3.png";
import kandy1 from "./assets/kandy-1.webp";
import kandy2 from "./assets/kandy-2.webp";
import kandy3 from "./assets/kandy-3.png";
import como1 from "./assets/como-1.webp";
import como2 from "./assets/como-2.png";
import como3 from "./assets/como-3.png";
import paris1 from "./assets/paris-1.webp";
import paris2 from "./assets/paris-2.webp";
import paris3 from "./assets/paris-3.png";
const panelLinks = [
  ["01", "Home", "#home"],
  ["02", "Stories", "/stories"],
  ["03", "Archive", "/archive"],
  ["04", "Journal", "/journal"],
  ["05", "About", "/about"],
  ["06", "Destinations", "/destinations"],
  ["07", "Contact", "/contact"],
];

function Loader({ onDone }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 2200);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.82, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="grain" />
      <motion.div
        className="loader__brand"
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9 }}
      >
        <span>STUDIO</span>
        <strong>LUMIÈRE</strong>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.52 }}
        transition={{ delay: 0.75 }}
      >
        COLOMBO · CEYLON · WORLDWIDE
      </motion.p>
      <motion.i
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 1.6 }}
      />
    </motion.div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  const desktopLinks = [
    ["HOME", "#home"],
    ["STORIES", "/stories"],
    ["ARCHIVE", "/archive"],
    ["JOURNAL", "/journal"],
    ["ABOUT", "/about"],
    ["DESTINATIONS", "/destinations"],
    ["CONTACT", "/contact"],
  ];

  return (
    <>
      <header className="navbar">
        <a className="navbar__location" href="#home">
          COLOMBO · CEYLON
          <br />
          WORLDWIDE
        </a>

        <a className="navbar__brand" href="#home">
          <span>STUDIO</span>
          <strong>LUMIÈRE</strong>
        </a>

        <nav className="navbar__desktop" aria-label="Primary navigation">
          {desktopLinks.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__mobile"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          MENU
          <Menu size={15} strokeWidth={1.45} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="grain" />

            <div className="mobile-menu__top">
              <a className="mobile-menu__brand" href="#home" onClick={close}>
                <span>STUDIO</span>
                <strong>LUMIÈRE</strong>
              </a>

              <button type="button" onClick={close}>
                CLOSE
                <X size={16} strokeWidth={1.4} />
              </button>
            </div>

            <nav className="mobile-menu__links">
              {panelLinks.map(([number, label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={close}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.5 }}
                >
                  <small>{number}</small>
                  <span>{label}</span>
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              <span>COLOMBO · CEYLON</span>
              <span>AVAILABLE WORLDWIDE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__frame">
        <motion.img
          className="hero__image"
          src={heroImage}
          alt="Bride and groom at sunset"
          fetchPriority="high"
          decoding="async"
          initial={{ scale: 1.012 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="hero__overlay" />
        <div className="hero__topshade" />
        <div className="grain hero__grain" />

        <div className="hero__rail" aria-hidden="true">
          <span>01</span>
          <i />
          <span>02</span>
          <span>03</span>
        </div>

        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1>
            <span>WE PHOTOGRAPH</span>
            <span>WHAT TIME</span>
            <span>TRIES TO TAKE.</span>
          </h1>
          <p>WEDDING PHOTOGRAPHY & FILMS</p>
        </motion.div>

        <a className="hero__scroll" href="#next">
          <span className="hero__scroll-orb">
            <ArrowDown size={13} strokeWidth={1.2} />
          </span>
          <span>SCROLL TO ENTER</span>
          <i />
          <small>01</small>
        </a>
      </div>
    </section>
  );
}


function HomeSections() {
  const stories = [
    ["01", "COLOMBO", storyColombo, "/stories/colombo"],
    ["02", "GALLE", storyGalle, "/stories/galle"],
    ["03", "KANDY", storyKandy, "/stories/kandy"],
    ["04", "LAKE COMO", storyComo, "/stories/lake-como"],
    ["05", "PARIS", storyParis, "/stories/paris"],
  ];

  const ceylon = [ceylonHands, ceylonDrums, ceylonPalace, ceylonBride];

  return (
    <>
      <section className="approach" id="next">
        <motion.div
          className="approach__image-wrap"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .9, ease: [0.16,1,0.3,1] }}
        >
          <img src={approachImage} alt="Wedding couple beneath classical architecture" />
        </motion.div>

        <motion.div
          className="approach__copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .35 }}
          transition={{ duration: .85, delay: .08 }}
        >
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Not poses.<br />Not perfection.<br /><em>Presence.</em></h2>
          <p>We document emotions as they unfold — real, unexpected and timeless.</p>
          <a href="/about">OUR PHILOSOPHY <span>→</span></a>
        </motion.div>
      </section>

      <section className="stories-home" id="stories">
        <div className="stories-home__head">
          <div>
            <span className="eyebrow eyebrow--warm">SELECTED STORIES</span>
            <h2>EACH STORY IS UNIQUE.</h2>
          </div>
          <p>A curated selection of weddings<br />we had the honour to document.</p>
        </div>

        <div className="stories-home__grid">
          {stories.map(([n, place, image, href], i) => (
            <motion.a
              className="story-card"
              href={href}
              key={place}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .18 }}
              transition={{ duration: .7, delay: i * .06 }}
            >
              <div className="story-card__meta"><span>{n}</span><strong>{place}</strong></div>
              <div className="story-card__image"><img src={image} alt={`${place} wedding story`} /></div>
              <span className="story-card__arrow">↗</span>
            </motion.a>
          ))}
        </div>
        <a className="stories-home__view-all" href="/stories">
          VIEW ALL STORIES <span>→</span>
        </a>
      </section>

      <section className="ceylon-edit">
        <div className="ceylon-edit__head">
          <span className="eyebrow">THE CEYLON EDIT</span>
          <h2>Rooted in culture.<br /><em>Framed with art.</em></h2>
        </div>

        <div className="ceylon-edit__gallery">
          {ceylon.map((image, i) => (
            <motion.div
              className="ceylon-edit__image"
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .75, delay: i * .06 }}
            >
              <img src={image} alt="Sri Lankan wedding editorial" />
            </motion.div>
          ))}
        </div>
        <a className="ceylon-edit__link" href="/journal">EXPLORE THE EDIT <span>→</span></a>
      </section>
    </>
  );
}


function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navigation />
          <main>
            <Hero />
<HomeSections />
          
      <section className="cinema-section" id="films">
        <img className="cinema-bg" src={filmImage} alt="Cinematic wedding film still" />
        <div className="cinema-shade" />

        <motion.div
          className="cinema-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .8 }}
        >
          <span className="eyebrow eyebrow--film">CINEMATIC FILMS</span>
          <h2>Moving memories.<br/><em>Felt forever.</em></h2>
          <a className="film-link" href="#films">
            <span className="film-play">▶</span>
            WATCH FILM
          </a>
        </motion.div>
      </section>

      <section className="artist-section" id="about">
        <motion.div
          className="artist-image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .8 }}
        >
          <img src={artistImage} alt="Studio Lumière photographer holding a camera" />
        </motion.div>

        <motion.div
          className="artist-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .8, delay: .05 }}
        >
          <span className="eyebrow">THE ARTIST</span>
          <h2>Artist. Observer.<br/><em>Storyteller.</em></h2>
          <p>
            Photography found me through architecture and cinema. Today, I document
            love stories across the world with the same intention — to create art
            that outlives time.
          </p>
          <a className="editorial-link" href="/about">MY STORY <span>→</span></a>
          <div className="artist-signature">Lumière</div>
        </motion.div>
      </section>

      <section className="destinations-strip" id="destinations">
        <span className="eyebrow eyebrow--warm">DESTINATION WEDDINGS</span>
        <div className="destinations-strip__row">
          <h2>Where love<br/><em>takes us.</em></h2>
          <div className="destinations-list">
            <span>COLOMBO</span>
            <span>GALLE</span>
            <span>LAKE COMO</span>
            <span>PARIS</span>
            <span>MALDIVES</span>
            <span>WORLDWIDE</span>
          </div>
        </div>
      </section>

      <section className="commission-section" id="contact">
        <img
          className="commission-bg"
          src={commissionsImage}
          alt=""
          aria-hidden="true"
        />
        <div className="commission-shade" />

        <motion.div
          className="commission-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .35 }}
          transition={{ duration: .8 }}
        >
          <span className="eyebrow eyebrow--commission">LIMITED COMMISSIONS</span>
          <h2>Private commissions<br/>accepted each year.</h2>
          <p>
            We take on a limited number of weddings<br className="desktop-only"/>
            to ensure a personal experience.
          </p>
          <a className="commission-link" href="/contact">
            REQUEST THE PRIVATE COLLECTION <span>→</span>
          </a>
        </motion.div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <span>STUDIO</span>
            <strong>LUMIÈRE</strong>
            <p>Documenting love honestly,<br/>artfully and timelessly.</p>

            <div className="footer-socials" aria-label="Social platforms">
              <span>INSTAGRAM ↗</span>
              <span>VIMEO ↗</span>
              <span>PINTEREST ↗</span>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-label">NAVIGATION</span>
            <a href="#home">Home</a>
            <a href="/stories">Stories</a>
            
            <a href="/journal">Journal</a>
            <a href="/about">About</a>
            <a href="/destinations">Destinations</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <span className="footer-label">DESTINATIONS</span>
            <span>Sri Lanka</span>
            <span>Maldives</span>
            <span>Italy</span>
            <span>France</span>
            <span>Worldwide</span>
          </div>

          <div className="footer-editorial">
            <span className="footer-label">LATEST STORY</span>
            <a href="/stories/paris" className="footer-thumb">
              <img src={storyParis} alt="Latest Studio Lumière wedding story" loading="lazy" decoding="async" />
              <span>VIEW STORY ↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 STUDIO LUMIÈRE. ALL RIGHTS RESERVED.</span>
          <span className="ark-credit">
            DESIGNED &amp; DEVELOPED BY <strong>ARK II</strong> ↗
          </span>
          <span>COLOMBO · CEYLON · WORLDWIDE</span>
        </div>
      </footer>

    </main>
        </>
      )}
    </>
  );
}


const storyCards = [
  {
    slug: "colombo",
    location: "Colombo, Sri Lanka",
    title: "Amaya & Rehan",
    year: "2026",
    cover: colombo1,
    images: [colombo1, colombo2, colombo3, colombo4, colombo5],
  },
  {
    slug: "galle",
    location: "Galle, Sri Lanka",
    title: "Kiara & Dev",
    year: "2026",
    cover: galle1,
    images: [galle1, galle2, galle3],
  },
  {
    slug: "kandy",
    location: "Kandy, Sri Lanka",
    title: "Nimesh & Yashini",
    year: "2026",
    cover: kandy1,
    images: [kandy1, kandy2, kandy3],
  },
  {
    slug: "lake-como",
    location: "Lake Como, Italy",
    title: "Isabella & Marco",
    year: "2025",
    cover: como1,
    images: [como1, como2, como3],
  },
  {
    slug: "paris",
    location: "Paris, France",
    title: "Julia & Adrian",
    year: "2025",
    cover: paris1,
    images: [paris1, paris2, paris3],
  },
];

function PageNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const links = [
    ["HOME", "/"],
    ["STORIES", "/stories"],
    ["ARCHIVE", "/archive"],
    ["JOURNAL", "/journal"],
    ["ABOUT", "/about"],
    ["DESTINATIONS", "/destinations"],
    ["CONTACT", "/contact"],
  ];

  return (
    <>
      <header className="inner-nav">
        <a className="inner-nav__brand" href="/">
          <span>STUDIO</span>
          <strong>LUMIÈRE</strong>
        </a>

        <nav className="inner-nav__desktop">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <button className="inner-nav__mobile" onClick={() => setOpen(true)}>
          MENU <Menu size={15} strokeWidth={1.4}/>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="inner-mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: .6, ease: [0.76,0,0.24,1] }}
          >
            <div className="grain"/>
            <div className="inner-mobile-menu__top">
              <a href="/" className="inner-nav__brand">
                <span>STUDIO</span><strong>LUMIÈRE</strong>
              </a>
              <button onClick={() => setOpen(false)}>CLOSE <X size={16}/></button>
            </div>
            <nav className="inner-mobile-menu__links">
              {links.map(([label, href], i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{opacity:0,y:16}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:.06+i*.035}}
                >
                  <small>{String(i+1).padStart(2,"0")}</small>
                  <span>{label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


function InnerFooter() {
  return (
    <footer className="inner-footer">
      <div className="inner-footer__brand">
        <span>STUDIO</span>
        <strong>LUMIÈRE</strong>
        <p>Documenting love with honesty,<br/>artistry and intention.</p>
      </div>

      <div className="inner-footer__links">
        <div>
          <span className="inner-footer__label">EXPLORE</span>
          <a href="/">Home</a>
          <a href="/stories">Stories</a>
          <a href="/archive">Archive</a>
        </div>

        <div>
          <span className="inner-footer__label">STUDIO</span>
          <a href="/journal">Journal</a>
          <a href="/about">About</a>
          <a href="/destinations">Destinations</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="inner-footer__bottom">
        <span>© 2026 STUDIO LUMIÈRE</span>
        <span className="inner-footer__credit">DESIGNED &amp; DEVELOPED BY <strong>ARK II</strong> ↗</span>
        <span>COLOMBO · CEYLON · WORLDWIDE</span>
      </div>
    </footer>
  );
}

function StoryFooter() {
  return (
    <footer className="story-footer">
      <div>
        <span>© 2026 STUDIO LUMIÈRE</span>
      </div>
      <div className="story-footer__nav">
        <a href="/stories">ALL STORIES</a>
        <a href="/archive">ARCHIVE</a>
      </div>
      <span className="story-footer__ark">
        DESIGNED &amp; DEVELOPED BY <strong>ARK II</strong> ↗
      </span>
    </footer>
  );
}

function StoriesPage() {
  return (
    <div className="inner-page">
      <PageNav/>
      <main className="stories-page">
        <section className="stories-page__intro">
          <div>
            <span className="page-kicker">02 · STORIES</span>
            <h1>Stories<br/><em>of connection.</em></h1>
          </div>
          <p>Real people. Real moments.<br/>Timeless narratives.</p>
        </section>

        <section className="stories-page__grid">
          {storyCards.map((story, i) => (
            <motion.a
              href={`/stories/${story.slug}`}
              className="stories-page__card"
              key={story.slug}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true, amount:.18}}
              transition={{duration:.7,delay:i*.05}}
            >
              <div className="stories-page__image">
                <img src={story.cover} alt={story.title} loading={i < 2 ? "eager" : "lazy"} decoding="async"/>
              </div>
              <div className="stories-page__meta">
                <span>{story.title}</span>
                <small>{story.location}</small>
              </div>
            </motion.a>
          ))}
        </section>

        <a className="archive-cta" href="/archive">VIEW THE FULL ARCHIVE <span>→</span></a>
      </main>
      <InnerFooter />
    </div>
  );
}

function StoryDetailPage({ slug }) {
  const story = storyCards.find(s => s.slug === slug) || storyCards[0];

  return (
    <div className="inner-page story-detail">
      <PageNav/>
      <main>
        <section className="story-detail__hero">
          <div className="story-detail__title">
            <span className="page-kicker">{story.location.toUpperCase()}</span>
            <h1>{story.title.replace(" & "," &\\n").split("\\n").map((line, i) => <span key={i}>{line}</span>)}</h1>
            <p>WEDDING STORY · {story.year}</p>
          </div>
          <div className="story-detail__hero-image">
            <img src={story.images[0]} alt={`${story.title} wedding`}/>
          </div>
        </section>

        <section className="story-detail__intro">
          <span>AN EDITORIAL DOCUMENT</span>
          <p>
            A celebration shaped by place, light and the quiet moments in between.
            Photographed with an editorial eye, but always led by what was real.
          </p>
        </section>

        <section className="story-detail__gallery">
          {story.images.slice(1).map((image, i) => (
            <motion.figure
              className={`story-detail__frame story-detail__frame--${i%3}`}
              key={i}
              initial={{opacity:0,y:28}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true, amount:.12}}
              transition={{duration:.75}}
            >
              <img src={image} alt={`${story.title} wedding moment ${i+2}`} loading="lazy" decoding="async"/>
            </motion.figure>
          ))}
        </section>

        <section className="story-detail__end">
          <span>NEXT STORY</span>
          <a href="/stories">RETURN TO STORIES <strong>→</strong></a>
        </section>
      </main>
      <StoryFooter />
    </div>
  );
}

function ArchivePage() {
  return (
    <div className="inner-page archive-page">
      <PageNav/>
      <main className="archive-main">
        <section className="archive-head">
          <span className="page-kicker">04 · ARCHIVE</span>
          <h1>Archive</h1>
          <p>A living record of weddings,<br/>places and people.</p>
        </section>

        <div className="archive-table">
          <div className="archive-table__head">
            <span>NO.</span><span>STORY</span><span>DESTINATION</span><span>YEAR</span>
          </div>

          {storyCards.map((story, i) => (
            <a href={`/stories/${story.slug}`} className="archive-row" key={story.slug}>
              <span>{String(i+1).padStart(3,"0")}</span>
              <span className="archive-row__story">
                <img src={story.cover} alt="" loading="lazy" decoding="async"/>
                <strong>{story.title}</strong>
              </span>
              <span>{story.location}</span>
              <span>{story.year}</span>
            </a>
          ))}
        </div>
      </main>
      <InnerFooter />
    </div>
  );
}


function JournalPage() {
  const posts = [
    {
      number: "01",
      title: "The quiet moments before the ceremony",
      category: "WEDDING STORY",
      date: "MAY 08, 2026",
      image: journalImage,
    },
    {
      number: "02",
      title: "Why destination weddings feel different",
      category: "DESTINATIONS",
      date: "APRIL 21, 2026",
      image: journalImageTwo,
    },
    {
      number: "03",
      title: "How to feel present in front of the camera",
      category: "OUR ADVICE",
      date: "MARCH 13, 2026",
      image: journalImageThree,
    },
  ];

  return (
    <div className="inner-page journal-page">
      <PageNav />

      <main className="journal-main">
        <section className="journal-head">
          <span className="page-kicker">05 · JOURNAL</span>
          <h1>Notes on<br/><em>love & light.</em></h1>
          <p>Stories, places and observations<br/>from behind the camera.</p>
        </section>

        <section className="journal-feature">
          <div className="journal-feature__image">
            <img src={posts[0].image} alt={posts[0].title} />
          </div>

          <div className="journal-feature__copy">
            <span>{posts[0].category} · {posts[0].date}</span>
            <h2>{posts[0].title}</h2>
            <p>
              The hours before a wedding are often the most revealing — the quiet
              rituals, the waiting, the hands adjusting fabric, and the people who
              know exactly what the day means.
            </p>
            <a href="#journal-posts">READ THE JOURNAL <strong>→</strong></a>
          </div>
        </section>

        <section className="journal-grid" id="journal-posts">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.title}
              className="journal-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .7, delay: index * .06 }}
            >
              <div className="journal-card__image">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
              </div>
              <span>{post.category} · {post.date}</span>
              <h2>{post.title}</h2>
              <a href="#journal-posts">READ STORY <strong>↗</strong></a>
            </motion.article>
          ))}
        </section>
      </main>

      <InnerFooter />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="inner-page about-page">
      <PageNav />

      <main>
        <section className="about-hero">
          <div className="about-hero__copy">
            <span className="page-kicker">06 · ABOUT</span>
            <h1>Behind<br/><em>the lens.</em></h1>
            <p>
              A quiet observer of people, architecture, movement and all the
              fleeting things that make a wedding unforgettable.
            </p>
          </div>

          <div className="about-hero__image">
            <img src={aboutImage} alt="Studio Lumière photographer" />
          </div>
        </section>

        <section className="about-manifesto">
          <span>THE PHILOSOPHY</span>
          <p>
            I believe the most meaningful photographs are rarely the ones we plan.
            They are found in movement, silence, anticipation and the smallest
            gestures between people who know each other deeply.
          </p>
        </section>

        <section className="about-process">
          <div className="about-process__image">
            <img src={aboutSecondary} alt="Wedding photographed by Studio Lumière" />
          </div>

          <div className="about-process__copy">
            <span className="page-kicker">THE PROCESS</span>
            <h2>Present enough<br/>to see everything.</h2>

            <div className="process-list">
              <div><small>01</small><strong>Listen</strong><p>Every celebration begins with understanding the people, place and feeling behind it.</p></div>
              <div><small>02</small><strong>Observe</strong><p>We direct only when needed, leaving enough space for real moments to unfold naturally.</p></div>
              <div><small>03</small><strong>Preserve</strong><p>The final collection is edited as one visual story — cohesive, emotional and built to last.</p></div>
            </div>
          </div>
        </section>
      </main>

      <InnerFooter />
    </div>
  );
}

function DestinationsPage() {
  const destinations = [
    ["SRI LANKA", "Colombo · Galle · Kandy", destinationImage],
    ["ITALY", "Lake Como · Tuscany · Amalfi", destinationImageTwo],
    ["FRANCE", "Paris · Provence", destinationImageThree],
  ];

  return (
    <div className="inner-page destinations-page">
      <PageNav />

      <main className="destinations-main">
        <section className="destinations-head">
          <span className="page-kicker">07 · DESTINATIONS</span>
          <h1>Wherever your<br/><em>story takes us.</em></h1>
          <p>
            Based in Colombo. Photographing intimate celebrations,
            destination weddings and multi-day stories worldwide.
          </p>
        </section>

        <section className="destination-list">
          {destinations.map(([name, places, image], index) => (
            <motion.article
              className="destination-row"
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .18 }}
              transition={{ duration: .7, delay: index * .05 }}
            >
              <div className="destination-row__number">0{index + 1}</div>
              <div className="destination-row__image">
                <img src={image} alt={name} loading="lazy" decoding="async" />
              </div>
              <div className="destination-row__copy">
                <h2>{name}</h2>
                <p>{places}</p>
                <a href="/contact">INQUIRE FOR THIS DESTINATION <span>→</span></a>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <InnerFooter />
    </div>
  );
}

function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleInquirySubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      setFormStatus("local");
      return;
    }

    setFormStatus("sending");

    try {
      const formData = new FormData(form);
      const body = new URLSearchParams(formData).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="inner-page contact-page">
      <PageNav />

      <main className="contact-main">
        <section className="contact-intro">
          <div>
            <span className="page-kicker">08 · CONTACT</span>
            <h1>Tell us<br/><em>your story.</em></h1>
          </div>

          <p>
            Wedding commissions are accepted on a limited basis each year.
            Share the details that matter, and we will personally respond.
          </p>
        </section>

        <section className="contact-layout">
          <div className="contact-image">
            <img src={contactImage} alt="Studio Lumière private commissions" />
          </div>

          <form
            className="contact-form"
            name="wedding-inquiry"
            method="POST"
            data-netlify="true"
            onSubmit={handleInquirySubmit}
          >
            <input type="hidden" name="form-name" value="wedding-inquiry" />

            <label>
              <span>YOUR NAMES</span>
              <input name="names" type="text" placeholder="Amaya & Rehan" autoComplete="name" required />
            </label>

            <label>
              <span>EMAIL ADDRESS</span>
              <input name="email" type="email" placeholder="hello@email.com" autoComplete="email" required />
            </label>

            <div className="contact-form__split">
              <label>
                <span>WEDDING DATE</span>
                <input name="wedding-date" type="text" placeholder="DD / MM / YYYY" />
              </label>

              <label>
                <span>LOCATION</span>
                <input name="location" type="text" placeholder="Colombo, Sri Lanka" required />
              </label>
            </div>

            <label>
              <span>TELL US ABOUT YOUR CELEBRATION</span>
              <textarea
                name="celebration"
                rows="6"
                placeholder="Tell us what you are planning, what matters to you, and how you want the day to feel."
                required
              />
            </label>

            <button type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "SENDING…" : "SEND PRIVATE INQUIRY"} <span>→</span>
            </button>

            <div className="contact-form__status" aria-live="polite">
              {formStatus === "success" && (
                <p>Thank you. Your inquiry has been received.</p>
              )}
              {formStatus === "local" && (
                <p>The form is ready and will accept submissions after Netlify deployment.</p>
              )}
              {formStatus === "error" && (
                <p>
                  We couldn’t send this inquiry. Please email{" "}
                  <a href="mailto:hello@studiolumiere.com">hello@studiolumiere.com</a>.
                </p>
              )}
            </div>
          </form>
        </section>

        <section className="contact-details">
          <div><span>EMAIL</span><a href="mailto:hello@studiolumiere.com">hello@studiolumiere.com</a></div>
          <div><span>BASED IN</span><p>Colombo · Ceylon</p></div>
          <div><span>AVAILABLE</span><p>Worldwide</p></div>
        </section>
      </main>

      <InnerFooter />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="inner-page not-found">
      <PageNav />

      <main className="not-found__main">
        <span>404 · FRAME NOT FOUND</span>
        <h1>Some moments<br/><em>disappear.</em></h1>
        <p>This page did too.</p>
        <a href="/">RETURN HOME <strong>→</strong></a>
      </main>

      <StoryFooter />
    </div>
  );
}

function RouterApp() {
  const path = window.location.pathname;

  useEffect(() => {
    const pageMeta = {
      "/": ["Studio Lumière — Wedding Photography & Films", "Editorial wedding photography and cinematic films from Colombo, Ceylon to destinations worldwide."],
      "/stories": ["Wedding Stories — Studio Lumière", "Explore wedding stories photographed in Sri Lanka and destinations worldwide by Studio Lumière."],
      "/archive": ["Archive — Studio Lumière", "A curated archive of Studio Lumière wedding stories across Sri Lanka, Europe and beyond."],
      "/journal": ["Journal — Studio Lumière", "Notes on weddings, destinations, photography and the moments around them."],
      "/about": ["About — Studio Lumière", "Meet the artist and discover the philosophy behind Studio Lumière."],
      "/destinations": ["Destinations — Studio Lumière", "Destination wedding photography in Sri Lanka, Italy, France and worldwide."],
      "/contact": ["Contact — Studio Lumière", "Inquire about a private wedding photography commission with Studio Lumière."],
    };

    const [title, description] = pageMeta[path] || [
      "Studio Lumière",
      "Editorial wedding photography and cinematic films from Colombo to destinations worldwide.",
    ];

    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);

    window.scrollTo(0, 0);
  }, [path]);

  if (path === "/stories") return <StoriesPage />;
  if (path === "/archive") return <ArchivePage />;
  if (path === "/journal") return <JournalPage />;
  if (path === "/about") return <AboutPage />;
  if (path === "/destinations") return <DestinationsPage />;
  if (path === "/contact") return <ContactPage />;

  if (path.startsWith("/stories/")) {
    const slug = path.split("/")[2];
    const exists = storyCards.some((story) => story.slug === slug);
    return exists ? <StoryDetailPage slug={slug} /> : <NotFoundPage />;
  }

  if (path === "/") return <HomePage />;

  return <NotFoundPage />;
}

export default RouterApp;
