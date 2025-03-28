import Image from "next/image";
import styles from "../styles/UserSection.module.css";
import ProfilePicture from "./ProfilePicture";

export default function UserSection({ username }) {
  return (
    <div className={styles.main}>
      
      <ProfilePicture/>
      <div>
        <h3 className={styles.username}>{username}</h3>
        <span className={styles.handle}> @{username} </span>
      </div>
    </div>
  );
}
