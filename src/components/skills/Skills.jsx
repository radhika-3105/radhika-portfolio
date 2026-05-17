import styles from './Skills.module.css';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'JavaScript', 'DSA'],
  },
  {
    title: 'Competitive Programming',
    skills: ['LeetCode', 'GeeksForGeeks', '500+ Problems Solved'],
  },
  {
    title: 'Web & Dev',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Git', 'REST APIs'],
  },
  {
    title: 'Python Libraries',
    skills: ['NumPy', 'SciPy', 'pandas', 'matplotlib'],
  },
  {
    title: 'OCR & NLP',
    skills: ['Tesseract OCR', 'Azure OCR', 'NLP Pipelines'],
  },
  {
    title: 'Simulation & EDA',
    skills: ['MATLAB', 'LTspice'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>— what I work with —</span>
          <h2 className={styles.title}>Skills</h2>
        </div>

        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.title} className={styles.card}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.chips}>
                {group.skills.map(skill => (
                  <span key={skill} className={styles.chip}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
