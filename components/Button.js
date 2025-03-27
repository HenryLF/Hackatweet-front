import styles from "../styles/Button.module.css";

export default function Button({ onClick, type = "button", children }) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
