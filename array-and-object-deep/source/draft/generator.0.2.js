import axios from 'axios';
// const URL = 'https://jsonplaceholder.typicode.com/users';
// const URL = 'https://jsonplaceholder.typicode.com/posts';
async function getUsers() {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const { data: users } = await axios.get(URL);
  return users;
} // users = [....]

async function* getPostsByUsers(users) {
  if (!Array.isArray(users)) return;
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${URL}?userId=${users[i].id}`);
    yield posts;
  }
}

getUsers()
  .then(async (users) => {
    /* const userIterator = getPostsByUsers(users);
    console.log((await userIterator.next()).value);
    console.log((await userIterator.next()).value); */
    for await (let v of getPostsByUsers(users)) {
      console.log(v.map((data) => data.title));
    }
  })
  .catch((e) => console.log(e));
