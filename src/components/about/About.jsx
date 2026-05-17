import styles from "./about.module.css";

const highlights = [
  { label: "SIH 2025 Finalist", sub: "Smart India Hackathon" },
  { label: "WiSH '26 Mentee", sub: "Texas Instruments" },
  { label: "Navjyoti India", sub: "Community Volunteer" },
  { label: "LeetCode", sub: "Competitive Programming" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.script}>get to know me</span>
          <div className={styles.rule} />
        </div>

        <div className={styles.grid}>
          <div className={styles.body}>
            <p>
              I'm a second-year ECE student at NSUT, Delhi, building at the
              intersection of software, embedded systems, and communication
              engineering. I work with Python, C++, JavaScript, MATLAB, and
              modern web tools to turn technical ideas into practical systems
              that are usable, tested, and grounded in real problems.
            </p>

            <p>
              My work spans full-stack development, OCR/NLP pipelines,
              signal-processing experiments, circuit simulation, and
              Arduino/ESP32-based prototyping. I was a Smart India Hackathon
              2025 Finalist and I'm currently a WiSH&nbsp;'26 Mentee at Texas
              Instruments, where I'm learning from industry exposure beyond the
              classroom.
            </p>

            <p>
              Alongside technical work, I contribute to community-focused
              initiatives — I volunteered with Navjyoti India Foundation and
              shared website usability recommendations. I also practice
              competitive programming on LeetCode and keep exploring new domains
              across software, hardware, and applied engineering.
            </p>
          </div>

          <div className={styles.highlights}>
            {highlights.map(({ label, sub }) => (
              <div key={label} className={styles.card}>
                <span className={styles.cardLabel}>{label}</span>
                <span className={styles.cardSub}>{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
