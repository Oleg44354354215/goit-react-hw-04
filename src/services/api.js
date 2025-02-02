import axios from "axios";

const userKey = "DVhyUpULa_asqB0IHmUk_LbciVTypqAl9jtH5A-fjy4";
export const fetchDate = async (query, page) => {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${userKey}&query=${query}&page=${page}&per_page=20`
  );
  return res.data.results;
};
