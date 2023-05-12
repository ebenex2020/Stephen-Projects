import axios from "axios";

const KEY = "AIzaSyDWsUIcJp06MLYYiwXxrhKtr8HQ1cwkXwU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
