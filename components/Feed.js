import styles from "../styles/Feed.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { logOut, refreshToken } from "../reducer/user";
import { validateToken } from "../api/users";
import { fetchTweets } from "../api/tweets";

import Image from "next/image";
import UserSection from "./UserSection";
import Button from "./Button";
import TweetEditor from "./TweetEditor";
import Tweet from "./Tweet";
import Trends from "./Trends";

const CONNECTION_CHECK_DELAY = 10_000; //10 seconds
const TOKEN_REFRESH_DELAY = 1_200_000; //20 minutes

export default function Feed() {
  const { username, token } = useSelector((state) => state.user.value);
  const [tweetList, setTweetList] = useState([]);
  const dispatch = useDispatch();

  async function getTweets() {
    let jsonData = await fetchTweets();
    jsonData.result && setTweetList(jsonData.data);
  }

  useEffect(() => {
    //check if userIsStillConnected
    getTweets();
    let connectionCheck = setInterval(async () => {
      let validation = await validateToken(token);
      if (!validation.result) {
        //redirect to home
        window.location.assign("/");
        return;
      }
      await getTweets();
    }, CONNECTION_CHECK_DELAY);
    //regenerate token
    let tokenRegeneration = setInterval(async () => {
      dispatch(refreshToken({ token: token }));
      if (!token) {
        window.location.assign("/");
      }
    }, TOKEN_REFRESH_DELAY);
    //on unmount clear interval
    return () => {
      clearInterval(tokenRegeneration);
      clearInterval(connectionCheck);
    };
  }, []); // [] : run on mount only

  function logOutHandle() {
    dispatch(logOut());
    window.location.assign("/");
  }
  const tweets = tweetList.map((data, i) => <Tweet key={i} data={data} />);
  return (
    <main className={styles.main}>
      <div className={styles.pannel} style={{ backgroundColor: "red" }}>
        <Image src="/logoX.png" height={100} width={100} alt="logo" />
        <div className={styles.pannel}>
          <UserSection username={username} />
          <Button onClick={logOutHandle}> Logout</Button>
        </div>
      </div>
      <div className={styles.feed} style={{ backgroundColor: "blue" }}>
        <TweetEditor token={token}></TweetEditor>
        <div className={styles.tweetContainer}>{tweets}</div>
      </div>
      <div className={styles.trends} style={{ backgroundColor: "green" }}>
        <h2>Trends</h2>
        <Trends />
      </div>
    </main>
  );
}
