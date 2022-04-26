import styles from "./index.module.scss";

import figmaproject from "./../../assets/images/figmaproject.jpeg";
import fruttiproject from "./../../assets/images/fruttiproject.jpeg";

import { Button } from "./../button/index";

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>
      <div className={styles.projects__maincontainer}>
        <div className={styles.projects__container}>
          <div className={styles.project}>
            <img src={fruttiproject} alt="" className={styles.project__image} />
            <div className={styles.project__bottoncontainer}>
              <span className={styles.project__line}></span>
              <h3 className={styles.project__title}>TITLE PROJECT</h3>
              <div className={styles.project__technologies}>
                <button className={styles.project__tech}>JAVASCRIPT</button>
                <button className={styles.project__tech}>TYPESCRIPT</button>
                <button className={styles.project__tech}>REACT</button>
                <button className={styles.project__tech}>SASS</button>
                <button className={styles.project__tech}>FIREBASE</button>
              </div>
              <p className={styles.project__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                sit aspernatur quos voluptates repudiandae
              </p>
            </div>
          </div>
          <div className={styles.project}>
            <img src={figmaproject} alt="" className={styles.project__image} />
            <div className={styles.project__bottoncontainer}>
              <span className={styles.project__line}></span>
              <h3 className={styles.project__title}>TITLE PROJECT</h3>
              <div className={styles.project__technologies}>
                <button className={styles.project__tech}>JAVASCRIPT</button>
                <button className={styles.project__tech}>TYPESCRIPT</button>
                <button className={styles.project__tech}>REACT</button>
                <button className={styles.project__tech}>SASS</button>
              </div>
              <p className={styles.project__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                sit aspernatur quos voluptates repudiandae
              </p>
            </div>
          </div>
        </div>
        <div className={styles.projects__buttoncontainer}>
          <Button text="SEE ALL PROJECTS" size="large" />
        </div>
      </div>
    </section>
  );
};
