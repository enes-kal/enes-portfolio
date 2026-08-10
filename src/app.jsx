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
        year: "2017 — 2026",
        company: "FinaryLabs",
        role: "Senior Flutter Developer",
        description:
            "Developing production-ready mobile applications with Flutter and Dart, focusing on scalable architecture, real-time data, performance and maintainability.",
        tags: [
            "Flutter",
            "Dart",
            "Fintech",
            "Real-time Data",
            "iOS",
            "Android",
        ],
    },
];

const projects = [
    {
        number: "01",
        title: "Hissedar",
        subtitle: "Hisse Al Sat",
        description:
            "A modern investment application focused on stock market access, portfolio tracking and financial data.",
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
            "A trading and brokerage application built for financial markets and real-time trading workflows.",
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
            "A mobile sports platform delivering horse racing information, analysis and user-focused experiences.",
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
        skills: [
            "Clean Architecture",
            "MVVM",
            "SOLID",
            "OOP",
        ],
    },
    {
        title: "State Management",
        skills: ["MobX", "Riverpod", "BLoC"],
    },
    {
        title: "Backend & Data",
        skills: [
            "REST API",
            "GraphQL",
            "Dio",
            "Firebase",
            "SQLite",
            "Hive",
        ],
    },
    {
        title: "Tools",
        skills: [
            "Git",
            "CI/CD",
            "App Store",
            "Google Play",
        ],
    },
];

function App() {
    return (
        <div className="site">
            <div className="noise" />

            {/* NAVIGATION */}

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
                {/* HERO */}

                <section className="hero section-width" id="home">
                    <div className="hero-left">
                        <div className="availability">
                            <span className="pulse" />
                            Available for remote opportunities
                        </div>

                        <p className="hero-kicker">
                            SENIOR MOBILE APP DEVELOPER
                        </p>

                        <h1>
                            I build mobile
                            <br />
                            products with
                            <br />
                            <em>Flutter.</em>
                        </h1>

                        <p className="hero-text">
                            Senior Flutter Developer with 10+ years of
                            software development experience, building
                            production-ready applications for iOS and
                            Android.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="button button-dark">
                                Explore my work
                                <ArrowDown size={16} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/eneskal/"
                                target="_blank"
                                rel="noreferrer"
                                className="button button-outline"
                            >
                                LinkedIn
                                <ArrowUpRight size={16} />
                            </a>
                        </div>

                        <div className="hero-location">
                            <MapPin size={14} />
                            Istanbul, Türkiye
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="terminal">
                            <div className="terminal-top">
                                <div className="terminal-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span className="terminal-name">
                                    enes.dart
                                </span>

                                <span className="terminal-space" />
                            </div>

                            <div className="terminal-body">
                                <div>
                                    <span className="purple">class</span>{" "}
                                    <span className="blue">
                                        SeniorDeveloper
                                    </span>{" "}
                                    {"{"}
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    String{" "}
                                    <span className="green">
                                        experience
                                    </span>{" "}
                                    ={" "}
                                    <span className="orange">
                                        "10+ years"
                                    </span>
                                    ;
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    String{" "}
                                    <span className="green">
                                        specialization
                                    </span>{" "}
                                    ={" "}
                                    <span className="orange">
                                        "Flutter"
                                    </span>
                                    ;
                                </div>

                                <div className="indent">
                                    <span className="purple">final</span>{" "}
                                    List&lt;String&gt;{" "}
                                    <span className="green">
                                        platforms
                                    </span>{" "}
                                    = [
                                </div>

                                <div className="indent-2">
                                    <span className="orange">
                                        "iOS"
                                    </span>
                                    ,
                                </div>

                                <div className="indent-2">
                                    <span className="orange">
                                        "Android"
                                    </span>
                                </div>

                                <div className="indent">
                                    ];
                                </div>

                                <div className="indent">
                                    <span className="purple">bool</span>{" "}
                                    <span className="green">
                                        lovesCleanCode
                                    </span>{" "}
                                    ={" "}
                                    <span className="blue">
                                        true
                                    </span>
                                    ;
                                </div>

                                <div>{"}"}</div>

                                <div className="terminal-cursor">
                                    _
                                </div>
                            </div>
                        </div>

                        <div className="floating-card">
                            <Smartphone size={17} />
                            <div>
                                <strong>10+</strong>
                                <span>Mobile Apps</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}

                <section className="intro section-width">
                    <div className="section-index">01</div>

                    <div className="intro-content">
                        <p className="mono-label">
                            A LITTLE ABOUT ME
                        </p>

                        <h2>
                            From idea to App Store,
                            <br />
                            I build the whole experience.
                        </h2>

                        <p className="intro-description">
                            I specialize in cross-platform mobile
                            development with Flutter. My experience spans
                            fintech, trading, sports and consumer products.
                            I care about clean architecture, performance
                            and code that remains maintainable as products
                            grow.
                        </p>
                    </div>
                </section>

                {/* EXPERIENCE */}

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
                            <div
                                className="timeline-item"
                                key={experience.company}
                            >
                                <div className="timeline-line">
                                    <span className="timeline-dot" />
                                </div>

                                <div className="timeline-date">
                                    {experience.year}
                                </div>

                                <div className="timeline-content">
                                    <span className="company">
                                        {experience.company}
                                    </span>

                                    <h3>{experience.role}</h3>

                                    <p>{experience.description}</p>

                                    <div className="tag-list">
                                        {experience.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SKILLS */}

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

                {/* PROJECTS */}

                <section
                    className="content-section section-width"
                    id="projects"
                >
                    <div className="section-title-row">
                        <div className="section-index">04</div>

                        <div>
                            <p className="mono-label">
                                SELECTED PROJECTS
                            </p>

                            <h2>Products in production.</h2>
                        </div>
                    </div>

                    <div className="projects">
                        {projects.map((project) => (
                            <article
                                className="project"
                                key={project.title}
                            >
                                <div className="project-top">
                                    <span className="project-number">
                                        {project.number}
                                    </span>

                                    <div className="project-links">
                                        <a
                                            href={project.google}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Google Play"
                                        >
                                            Google Play
                                            <ExternalLink size={13} />
                                        </a>

                                        <a
                                            href={project.apple}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="App Store"
                                        >
                                            App Store
                                            <ExternalLink size={13} />
                                        </a>
                                    </div>
                                </div>

                                <div className="project-main">
                                    <p className="project-subtitle">
                                        {project.subtitle}
                                    </p>

                                    <h3>{project.title}</h3>

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
                                    <ArrowUpRight size={19} />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}

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
                        I'm open to Senior Flutter Developer
                        opportunities, especially remote roles.
                    </p>

                    <div className="contact-buttons">
                        <a
                            href="https://www.linkedin.com/in/eneskal/"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-dark"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/enes-kal"
                            target="_blank"
                            rel="noreferrer"
                            className="button button-outline"
                        >
                            <Github size={16} />
                            GitHub
                        </a>

                        <a
                            href="mailto:eneskal@outlook.com"
                            className="button button-outline"
                        >
                            <Mail size={16} />
                            Email
                        </a>
                    </div>
                </section>
            </main>

            {/* FOOTER */}

            <footer className="footer section-width">
                <div className="footer-brand">
                    ENES<span>.</span>
                </div>

                <p>
                    Senior Flutter Developer · Mobile Applications
                </p>

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