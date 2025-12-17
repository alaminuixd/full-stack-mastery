import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const { data } = await axios.get(URL);
  /* const result = data.slice(0, 10).map((item) => {
    return {
      userId: item.userId,
      id: item.id,
      title: item.title,
    };
  }); */
  const result = data.slice(0, 5).reduce((acc, cur) => {
    /*  acc[curr.id] = { ...curr };
    delete acc[curr.body]; */
    acc[cur.id] = { ...cur };
    delete acc[cur.id].body;
    return acc;
  }, {});
  return result;
}
getPosts()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
