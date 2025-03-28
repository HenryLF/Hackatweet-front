import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ProfilePicture from "./ProfilePicture";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Tweet({ data }) {
  return (
    <div className={styles.main}>
      <div className={styles.userContainer}>
        <ProfilePicture />
        <p>
          <span className={styles.username}>{data.author}</span>
          <span className={styles.handle}> @{data.author}</span>-{" "}
          <span className={styles.time}>{data.createdAt}</span>
        </p>
      </div>
      <p className={styles.tweetContent}>{data.content}</p>
      <div className={styles.actionContainer}>
        <div>Coeur</div> 
        {data.likedBy?.length}
        <div>Trash</div>
      </div>
    </div>
  );
}
