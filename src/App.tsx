import React, { useState } from "react";
import styles from "./App.module.scss";
import { classNamesFunc } from "classnames-generics";

import arrowscroll from "./assets/images/arrowscroll.svg";

import { Header } from "./components/header/index";
import { Main } from "./components/main/index";
import { AboutMe } from "./components/aboutme/index";
import { Projects } from "./components/projects/index";
import { Skills } from "./components/skills/index";
import { Footer } from "./components/footer/index";

const classNames = classNamesFunc<keyof typeof styles>();
interface Props {}

const Application: React.FC<Props> = ({}) => {
  const goToAboutMe = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  return (
    <div className={classNames(styles["app"])}>
      <Header />
      <Main />
      <img
        src={arrowscroll}
        alt="scroll down"
        className={styles.app__arrowscroll}
        onClick={goToAboutMe}
      />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Application;
// FIREBASE
