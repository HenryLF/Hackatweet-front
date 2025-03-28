import { BACK_URL, headers } from "./config";

export async function fetchTweets() {
  return fetch(BACK_URL + "/tweets").then((r) => r.json(), { headers });
}

export async function fetchTrends() {
  return fetch(BACK_URL + "/tweets/trends").then((r) => r.json(), { headers });
}

export async function fetchHashtags(...hashtags) {
  return fetch(BACK_URL + `/hash/${hashtags.flat().join(",")}`);
}


export async function likeTweet(tweetID, token) {
  return fetch(BACK_URL + "/tweets/like", {
    method: "PUT",
    headers,
    body: JSON.stringify({ tweetID, token }),
  }).then((r) => r.json());
}

export async function unLikeTweet(tweetID, token) {
  return fetch(BACK_URL + "/tweets/unlike", {
    method: "PUT",
    headers,
    body: JSON.stringify({ tweetID, token }),
  }).then((r) => r.json());
}

export async function deleteTweet(tweetID, token ) {
  return fetch(BACK_URL + "/tweets/delete", {
    method: "POST",
    headers,
    body: JSON.stringify({ tweetID, token }),
  }).then((r) => r.json());
}

export async function postTweet({ content, token }) {
  return fetch(BACK_URL + "/tweets/new", {
    method: "POST",
    headers,
    body: JSON.stringify({ content, token }),
  }).then((r) => r.json());
}
