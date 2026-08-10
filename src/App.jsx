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
            "Developing production mobile applications with Flutter and Dart, with a focus on scalable architecture, financial technologies, performance and clean code.",
        skills: ["Flutter", "Dart", "iOS", "Android", "Fintech"],
    },
];

const projects = [
    {
        number: "01",
        title: "Hissedar",
        subtitle: "Hisse Al Sat",
        description:
            "Modern investment application focused on stock market access, portfolio tracking and financial data.",
        skills: ["Flutter", "Dart", "Finance", "REST API"],
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
            "Trading and brokerage mobile application built for financial markets and real-time trading workflows.",
        skills: ["Flutter", "Dart", "Broker", "Real-time"],
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
        skills: ["Flutter", "Dart", "Fintech", "API"],
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
        skills: ["Flutter", "Dart", "REST API", "Mobile"],
        google:
            "https://play.google.com/store/apps/details?id=com.liderform&hl=tr",
        apple:
            "https://apps.apple.com/al/app/liderform/id1380650135",
    },
];

const skillGroups = [
    {
        title: "Mobile",
        items: ["Flutter", "Dart", "iOS", "Android"],
    },
    {
        title: "Architecture",
        items: ["Clean Architecture", "MVVM", "SOLID", "OOP"],
    },
    {
        title: "State Management",
        items: ["MobX", "Riverpod", "BLoC"],
    },
    {
        title: "Backend & Data",
        items: ["REST API", "GraphQL", "Dio", "Firebase", "SQLite", "Hive"],
    },
];

function App() {
    return (
        <div className="site">
            <div className="noise" />

            <header className="header">
                <a href="#home" className="logo">
                    ENES<span>.</span>
                </a>

                <nav className="nav">
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a
                    className="linkedin-link"
                    href="https://www.linkedin.com/in/eneskal/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                    <ArrowUpRight size={13} />
                </a>
            </header>

            <main>
                <section className="hero container" id="home">
                    <div className="hero-content">
                        <div className="availability">
                            <span />
                            AVAILABLE FOR REMOTE OPPORTUNITIES
                        </div>

                        <p className="eyebrow">SENIOR FLUTTER DEVELOPER</p>

                        <h1>
                            Building mobile
                            <br />
                            products with
                            <br />
                            <span>Flutter.</span>
                        </h1>

                        <p className="hero-description">
                            Senior Flutter Developer focused on building
                            scalable, production-ready mobile applications
                            for iOS and Android.
                        </p>

                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-primary">
                                View projects
                                <ArrowDown size={14} />
                            </a>

                            <a
                                href="https://github.com/enes-kal"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-secondary"
                            >
                                <Github size={14} />
                                GitHub
                            </a>
                        </div>

                        <div className="location">
                            <MapPin size={13} />
                            Istanbul, Türkiye
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="terminal">
                            <div className="terminal-top">
                                <div className="terminal-dots">
                                    <i />
                                    <i />
                                    <i />
                                </div>

                                <span>enes.dart</span>
                            </div>

                            <div className="terminal-code">
                                <div>
                                    <b>class</b>{" "}
                                    <strong>EnesKal</strong> {"{"}
                                </div>

                                <div className="indent">
                                    <b>final</b> String role ={" "}
                                    <em>"Senior Flutter Developer"</em>;
                                </div>

                                <div className="indent">
                                    <b>final</b> String experience ={" "}
                                    <em>"10+ years"</em>;
                                </div>

                                <div className="indent">
                                    <b>final</b> String framework ={" "}
                                    <em>"Flutter"</em>;
                                </div>

                                <div className="indent">
                                    <b>final</b> bool cleanCode ={" "}
                                    <strong>true</strong>;
                                </div>

                                <div className="indent">
                                    <b>final</b> bool available ={" "}
                                    <strong>true</strong>;
                                </div>

                                <div>{"}"}</div>

                                <div className="cursor">_</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <Smartphone size={17} />

                            <div>
                                <strong>10+</strong>
                                <span>Mobile Applications</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about container">
                    <div className="section-number">01</div>

                    <div className="about-content">
                        <p className="section-label">ABOUT ME</p>

                        <h2>
                            From idea to App Store,
                            <br />
                            I build the whole experience.
                        </h2>

                        <p>
                            I specialize in cross-platform mobile development
                            with Flutter. My experience covers fintech, trading,
                            sports and consumer products. I care about clean
                            architecture, performance and maintainable code.
                        </p>
                    </div>
                </section>

                <section className="section container" id="experience">
                    <div className="section-heading">
                        <div className="section-number">02</div>

                        <div>
                            <p className="section-label">EXPERIENCE</p>
                            <h2>Where I've worked.</h2>
                        </div>
                    </div>

                    <div className="timeline">
                        {experiences.map((item) => (
                            <article className="experience" key={item.company}>
                                <div className="timeline-line">
                                    <span />
                                </div>

                                <div className="experience-date">
                                    {item.period}
                                </div>

                                <div className="experience-info">
                                    <span className="company">{item.company}</span>

                                    <h3>{item.role}</h3>

                                    <p>{item.description}</p>

                                    <div className="tags">
                                        {item.skills.map((skill) => (
                                            <span key={skill}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section container" id="skills">
                    <div className="section-heading">
                        <div className="section-number">03</div>

                        <div>
                            <p className="section-label">SKILLS</p>
                            <h2>Tools of the trade.</h2>
                        </div>
                    </div>

                    <div className="skills-grid">
                        {skillGroups.map((group) => (
                            <div className="skill-group" key={group.title}>
                                <span>{group.title}</span>

                                <div>
                                    {group.items.map((item) => (
                                        <b key={item}>{item}</b>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section container" id="projects">
                    <div className="section-heading">
                        <div className="section-number">04</div>

                        <div>
                            <p className="section-label">SELECTED WORK</p>
                            <h2>Products in production.</h2>
                        </div>
                    </div>

                    <div className="projects">
                        {projects.map((project) => (
                            <article className="project" key={project.title}>
                                <div className="project-number">
                                    {project.number}
                                </div>

                                <div className="project-main">
                                    <div className="project-top">
                                        <div>
                                            <span>{project.subtitle}</span>
                                            <h3>{project.title}</h3>
                                        </div>

                                        <div className="store-links">
                                            <a
                                                href={project.google}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Google Play
                                                <ExternalLink size={12} />
                                            </a>

                                            <a
                                                href={project.apple}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                App Store
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>

                                    <p>{project.description}</p>

                                    <div className="tags">
                                        {project.skills.map((skill) => (
                                            <span key={skill}>{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-arrow">
                                    <ArrowUpRight size={17} />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="contact container" id="contact">
                    <div className="contact-line" />

                    <p className="section-label">GET IN TOUCH</p>

                    <h2>
                        Let's build something
                        <br />
                        <span>great.</span>
                    </h2>

                    <p>
                        Open to Senior Flutter Developer opportunities
                        and remote roles.
                    </p>

                    <div className="contact-actions">
                        <a
                            href="https://www.linkedin.com/in/eneskal/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            <Linkedin size={15} />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/enes-kal"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary"
                        >
                            <Github size={15} />
                            GitHub
                        </a>

                        <a
                            href="mailto:YOUR_EMAIL_HERE"
                            className="btn btn-secondary"
                        >
                            <Mail size={15} />
                            Email
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer container">
                <div className="footer-logo">
                    ENES<span>.</span>
                </div>

                <p>Senior Flutter Developer</p>

                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/eneskal/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin size={15} />
                    </a>

                    <a
                        href="https://github.com/enes-kal"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github size={15} />
                    </a>
                </div>

                <small>© {new Date().getFullYear()} Enes Kal</small>
            </footer>
        </div>
    );
}

export default App;

