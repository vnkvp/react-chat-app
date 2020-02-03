import React from 'react';
import './styles/App.css';
import chatkitLogo from './images/chatkit-logo.svg';
import Chat from './components/Chat';
import UserList from './components/UserList';
import Login from './components/Login';


function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const otherUserId = urlParams.get('otherUserId');

  return (
    <div className="App">
      {userId && otherUserId ? (
        <>
          <div className="App__chatwindow">
            <UserList userId={userId} />
            <Chat />
          </div>
        </>
      ) : (
        <Login />
      )}
      <div className="App__backdrop">
        <img
          className="App__backdrop__logo"
          src={chatkitLogo}
          alt="Chatkit logo"
        />
      </div>
    </div>
  );
}

export default App;
