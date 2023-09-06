import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useWebSocket, { ReadyState } from 'react-use-websocket';

// Add the following import
import { getUser } from '../src/utilities/users-service';

//import components
import AuthPage from './pages/Auth/AuthPage'
import NavBar from './components/NavBar/NavBar';
import Index from './pages/Index/Index'
import Chat from './pages/Chat/Chat';
import ToDoIndex from './pages/ToDo/Index'
import ToDoAdd from './pages/ToDo/ToDoAdd'
import ToDoEdit from './pages/ToDo/ToDoEdit';
import ToDoDelete from './pages/ToDo/ToDoDelete';
import CalendarAdd from './pages/Index/CalendarAdd';
import CalendarEdit from './pages/Index/CalendarEdit';
import CalendarDelete from './pages/Index/CalendarDelete';

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
            <Route path="/calendar/add/:date" element={<CalendarAdd />}/>
            <Route path="/calendar/edit/:id" element={<CalendarEdit />}/>
            <Route path="/calendar/delete" element={<CalendarDelete />}/>
            <Route path="/todo" element={<ToDoIndex />}/>
            <Route path="/todo/add" element={<ToDoAdd />}/>
            <Route path="/chat" element={<Chat />}/>
            <Route path="/todo/edit/:id" element={<ToDoEdit/>}/>
            <Route path="/todo/delete/:id" element={<ToDoDelete/>}/>
          </Routes> 
        </>
        : <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
