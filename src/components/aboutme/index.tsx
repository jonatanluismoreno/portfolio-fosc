import styles from "./index.module.scss";

export const AboutMe = () => {
  return (
    <section className={styles.aboutme}>
      <h1 className={styles.aboutme__title}>About me</h1>
      <div className={styles.aboutme__textcontainer}>
        <span className={styles.aboutme__line}></span>
        <p className={styles.aboutme__description}>
          I'm a Student of the University of Buenos Aires, Argentina. With a
          strong background in programming, I have a strong desire to learn and
          improve my skills. I'm a self-motivated person who is always looking
          for new challenges and opportunities.
        </p>
      </div>
    </section>
  );
};
