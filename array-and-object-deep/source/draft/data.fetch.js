import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

async function getComments(username) {
  try {
    const { data: user } = await axios.get(`${USERS_URL}?username=${username}`);
    const { data: posts } = await axios.get(
      `${POSTS_URL}?userId=${user[0].id}`
    );
    const { data: comments } = await axios.get(
      `${COMMENTS_URL}?postId=${posts[0].id}`
    );
    const { data: usersWithComments } = await axios.get(
      `${USERS_URL}?=email=${comments[0].email}`
    );
    // console.log(user);
    console.log('Comments: ', comments);
  } catch (error) {
    console.log(error.toJSON());
  }
}

getComments('Samantha');

async function getUsers(email) {
  try {
    const { data: users } = await axios.get(`${USERS_URL}?email=${email}`);
    console.log(users);
  } catch (error) {
    console.log(error.toJSON());
  }
}
