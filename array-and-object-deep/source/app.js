import axios from 'axios';
// const URL = 'https://jsonplaceholder.typicode.com/users';
// const URL = 'https://jsonplaceholder.typicode.com/posts';
async function getUsers() {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const { data: users } = await axios(URL);
  return users;
}

async function* getUsersById(users) {
  if (!Array.isArray(users)) return;
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios(`${URL}?userId=${users[i].id}`);
    yield posts;
  }
}

getUsers().then(async (users) => {
  const dataById = getUsersById(users);
  /*   console.log(await dataById.next());
  console.log(await dataById.next()); */
  for await (let data of dataById) {
    //console.log(data.map((v) => v.id));
  }
});

function titlesByusers(users) {
  const titles = [];
  getUsers()
    .then(async (users) => {
      const usersById = getUsersById(users);
      for await (let users of usersById) {
        users.map((user) => console.log(user.title));
      }
    })
    .catch((e) => console.log(e));
  return titles;
}
titlesByusers(getUsers);
