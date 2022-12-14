import React from 'react';
import './NotificationBar.css';

const NotificationBar = ({ count }) => {
  return (
    <div className="notification-bar-main">
      <div className="notification-bar-main-header">
        <h2 className="notification-bar-main-header-tag">Notifications</h2>
        <p className="notification-bar-main-header-unreadCount">{count}</p>
      </div>
      <div className="notification-bar-main-markAsRead">Mark all as Read</div>
    </div>
  );
};

export default NotificationBar;
