import React from 'react';
import './Message.css';
import RedDot from '../assets/images/reddot.png';

const Message = ({ data }) => {
  return (
    <>
      <div className={`message-div ${data?.isRead ? '' : 'message-content-read'}`}>
        <div className="message-avatar">
          <img src={data?.avatar} alt="Avatar" className="message-avatar-img" />
        </div>
        <div className={`message-content`}>
          <p className="message-content-p">
            {data?.sentBy && (
              <span className="message-content-p-span-sentBy">{data?.sentBy}</span>
            )}
            {data?.message && (
              <span className="message-content-p-span-message">{data?.message}</span>
            )}
            {data?.highlightedMessage && (
              <span
                className={`message-content-p-span-highlightedMessage ${
                  data?.color === 'darkBlue'
                    ? 'message-content-p-span-highlightedMessage-darkBlue'
                    : 'message-content-p-span-highlightedMessage-blue'
                }`}
              >
                {data?.highlightedMessage}
              </span>
            )}
            {!data?.isRead && (
              <span className="message-content-p-span-reddot">
                <img
                  src={RedDot}
                  alt="reddot"
                  className="message-content-p-span-reddot-img"
                />
              </span>
            )}
            {data.image && (
              <span className="message-content-p-span-image">
                <img src={data.image} alt="" />
              </span>
            )}
          </p>
          <p className="message-content-p-sentAt">{data?.sentAt}</p>
        </div>
      </div>
      {data?.privateMessage && (
        <div className="message-content-privateMessage">
          <p className="message-content-privateMessage-p">{data?.privateMessage}</p>
        </div>
      )}
    </>
  );
};

export default Message;
