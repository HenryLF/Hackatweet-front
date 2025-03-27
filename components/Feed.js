import { validateToken } from "../api/users";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Feed.module.css";
import { useEffect } from "react";
import { refreshToken } from "../reducer/user";

const CONNECTION_CHECK_DELAY = 10_000;
const TOKEN_REFRESH_DELAY = 5_000;

export default function Feed() {

  const userToken = useSelector((state) => state.user.value.token);
  const dispatch = useDispatch();
  console.log(userToken);
  useEffect(() => {
    let connectionCheck = setInterval(async () => {
      let validation = await validateToken(userToken);
      if (!validation.result) {
        window.location.assign("/");
      }
    }, CONNECTION_CHECK_DELAY);

    let tokenRegeneration = setInterval(async () => {
      dispatch(refreshToken({ token: userToken }));
      if (!userToken) {
        console.log("no token");
        window.location.assign("/");
      }
    }, TOKEN_REFRESH_DELAY);

    return () => {
      clearInterval(tokenRegeneration);
      clearInterval(connectionCheck);
    };
  });

  return <main></main>;
}
