import React from 'react';

const Message = ({ data }) => {
  return <div>{data?.sentBy}</div>;
};

export default Message;
