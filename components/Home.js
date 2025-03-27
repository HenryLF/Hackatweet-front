import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

import Hashtag from "./Hashtag";
import LastTweets from "./LastTweets"; //liste des tweets
import Trend from "./Trends"; //affichage des tendances
import UserInfo from "./UserInfo"; //affichage des infos utilisateur
import Tweet from "./Tweet"; //composant pr un seul tweet
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../reducer/userToken";

useState;

function Home() {
  //utilisateur connecté
  const currentUser = {
    id: "userJoe",
    name: "Joe Doe",
  };

  // Liste de tweet
  const [tweets, setTweets] = useState([
    {
      id: 1,
      text: "Hello world #hello",
      userId: "userJoe",
      userName: "Joe Doe",
      likes: 10,
    },
  ]);

  // Liste des tendances
  const [trends, setTrends] = useState([
    { hashtag: "#hello", count: 20 },
    { hashtag: "#goodbye", count: 15 },
    { hashtag: "#capsule", count: 10 },
  ]);

  // Fonction pour liker un tweet
  const likeTweet = (tweetId, isLiked) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, likes: isLiked ? tweet.likes + 1 : tweet.likes - 1 }
          : tweet
      )
    );
  };

  // Fonction pour supprimer un tweet
  const deleteTweet = (tweetId) => {
    setTweets(tweets.filter((tweet) => tweet.id !== tweetId));
  };
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.userToken.value);
  useEffect(() => {
    console.log(getUser);
  }, [getUser]);

  return (
    <div className={styles.homepage}>
      <div id="zubtest">
        <button
          onClick={() =>
            dispatch(signUp({ username: "Fredy", password: "mamaououou" }))
          }
        >
          SU
        </button>
        <button
          onClick={() =>
            dispatch(signIn({ username: "Fredy", password: "mamaououou" }))
          }
        >
          SI
        </button>
        <span>
          {getUser.username}; {getUser.token}{" "}
        </span>
      </div>
      <div className={styles.leftSection}>
        Joe Doe
        <UserInfo currentUser={currentUser} />
      </div>

      <div className={styles.middleSection}>
        <LastTweets
          tweets={tweets}
          currentUser={currentUser}
          likeTweet={likeTweet}
          deleteTweet={deleteTweet}
        />
      </div>

      <div className={styles.rightSection}>
        <Trend trends={trends} />
      </div>
    </div>
  );
}

//     <div>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>
//       </main>
//     </div>
//   );
// }

export default Home;
