import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useWebSocket, { ReadyState } from 'react-use-websocket';

// Add the following import
import { getUser } from '../src/utilities/users-service';

//import components
import AuthPage from './pages/Auth/AuthPage'
import NewOrderPage from './pages/NewOrder/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage'
import NavBar from './components/NavBar/NavBar';
import Index from './pages/Index/Index'
import Chat from './pages/Chat/Chat';
import ToDo from './pages/ToDo/ToDo'

//import css
import './App.css';
const WS_URL = 'ws://192.168.1.232:8000';

function App() {
  const [user, setUser] = useState(getUser());

  //console.log('APP JS USER',user);

  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    }
  });
  
  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/todo" element={<ToDo />}/>
            <Route path="/chat" element={<Chat />}/>
            <Route path="/orders/new/" element={<NewOrderPage />}/>
            <Route path="/orders/history/" element={<OrderHistoryPage  user={user}/>}/>
          </Routes> 
        </>
        : <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
