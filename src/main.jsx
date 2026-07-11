import React from 'react';
import { createRoot } from 'react-dom/client';
import { ExternalLink, Mail, ArrowUpRight, Code2, Smartphone, Server, BriefcaseBusiness, GraduationCap, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Enes Kal',
  role: 'Flutter Developer',
  location: 'Türkiye',
  email: 'myeneskal@gmail.com',
  github: 'https://github.com/myeneskal',
  linkedin: '#',
  about: `Mobil uygulama geliştirme, modern arayüzler ve ölçeklenebilir ürün mimarileri üzerine çalışan bir yazılım geliştiricisiyim. Flutter ile kullanıcı dostu, hızlı ve temiz kod tabanına sahip uygulamalar geliştiriyorum.`,
};

const stats = [
  ['3+', 'Yıl Deneyim'],
  ['10+', 'Mobil Ekran / Modül'],
  ['5+', 'Aktif Proje'],
];

const experiences = [
  {
    title: 'Flutter Developer',
    company: 'Freelance / Product Projects',
    date: '2023 — Present',
    desc: 'Flutter tabanlı mobil uygulamalar, admin panelleri, API entegrasyonları ve gerçek zamanlı veri akışı gerektiren özellikler geliştiriyorum.',
    tags: ['Flutter', 'Dart', 'REST API', 'Socket', 'Firebase'],
  },
  {
    title: 'Full-stack Product Development',
    company: 'SociaForgeX',
    date: '2026',
    desc: 'FastAPI backend, sosyal medya hesap bağlantıları, marka profili yönetimi ve AI destekli içerik üretimi üzerine ürün geliştirme.',
    tags: ['FastAPI', 'Python', 'OAuth', 'AI', 'PostgreSQL'],
  },
];

const projects = [
  {
    title: 'Hissedar / Trading App',
    type: 'Mobile App',
    desc: 'Hisse alım-satım deneyimi için gerçek zamanlı socket modülü, portföy ekranları ve işlem akışları.',
    tags: ['Flutter', 'Socket', 'Finance'],
    link: '#',
  },
  {
    title: 'SociaForgeX',
    type: 'AI Content Platform',
    desc: 'Markalara özel sosyal medya içerikleri, özel gün postları, görsel üretimi ve otomatik paylaşım odaklı platform.',
    tags: ['FastAPI', 'AI', 'Instagram API'],
    link: '#',
  },
  {
    title: 'KEST',
    type: 'Appointment App',
    desc: 'Kuaför ve berber randevu süreçlerini dijitalleştiren, salon keşfi ve randevu yönetimi sunan mobil uygulama.',
    tags: ['Flutter', 'Mobile', 'Booking'],
    link: '#',
  },
  {
    title: 'Liderform UI',
    type: 'Frontend',
    desc: 'Üyelik, profil ve mobil uyumlu arayüz bileşenleri üzerine modern web/mobil UI geliştirme çalışmaları.',
    tags: ['UI', 'Responsive', 'Frontend'],
    link: '#',
  },
];

const skills = [
  { title: 'Mobile Development', icon: Smartphone, items: ['Flutter', 'Dart', 'State Management', 'Responsive UI', 'App Publishing'] },
  { title: 'Backend & API', icon: Server, items: ['FastAPI', 'REST API', 'OAuth', 'PostgreSQL', 'WebSocket'] },
  { title: 'Frontend & Tools', icon: Code2, items: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'GitHub'] },
];

function Header() {
  const links = ['About', 'Experience', 'Projects', 'Skills', 'Education'];
  return <header className="header">
    <a className="brand" href="#home">&lt; Enes /&gt;</a>
    <nav>
      {links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
    </nav>
    <a className="github" href={profile.github} target="_blank"><ExternalLink size={16}/> GitHub</a>
  </header>;
}

function Hero() {
  return <section id="home" className="hero section">
    <div className="heroText">
      <div className="pill"><span></span> Available for opportunities</div>
      <h1>Hi, I'm <strong>{profile.name}</strong><br/><span>{profile.role}</span></h1>
      <p>{profile.about}</p>
      <div className="actions">
        <a className="btn primary" href={profile.github} target="_blank"><ExternalLink size={18}/> View GitHub</a>
        <a className="btn" href="#projects">See Projects</a>
        <a className="btn ghost" href={`mailto:${profile.email}`}>Contact Me</a>
      </div>
      <div className="stats">{stats.map(([n,l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
    </div>
    <div className="codeCard">
      <div className="window"><i></i><i></i><i></i><span>enes.dart</span></div>
      <pre>{`class Developer {
  final name = "${profile.name}";
  final role = "${profile.role}";
  final skills = ["Flutter", "FastAPI", "AI"];
  var passion = "Shipping useful products";

  void buildSomethingGreat() {
    // Clean UI, strong architecture, real value.
  }
}`}</pre>
    </div>
    <a className="scroll" href="#about">Scroll to explore <ChevronDown size={18}/></a>
  </section>
}

function SectionTitle({num, title, subtitle}) { return <div className="sectionTitle"><span>{num}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div> }

function About() {
  return <section id="about" className="section twoCol">
    <div><SectionTitle num="01" title="A bit about me" />
      <p className="lead">Flutter ile ürün odaklı mobil uygulamalar geliştiriyorum. Arayüz kalitesi, performans, API entegrasyonları ve sürdürülebilir mimari tarafına önem veriyorum.</p>
      <div className="feature"><Smartphone/><div><h3>Mobile Applications</h3><p>Flutter ile modern, hızlı ve kullanıcı dostu uygulama ekranları.</p></div></div>
      <div className="feature"><Server/><div><h3>Backend Integration</h3><p>REST API, socket, auth ve gerçek zamanlı modüllerle uçtan uca ürün akışı.</p></div></div>
      <div className="feature"><Sparkles/><div><h3>AI Supported Workflows</h3><p>İçerik üretimi, otomasyon ve geliştirici üretkenliğini artıran AI araçları.</p></div></div>
    </div>
    <aside className="infoCard">
      <div className="avatar">EK</div>
      <h3>Quick Info</h3>
      <p><b>Name</b><span>{profile.name}</span></p>
      <p><b>Role</b><span>{profile.role}</span></p>
      <p><b>Location</b><span>{profile.location}</span></p>
      <p><b>Email</b><span>{profile.email}</span></p>
    </aside>
  </section>
}

function Experience() { return <section id="experience" className="section"><SectionTitle num="02" title="Work Experience" />
  <div className="timeline">{experiences.map((e,i)=><article className="timelineItem" key={e.title}><div className="dot"></div><div><h3>{e.title}</h3><p className="muted"><BriefcaseBusiness size={15}/> {e.company} · {e.date}</p><p>{e.desc}</p><div className="tags">{e.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div>
</section> }

function Projects() { return <section id="projects" className="section"><SectionTitle num="03" title="Featured Projects" subtitle="Öne çıkan uygulama ve ürün çalışmaları" />
  <div className="grid projects">{projects.map(p=><article className="project" key={p.title}><div className="projectTop"><span>{p.type}</span><a href={p.link}><ArrowUpRight size={18}/></a></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
</section> }

function Skills() { return <section id="skills" className="section"><SectionTitle num="04" title="Core Skills" />
  <div className="grid">{skills.map(s=>{const Icon=s.icon; return <article className="skill" key={s.title}><Icon/><h3>{s.title}</h3><div>{s.items.map(i=><span key={i}>{i}</span>)}</div></article>})}</div>
</section> }

function Education() { return <section id="education" className="section twoCol last">
  <div><SectionTitle num="05" title="Education & Languages" />
    <article className="edu"><GraduationCap/><div><h3>Computer Programming / Software Development</h3><p>Mobile development, web technologies, backend integrations and product-focused software work.</p></div></article>
    <article className="edu"><MapPin/><div><h3>Languages</h3><p>Turkish: Native · English: Professional working proficiency</p></div></article>
  </div>
  <div className="cta"><h2>Let's Build Something Together</h2><p>Yeni ürünler, mobil uygulamalar ve freelance işler için iletişime geçebilirsin.</p><a className="btn primary" href={`mailto:${profile.email}`}><Mail size={18}/> {profile.email}</a></div>
</section> }

function App(){ return <><Header/><main><Hero/><About/><Experience/><Projects/><Skills/><Education/></main><footer>© 2026 {profile.name} · Crafted with passion <span><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></span></footer></> }

createRoot(document.getElementById('root')).render(<App />);
