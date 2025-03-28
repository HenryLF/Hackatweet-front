import styles from "../styles/Button.module.css";

export default function Button({
  onClick,
  className,
  type = "button",
  children,
}) {
  return (
    <button
      type={type}
      className={[styles.button, className].join(" ")}
      onClick={onClick}>
      {children}
    </button>
  );
}
