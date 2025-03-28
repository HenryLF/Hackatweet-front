import { validateToken } from "../api/users";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Feed.module.css";
import { useEffect } from "react";
import { refreshToken } from "../reducer/user";

const CONNECTION_CHECK_DELAY = 10_000; //10 seconds
const TOKEN_REFRESH_DELAY = 1_200_000; //20 minutes

export default function Feed() {
  const userToken = useSelector((state) => state.user.value.token);
  const dispatch = useDispatch();
  
  useEffect(() => {
    //check if userIsStillConnected
    let connectionCheck = setInterval(async () => {
      let validation = await validateToken(userToken);
      if (!validation.result) {
        //redirect to home
        window.location.assign("/");
      }
    }, CONNECTION_CHECK_DELAY);
    //regenerate token
    let tokenRegeneration = setInterval(async () => {
      dispatch(refreshToken({ token: userToken }));
      if (!userToken) {
        window.location.assign("/");
      }
    }, TOKEN_REFRESH_DELAY);
    //on unmount clear interval
    return () => {
      clearInterval(tokenRegeneration);
      clearInterval(connectionCheck);
    };
  }, []); // [] : run on mount only

  return <main></main>;
}
