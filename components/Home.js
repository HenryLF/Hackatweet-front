import styles from "../styles/Home.module.css";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../reducer/user";
import LoginForm from "./LoginForm";
import Button from "./Button";

function Home() {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [signInVisible, setSignInVisible] = useState(false);

  const dispatch = useDispatch();
  const isConnected = useSelector((state) => Boolean(state.user.value.token));

  isConnected && window.location.assign("./feed");

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Button onClick={() => setSignUpVisible(!signUpVisible)}>
          Sign Up
        </Button>
        <LoginForm
          submitTo={(form) => dispatch(signUp(form))}
          visible={signUpVisible}
        />
        <Button onClick={() => setSignInVisible(!signInVisible)}>
          Sign In
        </Button>
        <LoginForm
          submitTo={(form) => dispatch(signIn(form))}
          visible={signInVisible}
        />
      </div>
    </main>
  );
}

export default Home;
