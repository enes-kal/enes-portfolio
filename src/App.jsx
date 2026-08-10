
jsx
import {
    ArrowDown,
    ArrowUpRight,
    ExternalLink,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Smartphone,
} from "lucide-react";

const experiences = [
    {
        period: "2017 — 2026",
        company: "FinaryLabs",
        role: "Senior Flutter Developer",
        description:
            "Building production mobile applications with Flutter and Dart, focusing on scalable architecture, real-time financial data, performance and maintainable code.",
        tags: [
            "Flutter",
            "Dart",
            "iOS",
            "Android",
            "Fintech",
            "REST API",
        ],
    },

    // Diğer deneyimlerini buraya aynı formatta ekleyebiliriz.
];

const projects = [
    {
        number: "01",
        title: "Hissedar",
        subtitle: "Hisse Al Sat",
        description:
            "Modern investment application focused on stock market access, portfolio tracking and financial data.",
        tags: ["Flutter", "Dart", "Finance", "REST API"],
        google:
            "https://play.google.com/store/apps/details?id=app.hissedar.com&hl=en_US",
        apple:
            "https://apps.apple.com/us/app/hissedar-hisse-al-sat/id6747434909",
    },
    {
        number: "02",
        title: "FinaryTrade",
        subtitle: "Broker App",
        description:
            "Trading and brokerage application designed around financial markets and real-time trading workflows.",
        tags: ["Flutter", "Dart", "Broker", "Real-time"],
        google:
            "https://play.google.com/store/apps/details?id=com.finary.trader&hl=en_US",
        apple:
            "https://apps.apple.com/tr/app/finarytrade/id6747672389?l=tr",
    },
    {
        number: "03",
        title: "Parca",
        subtitle: "Şarkı Borsası",
        description:
            "A music investment platform where users can participate in the performance and value of songs.",
        tags: ["Flutter", "Dart", "Fintech", "API"],
        google:
            "https://play.google.com/store/apps/details?id=com.finarylabs.parca&hl=en_US",
        apple:
            "https://apps.apple.com/tr/app/parca/id6615072917?l=tr",
    },
    {
        number: "04",
        title: "Liderform",
        subtitle: "Sports Platform",
        description:
            "Mobile sports platform delivering horse racing information, analysis and user-focused experiences.",
        tags: ["Flutter", "Dart", "REST API", "Mobile"],
        google:
            "https://play.google.com/store/apps/details?id=com.liderform&hl=tr",
        apple:
            "https://apps.apple.com/al/app/liderform/id1380650135",
    },
];

const skillGroups = [
    {
        title: "Mobile",
        skills: ["Flutter", "Dart", "iOS", "Android"],
    },
    {
        title: "Architecture",
        skills: ["Clean Architecture", "MVVM", "SOLID", "OOP"],
    },
    {
        title: "State Management",
        skills: ["MobX", "Riverpod", "BLoC"],
    },
    {
        title: "Backend & Data",
        skills: ["REST API", "GraphQL", "Dio", "Firebase", "SQLite", "Hive"],
    },
    {
        title: "Tools",
        skills: ["Git", "CI/CD", "App Store", "Google Play"],
    },
];

function App() {
    return (
        <div className="site">
            <div className="noise" />

            <header className="header">
                <a href="#home" className="brand">
                    ENES<span>.</span>
                </a>

                <nav>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a
                    href="https://www.linkedin.com/in/eneskal/"
                    target="_blank"
                    rel="noreferrer"
                    className="header-link"
                >
                    LinkedIn
                    <ArrowUpRight size={14} />
                </a>
            </header>

            <main>
                <section className="hero section-width" id="home">
                    <div className="hero-left">
                        <div className="availability">
                            <span className="pulse" />
                            Available for remote opportunities
                        </div>

                        <p className="hero-kicker">
                            SENIOR FLUTTER DEVELOPER
                        </p>

                        <h1>
                            Building mobile
                            <br />
                            products with
                            <br />
                            <em>Flutter.</em>
                        </h1>

                        <p className="hero-text">
                            Senior Flutter Developer focused on building
                            scalable, production-ready mobile applications
                            for iOS and Android.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="button button-primary">
                                View projects
                                <ArrowDown size={15} />
                            </a>

                            <a
                                href="https://github.com/enes-kal"
                                target="_blank"
                                rel="noreferrer"
                                className="button button-secondary"
                            >
                                GitHub
                                <ArrowUpRight size={15} />
                            </a>
                        </div>

                        <div className="hero-location">
                            <MapPin size={14} />
                            Istanbul, Türkiye
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="terminal">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span>enes.dart</span>
                            </div>

                            <div className="terminal-body">
                                <div>
                                    <span className="purple">class</span>{" "}
                                    <span className="blue">EnesKal</span> {"{"}
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    String{" "}
                                    <span className="cyan">role</span> ={" "}
                                    <span className="orange">
                                        "Senior Flutter Developer"
                                    </span>
                                    ;
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    String{" "}
                                    <span className="cyan">experience</span> ={" "}
                                    <span className="orange">"10+ years"</span>;
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    String{" "}
                                    <span className="cyan">framework</span> ={" "}
                                    <span className="orange">"Flutter"</span>;
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    bool{" "}
                                    <span className="cyan">cleanCode</span> ={" "}
                                    <span className="blue">true</span>;
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    bool{" "}
                                    <span className="cyan">available</span> ={" "}
                                    <span className="blue">true</span>;
                                </div>

                                <div>{"}"}</div>

                                <div className="terminal-cursor">_</div>
                            </div>
                        </div>

                        <div className="floating-card">
                            <Smartphone size={17} />

                            <div>
                                <strong>10+</strong>
                                <span>Mobile Applications</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="intro section-width">
                    <div className="section-index">01</div>

                    <div className="intro-content">
                        <p className="mono-label">ABOUT ME</p>

                        <h2>
                            From idea to App Store,
                            <br />
                            I build the whole experience.
                        </h2>

                        <p className="intro-description">
                            I specialize in cross-platform mobile
                            development with Flutter. My experience spans
                            fintech, trading, sports and consumer products.
                            I focus on clean architecture, performance and
                            maintainable code.
                        </p>
                    </div>
                </section>

                <section
                    className="content-section section-width"
                    id="experience"
                >
                    <div className="section-title-row">
                        <div className="section-index">02</div>

                        <div>
                            <p className="mono-label">EXPERIENCE</p>
                            <h2>Where I've worked.</h2>
                        </div>
                    </div>

                    <div className="timeline">
                        {experiences.map((experience) => (
                            <article
                                className="timeline-item"
                                key={`${experience.company}-${experience.role}`}
                            >
                                <div className="timeline-marker">
                                    <span />
                                </div>

                                <div className="timeline-period">
                                    {experience.period}
                                </div>

                                <div className="timeline-content">
                                    <div className="company">
                                        {experience.company}
                                    </div>

                                    <h3>{experience.role}</h3>

                                    <p>{experience.description}</p>

                                    <div className="tag-list">
                                        {experience.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="content-section section-width"
                    id="skills"
                >
                    <div className="section-title-row">
                        <div className="section-index">03</div>

                        <div>
                            <p className="mono-label">SKILLS</p>
                            <h2>Tools of the trade.</h2>
                        </div>
                    </div>

                    <div className="skills-grid">
                        {skillGroups.map((group) => (
                            <div className="skill-group" key={group.title}>
                                <span className="skill-group-title">
                                    {group.title}
                                </span>

                                <div className="skills">
                                    {group.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    className="content-section section-width"
                    id="projects"
                >
                    <div className="section-title-row">
                        <div className="section-index">04</div>

                        <div>
                            <p className="mono-label">SELECTED WORK</p>
                            <h2>Products in production.</h2>
                        </div>
                    </div>

                    <div className="projects">
                        {projects.map((project) => (
                            <article className="project" key={project.title}>
                                <div className="project-number">
                                    {project.number}
                                </div>

                                <div className="project-content">
                                    <div className="project-heading">
                                        <div>
                                            <span className="project-subtitle">
                                                {project.subtitle}
                                            </span>

                                            <h3>{project.title}</h3>
                                        </div>

                                        <div className="project-links">
                                            <a
                                                href={project.google}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Google Play
                                                <ExternalLink size={13} />
                                            </a>

                                            <a
                                                href={project.apple}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                App Store
                                                <ExternalLink size={13} />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="tag-list">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-arrow">
                                    <ArrowUpRight size={18} />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="contact section-width"
                    id="contact"
                >
                    <div className="contact-line" />

                    <p className="mono-label">
                        HAVE A PROJECT IN MIND?
                    </p>

                    <h2>
                        Let's build something
                        <br />
                        <em>great.</em>
                    </h2>

                    <p className="contact-description">
                        Open to Senior Flutter Developer opportunities
                        and remote roles.
                    </p>

                    <div className="contact-buttons">
                        <a
                            href="https://www.linkedin.com/in/eneskal/"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-primary"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/enes-kal"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                        >
                            <Github size={16} />
                            GitHub
                        </a>

                        <a
                            href="mailto:YOUR_EMAIL_HERE"
                            className="button button-secondary"
                        >
                            <Mail size={16} />
                            Email
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer section-width">
                <div className="footer-brand">
                    ENES<span>.</span>
                </div>

                <p>Senior Flutter Developer</p>

                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/eneskal/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin size={16} />
                    </a>

                    <a
                        href="https://github.com/enes-kal"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github size={16} />
                    </a>
                </div>

                <span className="copyright">
                    © {new Date().getFullYear()} Enes Kal
                </span>
            </footer>
        </div>
    );
}

export default App;