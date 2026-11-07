import React from "react";

/*
 *GET:
 *POST:
 *UPDATE: Put Patch
 *DELETE:
 */

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};


const getPosts3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");


  if (!res.ok) {
    throw new Error("Fail to Fetch posts");
  }

  //   if(res.ok) {
  //     return res.json();
  //   }
  return res.json();
};


const getPosts2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    throw new Error("Fail to Fetch posts");
  }
};


// const PostsPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();

// };


const PostPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();

  //   const posts = await PostsPromise();

  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h2>Hello POST: {posts.length} </h2>
    </div>
  );
};

export default PostPage;
