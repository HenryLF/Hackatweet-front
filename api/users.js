import { BACK_URL, headers } from "./config";

export async function requestSignUp(username, password) {
  return fetch(BACK_URL + "/users/signup", {
    method: "POST",
    headers,
    body: JSON.stringify({ username, password }),
  }).then((r) => r.json());
}

export async function requestSignIn(username, password) {
  return fetch(BACK_URL + "/users/signin", {
    method: "POST",
    headers,
    body: JSON.stringify({ username, password }),
  }).then((r) => r.json());
}

export async function requestNewToken(token) {
  return fetch(BACK_URL + "/users/renew", {
    method: "POST",
    headers,
    body: JSON.stringify({ token }),
  }).then((r) => r.json());
}

export async function validateToken(token) {
  return fetch(BACK_URL + "/users/validate", {
    method: "POST",
    headers,
    body: JSON.stringify({ token }),
  }).then((r) => r.json());
}