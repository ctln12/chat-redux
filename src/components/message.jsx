import React from 'react';

const Message = (props) => {
  return (
    <div className="message-list">
      <p>{`${props.message.author} - ${props.message.created_at}`}</p>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
