import {User, Post} from './model';

import {fetchData} from './apiUtils'

async function getUser(userId: number) {
  const user = await 
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  return user;

}

async function getPostsByUser(userId :number) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)

  return user
}

export{getUser , getPostsByUser};
console.log(getUser(1));
console.log(getPostsByUser(1));