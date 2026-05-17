import styles from './Research.module.css';

const items = [
  {
    title: 'Data Analysis using R and Python',
    where: 'Academic Research Project',
    description:
      'Ran and modified R and Python scripts to generate statistical outputs from raw data. Produced plots and extracted computed values using existing libraries, then documented everything for the faculty team.',
  },
  {
    title: 'Technical Exploration — Website Usability',
    where: 'Navjyoti India Foundation',
    description:
      'Reviewed the website structure to find usability and content gaps. Explored basic frontend techniques to improve layout, readability and navigation, and documented recommendations for the team.',
  },
];

export default function Research() {
  return (
    <section id="research" className={styles.research}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>— research experience —</span>
          <h2 className={styles.title}>Research</h2>
        </div>

        <div className={styles.list}>
          {items.map(item => (
            <div key={item.title} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemWhere}>{item.where}</div>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
