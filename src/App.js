import './App.css';
import Message from './components/Message';
import NotificationBar from './components/NotificationBar';
import { notifications } from './utils/notificationsData';

function App() {
  return (
    <div className="main">
      <div className="app">
        <div className="notification-bar">
          <NotificationBar />
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
