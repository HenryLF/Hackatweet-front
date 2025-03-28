import { useRef } from "react";
import styles from "../styles/LoginForm.module.css";
import Button from "./Button";

export default function LoginForm({ submitTo, children, visible, close }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  function submitHandle() {
    submitTo({
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    });
  }
  return (
    <div className={styles.main} style={{ display: visible ? "flex" : "none" }}>
      <div className={styles.close} onClick={close}>
        X
      </div>
      <input ref={usernameInput} type="text" className={styles.input}></input>
      <input
        ref={passwordInput}
        type="password"
        className={styles.input}
      ></input>
      <Button type="submit" className={styles.button} onClick={submitHandle}>
        {children}
      </Button>
    </div>
  );
}
