import api from "./client";
const getNews = () => {
  return api.get(
    "top-headlines?country=id&apiKey=f7f6bf2ff6b547bfad9fd4f0ec28e015"
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=f7f6bf2ff6b547bfad9fd4f0ec28e015`);
};
export default {
  getNews,
  searchedNews,
};
