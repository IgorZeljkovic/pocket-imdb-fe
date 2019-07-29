import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="container border rounded m-2 p-2">
      <h5 className="font-weight-bold">{ comment.author.name }</h5>
      <p>{ comment.text }</p>
    </div>
  )
}

export default Comment;