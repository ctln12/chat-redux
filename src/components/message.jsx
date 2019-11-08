import React from 'react';

const Message = (props) => {
  const { created_at, author, content } = props.message;
  return (
    <div className="message-container" id={props.id}>
      <p>
        <span>{author}</span>
        <small>{created_at}</small>
      </p>
      <p>{content}</p>
    </div>
  );
};

export default Message;
