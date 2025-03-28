import { useRef, useState } from "react";
import styles from "../styles/TweetEditor.module.css";
import Button from "./Button";
import { postTweet } from "../api/tweets";

export default function TweetEditor({ token }) {
  const [tweetText, setTweetText] = useState("");
  const tweetContent = useRef(null);
  function clickHandle() {
    postTweet({ token, content: tweetText });
    tweetContent.current.value = "";
    setTweetText("");
  }
  async function changeHandle(event) {
    event.target.value = event.target.value.slice(0, 280);
    setTweetText(event.target.value);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Home</h1>
      <textarea
        className={styles.textarea}
        onChange={changeHandle}
        ref={tweetContent}
      ></textarea>
      <div className={styles.container}>
        <span className={styles.count}>{tweetText.length}/280</span>
        <Button type="tweet" className={styles.publish} onClick={clickHandle}>
          Tweet
        </Button>
      </div>
    </div>
  );
}
