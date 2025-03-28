import { useEffect, useState } from "react";
import styles from "../styles/Trends.module.css";
import { fetchTrends } from "../api/tweets";

const TRENDS_UPDATE_DELAY = 20_000;

export default function Trends() {
  const [trendsList, setTrendsList] = useState([]);

  async function getTrends() {
    let jsonData = await fetchTrends();
    jsonData.result && setTrendsList(jsonData.data);
  }

  useEffect(() => {
    let updateTrends = setInterval(getTrends, TRENDS_UPDATE_DELAY);
    return () => clearInterval(updateTrends);
  }, []);

  console.log(trendsList);
  const trends = trendsList.map((trend, id) => (
    <div key={id} className={styles.trend}>
      {trend.hashtag} {trend.count}
    </div>
  ));

  return <div className={styles.main}>{trends}</div>;
}
