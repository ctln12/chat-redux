import React from 'react';

const Message = (props) => {
  return (
    <div className="message-list">
      <p>{`${props.author} - ${props.created_at}`}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Message;
