import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let TOKEN = "";

try {
  if (JSON.parse(localStorage.getItem("persist:root")).user !== null) {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.token;
  }
} catch (err) {}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
