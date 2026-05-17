import styles from './Projects.module.css';

const techProjects = [
  {
    title: 'Sangha : Digital Heritage Platform for Sikkim Monasteries',
    description:
      'Built role-based user and admin interfaces for a platform that digitizes Sikkim monastery manuscripts. Created an OCR processing pipeline from raw to cleaned to validated, tested Azure OCR vs Tesseract for Tibetan scripts, and debugged deployment issues during a 36-hour national hackathon.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Tesseract OCR'],
    github: 'https://github.com/radhika-3105',
  },
  {
    title: 'ResolveIndiaAI : Multilingual Complaint Resolution Chatbot',
    description:
      'A Python NLP pipeline that figures out what a user is complaining about across multiple Indian languages and routes it to the right department automatically with a unique complaint ID. Built to be modular so new languages and departments can be plugged in easily.',
    tech: ['Python', 'NLP', 'Email Routing', 'Multilingual'],
    github: 'https://github.com/Aktagh1234/grievancesbot',
  },
  {
    title: 'Rail Kavach : Railway Safety and Monitoring System',
    description:
      'A GovTech hackathon project to detect and report safety incidents on railway tracks and stations. Designed alert workflows that connect field reports to control rooms and response teams, with a focus on making it actually usable for railway staff on the ground.',
    tech: ['GovTech Hackathon', 'Safety Systems', 'Alert Workflows'],
    github: 'https://github.com/radhika-3105',
  },
];

const coreProjects = [
  {
    title: 'FM Receiver & Transmitter System',
    tag: 'Communication Engineering Course Project',
    description:
      'Built an FM transmitter circuit to wirelessly stream music to a phone\'s FM receiver. Tuned the transmission frequency within the FM band and demonstrated live audio playback, validating core FM modulation concepts.',
    tech: ['FM Modulation', 'Circuit Design', 'Hardware', 'Signal Processing'],
    github: null,
  },
  {
    title: 'Interactive Solar System Model',
    tag: 'Electronic Design Workshop',
    description:
      'Designing an interactive solar system model using Arduino, LEDs and a custom PCB layout with 3D modelled mechanical components. Writing Arduino (C/C++) firmware for LED control and embedded logic, working end-to-end from schematic design to PCB fabrication.',
    tech: ['Arduino', 'C/C++', 'PCB Design', 'LTspice', '3D Modelling'],
    github: null,
  },
];

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      {project.tag && <div className={styles.cardTag}>{project.tag}</div>}
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.techChips}>
        {project.tech.map(t => (
          <span key={t} className={styles.techChip}>{t}</span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.githubBtn}
        >
          View on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum} aria-hidden="true">03</span>
          <span className={styles.tag}>— things I&apos;ve built —</span>
          <h2 className={styles.title}>Projects</h2>
        </div>

        <div className={styles.subSection}>
          <h3 className={styles.subHeading}>Tech Projects</h3>
          <div className={styles.grid}>
            {techProjects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>

        <div className={styles.subSection}>
          <h3 className={styles.subHeading}>Core ECE Projects</h3>
          <div className={styles.grid}>
            {coreProjects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
