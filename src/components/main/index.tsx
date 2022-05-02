import styles from "./index.module.scss";

import programmer from "./../../assets/images/programmer.svg";

export const Main = () => {
  return (
    <section className={styles.mainsection}>
      <div className={styles.mainsection__leftSide}>
        <h3 className={styles.mainsection__subtitle}>FRONTEND DEVELOPER</h3>
        <h1 className={styles.mainsection__title}>Jonatan Moreno</h1>
        <h2 className={styles.mainsection__description}>
          I'm a Frontend Developer with a passion for creating beautiful and
          {"       "}
          <br />
          usable user interfaces.
        </h2>
        <button>Contact Me</button>
      </div>
      <div>
        <img src={programmer} alt="programmer" />
      </div>
    </section>
  );
};
