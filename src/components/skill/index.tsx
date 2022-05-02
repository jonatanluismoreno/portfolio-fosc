import styles from "./index.module.scss";
import { classNamesFunc } from "classnames-generics";

interface Props {
  image: string;
  title: string;
}

const classNames = classNamesFunc<keyof typeof styles>();

const Skill: React.FC<Props> = ({ image, title }) => {
  return (
    <div className={classNames(styles["skill"])}>
      <img src={image} alt="" className={classNames(styles["skill__image"])} />
      <h4 className={classNames(styles["skill__title"])}>{title} </h4>
    </div>
  );
};

export default Skill;
