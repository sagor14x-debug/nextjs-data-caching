import { json } from 'node:stream/consumers';
import React from 'react';

const PostPage = async ({params}) => {
    const {postId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();

    return (
        <div>
            <h2>Post Details</h2>
            <br />
            <h3>Id: {post.id} </h3>
            <p>title: {post.title} </p>
            <p>body: {post.body} </p>
        </div>
    );
};

export default PostPage;