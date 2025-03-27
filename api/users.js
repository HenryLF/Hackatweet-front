const BACK_URL = "http://localhost:3000";
const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

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
  