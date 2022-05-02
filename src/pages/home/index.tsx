import styles from "./Home.module.scss";
import { classNamesFunc } from "classnames-generics";

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { AboutMe } from "../../components/aboutme";
import { Projects } from "../../components/projects";
import { Skills } from "../../components/skills";
import { Footer } from "../../components/footer";

import arrowscroll from "../../assets/images/arrowscroll.svg";

const classNames = classNamesFunc<keyof typeof styles>();

const Home = () => {
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

export default Home;
