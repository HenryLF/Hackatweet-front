import { useEffect, useState } from "react";
import styles from "../styles/Trends.module.css";
import { fetchTrends } from "../api/tweets";

const UPDATE_TRENDS_DELAY = 3_000; // 20 sec

export default function Trends() {
  const [trendList, setTrendList] = useState([]);

  async function getTrends() {
    let jsonData = await fetchTrends();
    jsonData.result && setTrendList(jsonData.data);
  }
  useEffect(() => {
    let updateTrends = setInterval(getTrends, UPDATE_TRENDS_DELAY);
    return () => {
      clearInterval(updateTrends);
    };
  }, []);
  const trends = trendList.map((trend, id) => (
    <div key={id} className={`${styles.trend} ${styles.block}`}>
      <span className={styles.hashtag}>{trend.hashtag}</span>
      <span className={styles.count}>{trend.count}</span>
    </div>
  ));
  console.log(trends);

  return <div className={styles.main}>{trends}</div>;
}
