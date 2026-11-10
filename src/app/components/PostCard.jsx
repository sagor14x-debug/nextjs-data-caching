import React from 'react';

const PostCard = ({post}) => {
    const {id, title, body} = post;
    return (
<div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default PostCard;