import React from 'react';
import './styles.css'

const CommentsContainer = ({comments}) => {
  const userName = JSON.parse(localStorage.getItem('User'));
  return (
   <div className='comments-container'>
        <h3>{comments.length ? 'Commentarios' : 'Sin comentarios'}</h3>
        {comments.map((comment) => (
            <div key={comment.id} className='comment-container'>
                <p className='comment-date-text'>
                    {new Date(comment.createdAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className='comment-text'>
                <b>{comment.createdByAdmin ? 'Admin' : userName.name}: </b>
                {comment.content}
                </p>
            </div>
        ))}
   </div>
  );
}

export default CommentsContainer;