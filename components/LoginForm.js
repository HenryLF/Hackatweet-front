import { useRef } from "react";
import styles from "../styles/LoginForm.module.css";

export default function LoginForm({ submitTo, visible }) {
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
      <input ref={usernameInput} type="text" className={styles.input}></input>
      <input
        ref={passwordInput}
        type="password"
        className={styles.input}></input>
      <button type="submit" onClick={submitHandle}>
        {" "}
        //METTRE UN B a button, verifier si les deux input et password verifie
        la regex envoyé par Baptiste, mettre en rouge ou mettre un message
        d'info "manque qulque chose." Submit
      </button>
    </div>
  );
}
