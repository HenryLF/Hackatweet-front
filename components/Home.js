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
      <img src="./logoX.png" alt="logo du site" />

      {!signInVisible && !signUpVisible && (
        <>
          <h1>See what's happening</h1>
          <h2> Join Hackatweet today. </h2>
          <div className={styles.container}>
            <Button
              onClick={() => setSignUpVisible(true)}
              className={styles.buttonSignUP}
            >
              Sign Up
            </Button>
            <h3>Already have an account?</h3>

            <Button
              onClick={() => setSignInVisible(true)}
              className={styles.buttonSignIN}
            >
              Sign In
            </Button>
          </div>
        </>
      )}

      <LoginForm
        submitTo={(form) => dispatch(signUp(form))}
        close={() => setSignUpVisible(false)}
        visible={signUpVisible}
      />
      <LoginForm
        submitTo={(form) => dispatch(signIn(form))}
        close={() => setSignInVisible(false)}
        visible={signInVisible}
      />
    </main>
  );
}

export default Home;
