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
import { useState } from "react";

const projects = [
    {
        title: "Hissedar",
        subtitle: {
            tr: "Hisse Al Sat",
            en: "Stock Trading",
        },
        description: {
            tr: "Hisse senedi alım satımı, portföy takibi ve gerçek zamanlı finansal veriler sunan modern yatırım uygulaması.",
            en: "A modern investment application focused on stock trading, portfolio tracking and real-time financial data.",
        },
        technologies: ["Flutter", "Dart", "REST API", "Finance"],
        google:
            "https://play.google.com/store/apps/details?id=app.hissedar.com&hl=en_US",
        apple:
            "https://apps.apple.com/us/app/hissedar-hisse-al-sat/id6747434909",
    },
    {
        title: "FinaryTrade",
        subtitle: {
            tr: "Broker Uygulaması",
            en: "Broker App",
        },
        description: {
            tr: "Finansal piyasalar ve gerçek zamanlı işlem süreçleri için geliştirilen yatırım ve broker uygulaması.",
            en: "A trading and brokerage application designed for financial markets and real-time trading workflows.",
        },
        technologies: ["Flutter", "Dart", "REST API", "Real-time Data"],
        google:
            "https://play.google.com/store/apps/details?id=com.finary.trader&hl=en_US",
        apple:
            "https://apps.apple.com/tr/app/finarytrade/id6747672389?l=tr",
    },
    {
        title: "Liderform",
        subtitle: {
            tr: "Spor Platformu",
            en: "Sports Platform",
        },
        description: {
            tr: "At yarışı bilgileri, analizler ve kullanıcı odaklı deneyimler sunan mobil spor platformu.",
            en: "A mobile sports platform delivering horse racing information, analysis and user-focused experiences.",
        },
        technologies: ["Flutter", "Dart", "REST API", "Mobile"],
        google:
            "https://play.google.com/store/apps/details?id=com.liderform&hl=tr",
        apple:
            "https://apps.apple.com/al/app/liderform/id1380650135",
    },
    {
        title: "Parca",
        subtitle: {
            tr: "Şarkı Borsası",
            en: "Music Investment",
        },
        description: {
            tr: "Kullanıcıların şarkıların performansına ve değerine ortak olabildiği müzik yatırım platformu.",
            en: "A music investment platform where users can participate in the performance and value of songs.",
        },
        technologies: ["Flutter", "Dart", "API Integration", "Fintech"],
        google:
            "https://play.google.com/store/apps/details?id=com.finarylabs.parca&hl=en_US",
        apple:
            "https://apps.apple.com/tr/app/parca/id6615072917?l=tr",
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

const experiences = [
    {
        company: "FinaryLabs",
        role: {
            tr: "Senior Flutter Developer",
            en: "Senior Flutter Developer",
        },
        type: {
            tr: "Tam zamanlı",
            en: "Full-time",
        },
        date: "Haz 2024 — Tem 2026",
        location: {
            tr: "Uzaktan",
            en: "Remote",
        },
        description: {
            tr: "Fintech ve finansal piyasalar üzerine üretim uygulamaları geliştirdim. Flutter, Figma ve yapay zeka destekli geliştirme süreçlerinde çalıştım.",
            en: "Developed production applications for fintech and financial markets, working with Flutter, Figma and AI-assisted development workflows.",
        },
    },
    {
        company: "IKON Menkul",
        role: {
            tr: "Senior Flutter Developer",
            en: "Senior Flutter Developer",
        },
        type: {
            tr: "Yarı zamanlı",
            en: "Part-time",
        },
        date: "Haz 2022 — May 2025",
        location: {
            tr: "İstanbul, Türkiye · Uzaktan",
            en: "Istanbul, Türkiye · Remote",
        },
        description: {
            tr: "Finans ve yatırım odaklı mobil uygulamaların geliştirilmesi ve bakımında görev aldım.",
            en: "Worked on the development and maintenance of mobile applications focused on finance and investment.",
        },
    },
    {
        company: "GoldenSoft",
        role: {
            tr: "Senior Mobile Developer",
            en: "Senior Mobile Developer",
        },
        type: {
            tr: "Tam zamanlı",
            en: "Full-time",
        },
        date: "Ağu 2023 — May 2024",
        location: {
            tr: "Uzaktan",
            en: "Remote",
        },
        description: {
            tr: "Mobil geliştirme ekibinde teknik sorumluluk aldım ve Mobile Team Lead olarak görev yaptım.",
            en: "Took technical responsibility within the mobile development team and worked as Mobile Team Lead.",
        },
    },
    {
        company: "Flutter App Development",
        role: {
            tr: "Mid Mobile Application Developer",
            en: "Mid Mobile Application Developer",
        },
        type: {
            tr: "Uzaktan",
            en: "Remote",
        },
        date: "May 2018 — Ağu 2023",
        location: {
            tr: "Uzaktan",
            en: "Remote",
        },
        description: {
            tr: "Flutter tabanlı mobil uygulamaların geliştirilmesinde görev aldım.",
            en: "Worked on the development of Flutter-based mobile applications.",
        },
    },
    {
        company: "Dağ Yazılım",
        role: {
            tr: "Mid Software Developer",
            en: "Mid Software Developer",
        },
        type: {
            tr: "Tam zamanlı",
            en: "Full-time",
        },
        date: "May 2018 — Nis 2019",
        location: {
            tr: "Türkiye",
            en: "Türkiye",
        },
        description: {
            tr: "Yazılım geliştirme süreçlerinde görev aldım ve farklı projeler üzerinde çalıştım.",
            en: "Worked on software development processes across different projects.",
        },
    },
    {
        company: "Fugo Bilişim Teknolojileri",
        role: {
            tr: "Game Developer",
            en: "Game Developer",
        },
        type: {
            tr: "Tam zamanlı",
            en: "Full-time",
        },
        date: "Eki 2017 — Nis 2018",
        location: {
            tr: "İstanbul, Türkiye",
            en: "Istanbul, Türkiye",
        },
        description: {
            tr: "Mobil ve oyun geliştirme süreçlerinde görev aldım.",
            en: "Worked on mobile and game development projects.",
        },
    },
    {
        company: "1ki3",
        role: {
            tr: "Software Developer / Game Developer",
            en: "Software Developer / Game Developer",
        },
        type: {
            tr: "Tam zamanlı",
            en: "Full-time",
        },
        date: "Oca 2017 — Tem 2017",
        location: {
            tr: "İstanbul, Türkiye",
            en: "Istanbul, Türkiye",
        },
        description: {
            tr: "Yazılım ve oyun geliştirme projelerinde görev aldım.",
            en: "Worked on software and game development projects.",
        },
    },
    {
        company: "Nokta Elektronik ve Bilişim Sistemleri",
        role: {
            tr: "Software Development Intern",
            en: "Software Development Intern",
        },
        type: {
            tr: "Staj",
            en: "Internship",
        },
        date: "Haz 2012 — Ağu 2013",
        location: {
            tr: "Türkiye",
            en: "Türkiye",
        },
        description: {
            tr: "Yazılım geliştirme süreçlerinde profesyonel deneyim kazandım.",
            en: "Gained professional experience in software development processes.",
        },
    },
    {
        company: "Koyuncu Elektronik A.Ş.",
        role: {
            tr: "Software Development Intern",
            en: "Software Development Intern",
        },
        type: {
            tr: "Staj",
            en: "Internship",
        },
        date: "Haz 2009 — Mar 2010",
        location: {
            tr: "Türkiye",
            en: "Türkiye",
        },
        description: {
            tr: "Yazılım geliştirme kariyerimin ilk profesyonel adımlarını attım.",
            en: "Started my professional journey in software development.",
        },
    },
];

const content = {
    tr: {
        nav: ["Hakkımda", "Deneyim", "Projeler", "Yetenekler"],
        contact: "İletişime geç",
        available: "Uzaktan fırsatlara açığım",
        eyebrow: "SENIOR MOBILE APP DEVELOPER",
        heroTitle: <>Flutter ile <span>mobil deneyimler</span> geliştiriyorum.</>,
        heroDescription:
            "10+ yıllık yazılım deneyimine sahip Senior Flutter Developer. iOS ve Android için production-ready mobil uygulamalar geliştiriyorum.",
        viewWork: "Projelerimi gör",
        profile: "PROFİL",
        experience: "10+ yıl",
        specialization: "Flutter",
        focus: "Production Apps",
        years: "Yıl Deneyim",
        apps: "Mobil Uygulama",
        platforms: "Platform",
        featured: "Öne Çıkan Proje",
        aboutLabel: "HAKKIMDA",
        aboutTitle: "Sadece arayüz değil, ürün geliştiriyorum.",
        aboutLarge:
            "Flutter ve Dart konusunda uzmanlaşmış, 10+ yıllık yazılım geliştirme deneyimine sahip Senior Mobile App Developer'ım.",
        aboutText1:
            "iOS ve Android için ölçeklenebilir, sürdürülebilir ve production-ready mobil uygulamalar geliştiriyorum. Mimari, state management, API entegrasyonları, gerçek zamanlı veriler ve uygulama yayın süreçlerinde deneyimliyim.",
        aboutText2:
            "Fintech, yatırım, spor ve tüketici uygulamaları dahil olmak üzere farklı sektörlerde ürünler geliştirdim.",
        engineering: "Mühendislik",
        engineeringDesc: "Temiz ve ölçeklenebilir mimari",
        crossPlatform: "Cross Platform",
        crossPlatformDesc: "Tek kod tabanı, iOS & Android",
        production: "Production",
        productionDesc: "App Store & Google Play",
        experienceLabel: "DENEYİM",
        experienceTitle: "Profesyonel kariyerim.",
        projectsLabel: "SEÇİLMİŞ PROJELER",
        projectsTitle: "Geliştirdiğim ürünler.",
        google: "Google Play",
        apple: "App Store",
        skillsLabel: "TEKNOLOJİLER",
        skillsTitle: "Çalıştığım teknolojiler.",
        ctaLabel: "BİRLİKTE ÇALIŞALIM",
        ctaTitle: <>Aklında bir mobil ürün<br />var mı?</>,
        ctaText:
            "Yeni fırsatlara, özellikle remote Senior Flutter Developer pozisyonlarına açığım.",
        getInTouch: "İletişime geç",
        mobile: "iOS & Android",
    },
    en: {
        nav: ["About", "Experience", "Projects", "Skills"],
        contact: "Let's talk",
        available: "Open to Remote Opportunities",
        eyebrow: "SENIOR MOBILE APP DEVELOPER",
        heroTitle: <>Building <span>mobile experiences</span> with Flutter.</>,
        heroDescription:
            "Senior Flutter Developer with 10+ years of software development experience, building production-ready mobile applications for iOS and Android.",
        viewWork: "View my work",
        profile: "PROFILE",
        experience: "10+ years",
        specialization: "Flutter",
        focus: "Production Apps",
        years: "Years Experience",
        apps: "Mobile Apps",
        platforms: "Platforms",
        featured: "Featured Products",
        aboutLabel: "ABOUT ME",
        aboutTitle: "Building products, not just interfaces.",
        aboutLarge:
            "I'm a Senior Mobile App Developer specialized in Flutter and Dart, with more than a decade of software development experience.",
        aboutText1:
            "I build scalable, maintainable and production-ready mobile applications for iOS and Android, with experience across architecture, state management, API integrations, real-time data and app publishing.",
        aboutText2:
            "I've worked on products across fintech, investment, sports and consumer applications.",
        engineering: "Engineering",
        engineeringDesc: "Clean & scalable architecture",
        crossPlatform: "Cross Platform",
        crossPlatformDesc: "One codebase, iOS & Android",
        production: "Production",
        productionDesc: "App Store & Google Play",
        experienceLabel: "EXPERIENCE",
        experienceTitle: "Professional experience.",
        projectsLabel: "SELECTED WORK",
        projectsTitle: "Products I've worked on.",
        google: "Google Play",
        apple: "App Store",
        skillsLabel: "TECHNOLOGIES",
        skillsTitle: "Tools I work with.",
        ctaLabel: "LET'S WORK TOGETHER",
        ctaTitle: <>Have a mobile product<br />in mind?</>,
        ctaText:
            "I'm currently open to new opportunities, especially remote Senior Flutter Developer roles.",
        getInTouch: "Get in touch",
        mobile: "iOS & Android",
    },
};

function App() {
    const [language, setLanguage] = useState("tr");
    const t = content[language];

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="app">
            <nav className="navbar">
                <a href="#home" className="logo">
                    EK<span>.</span>
                </a>

                <div className="nav-links">
                    <a href="#about">{t.nav[0]}</a>
                    <a href="#experience">{t.nav[1]}</a>
                    <a href="#projects">{t.nav[2]}</a>
                    <a href="#skills">{t.nav[3]}</a>
                </div>

                <div className="nav-right">
                    <div className="language-switcher">
                        <button
                            className={language === "tr" ? "active" : ""}
                            onClick={() => setLanguage("tr")}
                        >
                            TR
                        </button>
                        <span>/</span>
                        <button
                            className={language === "en" ? "active" : ""}
                            onClick={() => setLanguage("en")}
                        >
                            EN
                        </button>
                    </div>

                    <a
                        className="nav-contact"
                        href="mailto:hello@eneskal.dev"
                    >
                        {t.contact}
                    </a>
                </div>
            </nav>

            <main>
                <section className="hero container" id="home">
                    <div className="hero-content">
                        <div className="available">
                            <span className="available-dot" />
                            {t.available}
                        </div>

                        <p className="eyebrow">{t.eyebrow}</p>

                        <h1>{t.heroTitle}</h1>

                        <p className="hero-description">
                            {t.heroDescription}
                        </p>

                        <div className="hero-actions">
                            <a href="#projects" className="primary-button">
                                {t.viewWork}
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
                                {t.mobile}
                            </span>
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="hero-card-top">
                            <span>{t.profile}</span>

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
                                <span className="code-property">
                                    experience
                                </span>
                                <span>:</span>
                                <span className="code-green">
                                    "{t.experience}"
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="code-property">
                                    specialization
                                </span>
                                <span>:</span>
                                <span className="code-green">
                                    "Flutter"
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="code-property">
                                    platforms
                                </span>
                                <span>:</span>
                                <span className="code-green">
                                    ["iOS", "Android"]
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="code-property">
                                    focus
                                </span>
                                <span>:</span>
                                <span className="code-green">
                                    "{t.focus}"
                                </span>
                            </div>

                            <span className="code-yellow">{"}"}</span>
                        </div>
                    </div>
                </section>

                <section className="stats container">
                    <div>
                        <strong>10+</strong>
                        <span>{t.years}</span>
                    </div>

                    <div>
                        <strong>12+</strong>
                        <span>{t.apps}</span>
                    </div>

                    <div>
                        <strong>2</strong>
                        <span>{t.platforms}</span>
                    </div>

                    <div>
                        <strong>4</strong>
                        <span>{t.featured}</span>
                    </div>
                </section>

                <section className="section container" id="about">
                    <div className="section-heading">
                        <span className="section-number">01</span>

                        <div>
                            <p className="section-label">
                                {t.aboutLabel}
                            </p>
                            <h2>{t.aboutTitle}</h2>
                        </div>
                    </div>

                    <div className="about-grid">
                        <div className="about-main">
                            <p className="large-text">
                                {t.aboutLarge}
                            </p>

                            <p>{t.aboutText1}</p>

                            <p>{t.aboutText2}</p>
                        </div>

                        <div className="about-side">
                            <div className="info-card">
                                <Code2 />
                                <div>
                                    <strong>{t.engineering}</strong>
                                    <span>{t.engineeringDesc}</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <Layers3 />
                                <div>
                                    <strong>{t.crossPlatform}</strong>
                                    <span>{t.crossPlatformDesc}</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <Store />
                                <div>
                                    <strong>{t.production}</strong>
                                    <span>{t.productionDesc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section container" id="experience">
                    <div className="section-heading">
                        <span className="section-number">02</span>

                        <div>
                            <p className="section-label">
                                {t.experienceLabel}
                            </p>
                            <h2>{t.experienceTitle}</h2>
                        </div>
                    </div>

                    <div className="experience-timeline">
                        {experiences.map((experience, index) => (
                            <div
                                className="timeline-item"
                                key={`${experience.company}-${experience.date}`}
                            >
                                <div className="timeline-marker">
                                    <span />
                                </div>

                                <div className="timeline-card">
                                    <div className="timeline-top">
                                        <div>
                                            <span className="timeline-company">
                                                {experience.company}
                                            </span>

                                            <h3>
                                                {experience.role[language]}
                                            </h3>

                                            <span className="timeline-type">
                                                {experience.type[language]}
                                            </span>
                                        </div>

                                        <span className="timeline-date">
                                            {experience.date}
                                        </span>
                                    </div>

                                    <div className="timeline-meta">
                                        <MapPin size={14} />
                                        {experience.location[language]}
                                    </div>

                                    <p>
                                        {experience.description[language]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section container" id="projects">
                    <div className="section-heading">
                        <span className="section-number">03</span>

                        <div>
                            <p className="section-label">
                                {t.projectsLabel}
                            </p>
                            <h2>{t.projectsTitle}</h2>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <article
                                className="project-card"
                                key={project.title}
                            >
                                <div className="project-number">
                                    0{index + 1}
                                </div>

                                <div className="project-icon">
                                    <Smartphone size={24} />
                                </div>

                                <div className="project-title">
                                    <h3>{project.title}</h3>
                                    <span>
                                        {project.subtitle[language]}
                                    </span>
                                </div>

                                <p>
                                    {project.description[language]}
                                </p>

                                <div className="technology-list">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.google}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t.google}
                                        <ExternalLink size={15} />
                                    </a>

                                    <a
                                        href={project.apple}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t.apple}
                                        <ExternalLink size={15} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section container" id="skills">
                    <div className="section-heading">
                        <span className="section-number">04</span>

                        <div>
                            <p className="section-label">
                                {t.skillsLabel}
                            </p>
                            <h2>{t.skillsTitle}</h2>
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

                <section className="cta container">
                    <div className="cta-inner">
                        <p className="section-label">{t.ctaLabel}</p>

                        <h2>{t.ctaTitle}</h2>

                        <p>{t.ctaText}</p>

                        <a
                            href="https://www.linkedin.com/in/eneskal/"
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button"
                        >
                            {t.getInTouch}
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </section>
            </main>

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