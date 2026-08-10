jsx
import "./index.css";

const experiences = [
    {
        date: "2017 — 2026",
        company: "FinaryLabs",
        type: "Remote",
        role: "Senior Flutter Developer",
        description:
            "Developing production-grade mobile applications with Flutter, focusing on fintech, trading, real-time data, scalable architecture and clean code.",
        projects: [
            {
                name: "Hissedar — Hisse Al Sat",
                description:
                    "Investment application focused on stock market data, portfolio tracking and financial workflows.",
                links: [
                    {
                        label: "Google Play",
                        url: "https://play.google.com/store/apps/details?id=app.hissedar.com&hl=en_US",
                    },
                    {
                        label: "App Store",
                        url: "https://apps.apple.com/us/app/hissedar-hisse-al-sat/id6747434909",
                    },
                ],
            },
            {
                name: "FinaryTrade — Broker App",
                description:
                    "Brokerage and trading application designed for financial market users and real-time trading workflows.",
                links: [
                    {
                        label: "Google Play",
                        url: "https://play.google.com/store/apps/details?id=com.finary.trader&hl=en_US",
                    },
                    {
                        label: "App Store",
                        url: "https://apps.apple.com/tr/app/finarytrade/id6747672389?l=tr",
                    },
                ],
            },
            {
                name: "Parca — Şarkı Borsası",
                description:
                    "A music investment platform where users can participate in the value and performance of songs.",
                links: [
                    {
                        label: "Google Play",
                        url: "https://play.google.com/store/apps/details?id=com.finarylabs.parca&hl=en_US",
                    },
                    {
                        label: "App Store",
                        url: "https://apps.apple.com/tr/app/parca/id6615072917?l=tr",
                    },
                ],
            },
            {
                name: "Liderform",
                description:
                    "Sports-focused mobile application delivering horse racing information, analysis and user-oriented features.",
                links: [
                    {
                        label: "Google Play",
                        url: "https://play.google.com/store/apps/details?id=com.liderform&hl=tr",
                    },
                    {
                        label: "App Store",
                        url: "https://apps.apple.com/al/app/liderform/id1380650135",
                    },
                ],
            },
        ],
    },
];

const skills = [
    {
        icon: "⌘",
        title: "Mobile",
        items: ["Flutter", "Dart", "iOS", "Android"],
    },
    {
        icon: "◈",
        title: "Architecture",
        items: ["Clean Architecture", "MVVM", "SOLID", "OOP"],
    },
    {
        icon: "◉",
        title: "State Management",
        items: ["MobX", "Riverpod", "BLoC", "GetX"],
    },
    {
        icon: "⌁",
        title: "Backend & Data",
        items: ["REST API", "GraphQL", "Dio", "Firebase", "SQLite", "Hive"],
    },
];

function App() {
    return (
        <>
            <nav>
                <a href="#top" className="nav-logo">
                    ENES.KAL
                </a>

                <div className="nav-links">
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <a
                    href="https://www.linkedin.com/in/eneskal/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-linkedin"
                >
                    LinkedIn ↗
                </a>
            </nav>

            <main id="top">
                {/* HERO */}

                <section className="hero">
                    <div className="hero-bg" />
                    <div className="hero-grid" />

                    <div className="hero-content">
                        <div className="hero-kicker">
                            AVAILABLE FOR REMOTE OPPORTUNITIES
                        </div>

                        <h1 className="hero-name">
                            ENES <span>KAL.</span>
                        </h1>

                        <p className="hero-role">
                            <strong>Senior Flutter Developer</strong> building
                            production-ready mobile applications for iOS and Android.
                            <br />
                            10+ years in software development · 10+ mobile applications
                            shipped.
                        </p>

                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">
                                View Projects ↓
                            </a>

                            <a
                                href="https://github.com/enes-kal"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href="https://www.linkedin.com/in/eneskal/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="mockup-wrapper">
                            <div className="mockup-phone">
                                <div className="mockup-screen">
                                    <div className="mockup-status">
                                        <span>9:41</span>
                                        <span>● ● ▮</span>
                                    </div>

                                    <div className="mockup-app-bar">
                                        <span>Portfolio</span>
                                    </div>

                                    <div className="mockup-body">
                                        <div className="mockup-greeting">
                                            <small>HELLO</small>
                                            <strong>Enes.</strong>
                                        </div>

                                        <div className="mockup-balance">
                                            <small>FLUTTER DEVELOPER</small>
                                            <strong>Senior</strong>
                                        </div>

                                        <div className="mockup-card">
                                            <span>Projects</span>
                                            <b>04</b>
                                        </div>

                                        <div className="mockup-card">
                                            <span>Experience</span>
                                            <b>10+</b>
                                        </div>
                                    </div>

                                    <div className="mockup-nav">
                                        <span>⌂</span>
                                        <span>◈</span>
                                        <span>●</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-scroll">Scroll</div>
                </section>

                {/* EXPERIENCE */}

                <section id="experience">
                    <p className="section-kicker">01 / EXPERIENCE</p>

                    <h2 className="section-title">
                        Where I&apos;ve <span>worked.</span>
                    </h2>

                    <div className="timeline">
                        {experiences.map((experience) => (
                            <div className="timeline-item" key={experience.company}>
                                <div className="timeline-date">
                                    <span className="timeline-dot" />
                                    {experience.date}
                                </div>

                                <div>
                                    <div className="timeline-company">
                                        {experience.company}

                                        <span className="company-type">
                                            · {experience.type}
                                        </span>
                                    </div>

                                    <div className="timeline-role">
                                        {experience.role}
                                    </div>

                                    <div className="timeline-desc">
                                        {experience.description}
                                    </div>

                                    <div className="project-list">
                                        {experience.projects.map((project) => (
                                            <div className="experience-project" key={project.name}>
                                                <div className="proj-item">
                                                    <span className="proj-dot">▸</span>

                                                    <span className="proj-name">
                                                        {project.name}
                                                    </span>

                                                    {project.links.map((link) => (
                                                        <a
                                                            key={link.url}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="store-link"
                                                        >
                                                            {link.label} ↗
                                                        </a>
                                                    ))}
                                                </div>

                                                <div className="timeline-desc project-description">
                                                    {project.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SKILLS */}

                <section id="skills">
                    <p className="section-kicker">02 / SKILLS</p>

                    <h2 className="section-title">
                        Tools of the <span>trade.</span>
                    </h2>

                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div className="skill-card" key={skill.title}>
                                <div className="skill-card-title">
                                    <span className="icon">{skill.icon}</span>
                                    {skill.title}
                                </div>

                                <div className="skill-tags">
                                    {skill.items.map((item) => (
                                        <span className="tag" key={item}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROJECTS */}

                <section id="projects">
                    <p className="section-kicker">03 / SELECTED PROJECTS</p>

                    <h2 className="section-title">
                        Apps I&apos;ve <span>shipped.</span>
                    </h2>

                    <div className="projects-grid">
                        {experiences[0].projects.map((project, index) => (
                            <article className="project-card" key={project.name}>
                                <div className="project-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h3 className="project-title">
                                    {project.name}
                                </h3>

                                <p className="project-desc">
                                    {project.description}
                                </p>

                                <div className="project-tech">
                                    <span className="tag">Flutter</span>
                                    <span className="tag">Dart</span>
                                    <span className="tag">Mobile</span>
                                </div>

                                <div className="project-links">
                                    {project.links.map((link) => (
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={link.url}
                                        >
                                            {link.label} ↗
                                        </a>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}

                <section id="contact">
                    <p className="section-kicker">04 / CONTACT</p>

                    <h2 className="section-title">
                        Let&apos;s build something <span>great.</span>
                    </h2>

                    <div className="contact-wrapper">
                        <div>
                            <p className="contact-text">
                                I&apos;m currently open to Senior Flutter Developer
                                opportunities, especially remote roles where I can build
                                scalable and high-quality mobile products.
                            </p>

                            <div className="hero-cta">
                                <a
                                    href="https://www.linkedin.com/in/eneskal/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    Connect on LinkedIn ↗
                                </a>
                            </div>
                        </div>

                        <div className="contact-links">
                            <a
                                href="https://github.com/enes-kal"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <span className="link-icon">⌘</span>
                                github.com/enes-kal
                            </a>

                            <a
                                href="https://www.linkedin.com/in/eneskal/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <span className="link-icon">in</span>
                                linkedin.com/in/eneskal
                            </a>

                            <a
                                href="mailto:YOUR_EMAIL_HERE"
                                className="contact-link"
                            >
                                <span className="link-icon">@</span>
                                YOUR_EMAIL_HERE
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <span>© {new Date().getFullYear()} ENES KAL</span>
                <span>Senior Flutter Developer · Istanbul</span>
            </footer>
        </>
    );
}

export default App;

