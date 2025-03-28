import Image from "next/image";
import styles from "../styles/UserSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducer/user";
import Button from "./Button";

export default function UserSection() {
  const username = useSelector((state) => state.user.value.username);
  const dispatch = useDispatch();

  function logOutHandle() {
    dispatch(logOut());
    window.location.assign("/")
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Image
          src="/profile.png"
          width={100}
          height={100}
          alt="profile picture"
          className={styles.profile}
        />
        <div>
          <h3 className={styles.username}>{username}</h3>
          <p className={styles.handle}> @{username} </p>
        </div>
      </div>
      <Button onClick={logOutHandle}>Logout</Button>
    </div>
  );
}
