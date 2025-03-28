import Image from "next/image";
import styles from "../styles/ProfilePicture.module.css";

export default function ProfilePicture({ src = "/profile.png" }) {
  return (
    <Image
      src="/profile.png"
      width={100}
      height={100}
      alt="profile picture"
      className={styles.profile}
    />
  );
}
