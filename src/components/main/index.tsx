import styles from "./index.module.scss";

import programmer from "./../../assets/images/programmer.svg";

export const Main = () => {
  return (
    <section className={styles.mainsection}>
      <div className={styles.mainsection__leftSide}>
        <h3 className={styles.mainsection__subtitle}>FRONTEND DEVELOPER</h3>
        <h3 className={styles.mainsection__title}>Jonatan Moreno</h3>
        <h3 className={styles.mainsection__description}>
          I'm a Frontend Developer with a passion for creating beautiful and
          usable user interfaces.
        </h3>
        <button className={styles.mainsection__button}>Contact Me</button>
      </div>
      <div>
        <img src={programmer} alt="programmer" />
      </div>
    </section>
  );
};
