import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.nameRow}>
            <span className={styles.pill}>Hello there I'm</span>

            <div className={styles.name}>
              <div className={styles.first}>Radhika</div>
              <div className={styles.last}>Chopra</div>
            </div>
          </div>

          <div className={styles.bio}>
            <p>
              I'm an ECE undergraduate at NSUT working at the intersection of software, hardware, and
              communication systems. I enjoy building practical technology that combines programming, embedded systems, signal
              processing, and user-focused design.
            </p>

            <p>
              My experience spans full-stack development, AI-powered OCR/NLP pipelines, circuit simulation, Arduino-based
              prototyping, and real-world problem solving. I'm a Smart India Hackathon 2025 Finalist and a WiSH '26
              Mentee at Texas Instruments.
            </p>
          </div>

          <div className={styles.chips}>
            <span className={styles.chip}>NSUT 2024–2028</span>
            <span className={styles.chip}>ECE Undergraduate</span>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/radhika-3105" target="_blank" rel="noreferrer">
              github.com/radhika-3105
            </a>
            <a
              href="https://linkedin.com/in/radhika-chopra-50536b30a/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/radhika-chopra-50536b30a/
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <a className={styles.aboutBtn} href="#about">
            about me
          </a>

          <div className={styles.photoCard}>
            <div className={`${styles.tape} ${styles.tapeTop}`} />

            <img
              className={styles.bigPhoto}
              src="/images/big.jpg"
              alt="Radhika portrait"
            />

            <div className={`${styles.sparkle} ${styles.sparkleLeft}`} />
            <div className={`${styles.tape} ${styles.tapeBottom}`} />
          </div>

          <div className={styles.polaroid}>
            <div className={styles.clip} />
            <img
              src="/images/polaroid.jpg"
              alt="Radhika polaroid"
              className={styles.polaroidImg}
            />
          </div>

          <div className={styles.labels}>
            <span className={`${styles.label} ${styles.label1}`}>engineering student</span>
            <span className={`${styles.label} ${styles.label2}`}>tech &amp; systems builder</span>
          </div>
        </div>
      </div>

      {/* Scroll to know more */}
      <div className={styles.scrollIndicator}>
        <span>scroll to know more</span>
        <div className={styles.scrollArrow}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
