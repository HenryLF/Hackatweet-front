import { useSelector } from "react-redux";
import styles from "../styles/Tweet.module.css";
import ProfilePicture from "./ProfilePicture";
import Image from "next/image";
import { useState } from "react";
import { deleteTweet, likeTweet, unLikeTweet } from "../api/tweets";

function getTimeAgo(date) {
  date = new Date(date);
  let timeDelta = Math.floor((Date.now() - date.getTime()) / 60_000);
  if (timeDelta < 0) {
    return "Train left allready.";
  }
  return timeDelta < 60
    ? `${timeDelta} minutes`
    : timeDelta < 1_440 //60*24
      ? `${Math.floor(timeDelta / 60)} hour(s)`
      : `${Math.floor(timeDelta / 1_440)} day(s)`;
}

export default function Tweet({ data }) {
  const { username, token } = useSelector((state) => state.user.value);
  const owner = username == data.author;

  const [liked, setLiked] = useState(
    data.likedBy.some((e) => e.username == username)
  );

  async function likeHandle() {
    let jsonData;
    liked
      ? (jsonData = await unLikeTweet(data.tweetID, token))
      : (jsonData = await likeTweet(data.tweetID, token));
    liked
      ? (data.likedBy = data.likedBy.filter((e) => e.username != username))
      : data.likedBy.push(username);
    jsonData.result && setLiked(!liked);
  }

  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        <ProfilePicture />
        <span className={styles.username}>{data.author}</span>
        <span className={styles.handle}> @{data.author}</span>
        <span className={styles.time}>{getTimeAgo(data.createdAt)} ago</span>
      </div>
      <p className={styles.tweetContent}>{data.content}</p>
      <div className={styles.actionContainer}>
        <Image
          onClick={likeHandle}
          src="/like.svg"
          className={liked ? styles.liked : styles.unliked}
          width={25}
          height={25}
        />
        {data.likedBy?.length}
        {owner && (
          <Image
            onClick={() => deleteTweet(data.tweetID, token)}
            className={styles.trash}
            src="/trash.svg"
            width={25}
            height={25}
          />
        )}{" "}
      </div>
    </div>
  );
}
