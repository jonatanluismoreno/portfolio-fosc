import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import gmail from "./../../assets/images/gmailicon.svg";
import linkedin from "./../../assets/images/linkedinicon.svg";
import github from "./../../assets/images/githubicon.svg";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__socialmedia__container}>
        <Link to={"mailto:jonatanluismoreno@gmail.com"}>
          <div className={styles.footer__socialmedia}>
            <img
              src={gmail}
              alt=""
              className={styles.footer__socialmedia__image}
            />
            <h4 className={styles.footer__socialmedia__title}>GMAIL</h4>
          </div>
        </Link>
        <Link to="/github">
          <div className={styles.footer__socialmedia}>
            <img
              src={linkedin}
              alt=""
              className={styles.footer__socialmedia__image}
            />
            <h4 className={styles.footer__socialmedia__title}>LINKEDIN</h4>
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/jonatan-moreno-39651b215/">
          <div className={styles.footer__socialmedia}>
            <img
              src={github}
              alt=""
              className={styles.footer__socialmedia__image}
            />
            <h4 className={styles.footer__socialmedia__title}>GITHUB</h4>
          </div>
        </Link>
      </div>
      <div className={styles.footer__links}>
        <a href="" className={styles.footer__link}>
          Projects
        </a>
        <a href="" className={styles.footer__link}>
          Contact
        </a>
      </div>
      <h4 className={styles.footer__title}>Frontend Developer</h4>
    </section>
  );
};
