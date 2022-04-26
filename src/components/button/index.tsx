import styles from "./index.module.scss";

interface Props {
  text: string;
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<Props> = ({ text, size = "small" }) => {
  return (
    <>
      {size === "small" ? (
        <button className={styles.button__small}>{text}</button>
      ) : size === "medium" ? (
        <button className={styles.button__medium}>{text}</button>
      ) : (
        <button className={styles.button__large}>{text}</button>
      )}
    </>
  );
};
