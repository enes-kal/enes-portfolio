import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    MapPin,
    ExternalLink,
    Smartphone,
    Code2,
    Layers3,
    Store,
    BriefcaseBusiness,
} from "lucide-react";

const projects = [
    {
        title: "Hissedar",
        subtitle: "Hisse Al Sat",
        description:
            "A modern investment application focused on stock market access, portfolio tracking and real-time financial data.",
        technologies: ["Flutter", "Dart", "REST API", "Finance"],
        google:
            "https://play.google.com/store/apps/details?id=app.hissedar.com&hl=en_US",
        apple:
            "https://apps.apple.com/us/app/hissedar-hisse-al-sat/id6747434909",
    },
    {
        title: "FinaryTrade",
        subtitle: "Broker App",
        description:
            "A trading and brokerage application designed for financial markets and real-time trading workflows.",
        technologies: ["Flutter", "Dart", "REST API", "Real-time Data"],
        google:
            "https://play.google.com/store/apps/details?id=com.finary.trader&hl=en_US",
        apple:
            "https://apps.apple.com/tr/app/finarytrade/id6747672389?l=tr",
    },
    {
        title: "Parca",
        subtitle: "Şarkı Borsası",
        description:
            "A music investment platform where users can participate in the performance and value of songs.",
        technologies: ["Flutter", "Dart", "API Integration", "Fintech"],
        google:
            "https://play.google.com/store/apps/details?id=com.finarylabs.parca&hl=en_US",
        apple:
            "https://apps.apple.com/tr/app/parca/id6615072917?l=tr",
    },
    {
        title: "Liderform",
        subtitle: "Sports Platform",
        description:
            "A mobile sports platform delivering horse racing information, analysis and user-focused experiences.",
        technologies: ["Flutter", "Dart", "REST API", "Mobile"],
        google:
            "https://play.google.com/store/apps/details?id=com.liderform&hl=tr",
        apple:
            "https://apps.apple.com/al/app/liderform/id1380650135",
    },
];

const skills = [
    "Flutter",
    "Dart",
    "iOS",
    "Android",
    "Clean Architecture",
    "SOLID",
    "MVVM",
    "MobX",
    "Riverpod",
    "BLoC",
    "REST API",
    "GraphQL",
    "Dio",
    "Firebase",
    "SQLite",
    "Hive",
    "Git",
    "CI/CD",
];

function App() {
    return (
        <div className="app">
            <div className="background-glow glow-one" />
            <div className="background-glow glow-two" />

            <nav className="navbar">
                <a href="#home" className="logo">
                    EK<span>.</span>
                </a>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>

                <a
                    className="nav-contact"
                    href="mailto:hello@eneskal.dev"
                >
                    Let's talk
                </a>
            </nav>

            <main>
                {/* HERO */}

                <section className="hero container" id="home">
                    <div className="hero-content">
                        <div className="available">
                            <span className="available-dot" />
                            Open to Remote Opportunities
                        </div>

                        <p className="eyebrow">
                            SENIOR MOBILE APP DEVELOPER
                        </p>

                        <h1>
                            Building mobile
                            <br />
                            experiences with
                            <span> Flutter.</span>
                        </h1>

                        <p className="hero-description">
                            Senior Flutter Developer with 10+ years of experience
                            building production-ready mobile applications for
                            iOS and Android.
                        </p>

                        <div className="hero-actions">
                            <a href="#projects" className="primary-button">
                                View my work
                                <ArrowUpRight size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/eneskal/"
                                target="_blank"
                                rel="noreferrer"
                                className="secondary-button"
                            >
                                LinkedIn
                                <Linkedin size={17} />
                            </a>
                        </div>

                        <div className="hero-meta">
                            <span>
                                <MapPin size={16} />
                                Istanbul, Türkiye
                            </span>

                            <span>
                                <Smartphone size={16} />
                                iOS & Android
                            </span>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="hero-card-top">
                            <span>PROFILE</span>

                            <div className="status">
                                <span />
                                Available
                            </div>
                        </div>

                        <div className="hero-code">
                            <span className="code-purple">const</span>{" "}
                            <span className="code-blue">developer</span>{" "}
                            <span>=</span>{" "}
                            <span className="code-yellow">{"{"}</span>

                            <div className="code-line">
                                <span className="code-property">experience</span>
                                <span>:</span>
                                <span className="code-green">"10+ years"</span>
                            </div>

                            <div className="code-line">
                                <span className="code-property">specialization</span>
                                <span>:</span>
                                <span className="code-green">
                                    "Flutter"
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="code-property">platforms</span>
                                <span>:</span>
                                <span className="code-green">
                                    ["iOS", "Android"]
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="code-property">focus</span>
                                <span>:</span>
                                <span className="code-green">
                                    "Production Apps"
                                </span>
                            </div>

                            <span className="code-yellow">{"}"}</span>
                        </div>
                    </div>
                </section>

                {/* STATS */}

                <section className="stats container">
                    <div>
                        <strong>10+</strong>
                        <span>Years Experience</span>
                    </div>

                    <div>
                        <strong>10+</strong>
                        <span>Mobile Apps</span>
                    </div>

                    <div>
                        <strong>2</strong>
                        <span>Platforms</span>
                    </div>

                    <div>
                        <strong>4</strong>
                        <span>Featured Products</span>
                    </div>
                </section>

                {/* ABOUT */}

                <section className="section container" id="about">
                    <div className="section-heading">
                        <span className="section-number">01</span>

                        <div>
                            <p className="section-label">ABOUT ME</p>
                            <h2>Building products, not just interfaces.</h2>
                        </div>
                    </div>

                    <div className="about-grid">
                        <div className="about-main">
                            <p className="large-text">
                                I'm a Senior Mobile App Developer specialized in
                                Flutter and Dart, with more than a decade of
                                experience in software development.
                            </p>

                            <p>
                                I focus on building scalable, maintainable and
                                production-ready mobile applications for iOS and
                                Android. My experience covers architecture,
                                state management, API integrations, real-time
                                data and application publishing.
                            </p>

                            <p>
                                I've worked on products across fintech,
                                investment, sports and consumer applications,
                                taking projects from development to App Store and
                                Google Play release.
                            </p>
                        </div>

                        <div className="about-side">
                            <div className="info-card">
                                <Code2 />
                                <div>
                                    <strong>Engineering</strong>
                                    <span>Clean & scalable architecture</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <Layers3 />
                                <div>
                                    <strong>Cross Platform</strong>
                                    <span>One codebase, iOS & Android</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <Store />
                                <div>
                                    <strong>Production</strong>
                                    <span>App Store & Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}

                <section className="section container" id="experience">
                    <div className="section-heading">
                        <span className="section-number">02</span>

                        <div>
                            <p className="section-label">EXPERIENCE</p>
                            <h2>Professional experience.</h2>
                        </div>
                    </div>

                    <div className="experience-card">
                        <div className="experience-header">
                            <div>
                                <span className="experience-company">
                                    FinaryLabs
                                </span>

                                <h3>Senior Flutter Developer</h3>
                            </div>

                            <span className="experience-date">
                                2017 — 2026
                            </span>
                        </div>

                        <div className="experience-content">
                            <p>
                                Developing production mobile applications with
                                Flutter and Dart, with a strong focus on
                                architecture, performance and maintainability.
                            </p>

                            <ul>
                                <li>
                                    Developed and maintained cross-platform mobile
                                    applications.
                                </li>

                                <li>
                                    Worked on fintech and financial market
                                    applications with real-time data.
                                </li>

                                <li>
                                    Integrated REST APIs and external services.
                                </li>

                                <li>
                                    Worked with multiple state management
                                    architectures.
                                </li>

                                <li>
                                    Managed Google Play and App Store publishing
                                    processes.
                                </li>

                                <li>
                                    Contributed to mobile development team
                                    leadership and technical decisions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}

                <section className="section container" id="projects">
                    <div className="section-heading">
                        <span className="section-number">03</span>

                        <div>
                            <p className="section-label">SELECTED WORK</p>
                            <h2>Products I've worked on.</h2>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <article className="project-card" key={project.title}>
                                <div className="project-number">
                                    0{index + 1}
                                </div>

                                <div className="project-icon">
                                    <Smartphone size={24} />
                                </div>

                                <div className="project-title">
                                    <h3>{project.title}</h3>
                                    <span>{project.subtitle}</span>
                                </div>

                                <p>{project.description}</p>

                                <div className="technology-list">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.google}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Google Play
                                        <ExternalLink size={15} />
                                    </a>

                                    <a
                                        href={project.apple}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        App Store
                                        <ExternalLink size={15} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* SKILLS */}

                <section className="section container" id="skills">
                    <div className="section-heading">
                        <span className="section-number">04</span>

                        <div>
                            <p className="section-label">TECHNOLOGIES</p>
                            <h2>Tools I work with.</h2>
                        </div>
                    </div>

                    <div className="skills-wrapper">
                        {skills.map((skill) => (
                            <span className="skill" key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* CTA */}

                <section className="cta container">
                    <div className="cta-inner">
                        <p className="section-label">LET'S WORK TOGETHER</p>

                        <h2>
                            Have a mobile product
                            <br />
                            in mind?
                        </h2>

                        <p>
                            I'm currently open to new opportunities,
                            especially remote Senior Flutter Developer roles.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/eneskal/"
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button"
                        >
                            Get in touch
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </section>
            </main>

            {/* FOOTER */}

            <footer className="footer container">
                <div>
                    <strong>Enes Kal</strong>
                    <span>Senior Flutter Developer</span>
                </div>

                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/eneskal/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={19} />
                    </a>

                    <a
                        href="https://github.com/enes-kal"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Github size={19} />
                    </a>

                    <a
                        href="mailto:hello@eneskal.dev"
                        aria-label="Email"
                    >
                        <Mail size={19} />
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