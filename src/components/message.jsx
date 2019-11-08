import React from 'react';

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container" id={props.id}>
      <i>
        <span>{author} </span>
        <small>{time}</small>
      </i>
      <p>{content}</p>
    </div>
  );
};

export default Message;
