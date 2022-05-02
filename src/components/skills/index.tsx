import styles from "./index.module.scss";
import { classNamesFunc } from "classnames-generics";
const classNames = classNamesFunc<keyof typeof styles>();

import javascript from "./../../assets/images/javascripticon.svg";
import typescript from "./../../assets/images/typescripticon.svg";
import react from "./../../assets/images/reactjsicon.svg";
import git from "./../../assets/images/giticon.svg";
import sass from "./../../assets/images/sass.png";
import firebase from "./../../assets/images/firebaseicon.svg";
import docker from "./../../assets/images/dockericon.svg";
import styledcomponent from "./../../assets/images/styledcomponents.svg";

export const Skills = () => {
  return (
    <section className={classNames(styles["skills"])}>
      <h1 className={classNames(styles["skills__title"])}>Skills</h1>
      <div className={classNames(styles["skills__container"])}>
        <div className={classNames(styles["skill"])}>
          <img
            src={javascript}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>JAVASCRIPT</h4>
        </div>
        <div className={classNames(styles["skill"])}>
          <img
            src={typescript}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>TYPESCRIPT</h4>
        </div>
        <div className={classNames(styles["skill"])}>
          <img
            src={react}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>REACT JS</h4>
        </div>
        <div className={classNames(styles["skill"])}>
          <img
            src={git}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>GIT</h4>
        </div>
      </div>
      <div className={classNames(styles["skills__container"])}>
        <div className={classNames(styles["skill"])}>
          <img
            src={sass}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>SASS</h4>
        </div>
        <div className={classNames(styles["skill"])}>
          <img
            src={firebase}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>FIREBASE</h4>
        </div>
        <div className={classNames(styles["skill"])}>
          <img
            src={styledcomponent}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>
            STYLED <br /> COMPONENTS
          </h4>
        </div>
        <div className={classNames(styles["skill"])}>
          <img
            src={docker}
            alt=""
            className={classNames(styles["skill__image"])}
          />
          <h4 className={classNames(styles["skill__title"])}>DOCKER</h4>
        </div>
      </div>
    </section>
  );
};
