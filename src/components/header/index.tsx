import styles from "./index.module.scss";

import { Button } from "./../button/index";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__leftSide}>
        <button className={styles.button__noBorder}>Home</button>
      </div>
      <div className={styles.header__rightSide}>
        <button className={styles.button__noBorder}>Projects</button>
        <Button text="About" />
      </div>
    </header>
  );
};
