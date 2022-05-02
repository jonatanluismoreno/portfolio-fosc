import styles from "./index.module.scss";

/* 
import React, { useEffect, useRef, MutableRefObject } from "react";
export const AboutMeMotion = React.forwardRef((props, ref) => (
  <div ref={rootRef}> Hola </div>
)); 

  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(HTMLDivElement.prototype);
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  */

export const AboutMe = () => {
  return (
    <div className={styles.aboutme}>
      <h1 className={styles.aboutme__title}>About me</h1>
      <div className={styles.aboutme__textcontainer}>
        <span></span>
        <p className={styles.aboutme__description}>
          I'm a Student of the University of Buenos Aires, Argentina. With a
          strong background in programming, I have a strong desire to learn and
          improve my skills. I'm a self-motivated person who is always looking
          for new challenges and opportunities.
        </p>
      </div>
    </div>
  );
};
