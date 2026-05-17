import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum} aria-hidden="true">01</span>
          <span className={styles.tag}>— get to know me —</span>
          <h2 className={styles.title}>A little about me</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.textCol}>
            <p className={styles.para}>
              I&apos;m Radhika Chopra, a second-year ECE student at NSUT, Delhi, building at the
              intersection of software, embedded systems, and communication engineering. I work with
              Python, C++, JavaScript, MATLAB, and modern web tools to turn technical ideas into
              practical systems that are usable, tested, and grounded in real problems.
            </p>
            <p className={styles.para}>
              My work spans full-stack development, OCR/NLP pipelines, signal-processing experiments,
              circuit simulation, and Arduino/ESP32-based prototyping. I was a Smart India Hackathon
              2025 Finalist and I&apos;m currently a WiSH&nbsp;&apos;26 Mentee at Texas Instruments,
              where I&apos;m learning from industry exposure beyond the classroom.
            </p>
            <p className={styles.para}>
              Alongside technical work, I contribute to community-focused initiatives, wherein I
              volunteered with Navjyoti India Foundation and shared website usability recommendations.
              I also practice competitive programming on LeetCode and keep exploring new domains across
              software, hardware, and applied engineering.
            </p>

            <div className={styles.eduCard}>
              <div className={styles.eduLeft}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
                </svg>
              </div>
              <div>
                <div className={styles.eduTitle}>B.Tech — Electronics &amp; Communication Engineering</div>
                <div className={styles.eduSub}>Netaji Subhas University of Technology (NSUT), New Delhi</div>
                <div className={styles.eduYear}>2024 – 2028 &nbsp;|&nbsp; CGPA: 8.33 / 10</div>
              </div>
            </div>

            <div className={styles.wishBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              WiSH &apos;26 Mentee at Texas Instruments
            </div>
          </div>

          <div className={styles.statsCol}>
            {[
              { num: '8.33', label: 'CGPA' },
              { num: 'WiSH', label: "'26 Mentee at TI" },
              { num: 'SIH', label: '2025 Finalist' },
            ].map(({ num, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statNum}>{num}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
