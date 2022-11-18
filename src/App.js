import './App.css';
import Message from './components/Message';
import NotificationBar from './components/NotificationBar';
import { notifications } from './utils/notificationsData';

function App() {
  const unreadNotifications = notifications.filter((notification) => {
    return !notification.isRead;
  }).length;

  return (
    <div className="main">
      <div className="app">
        <div className="notification-bar">
          <NotificationBar count={unreadNotifications} />
        </div>
        <div className="message-box">
          {notifications?.map((data) => (
            <Message data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
