import styles from './Marquee.module.css';

const phrase = "ECE Undergrad  ·  NSUT Delhi  ·  Full Stack Dev  ·  NLP Pipelines  ·  Signal Processing  ·  Arduino  ·  SIH 2025 Finalist  ·  WiSH ’26 Mentee  ·  ";

export default function Marquee() {
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        <span className={styles.text}>{phrase}</span>
        <span className={styles.text}>{phrase}</span>
      </div>
    </div>
  );
}
