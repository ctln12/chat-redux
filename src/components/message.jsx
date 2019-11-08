import React from 'react';

const Message = (props) => {
  return (
    <div className="message-container" id={props.id}>
      <p>{`${props.message.author} - ${props.message.created_at}`}</p>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
