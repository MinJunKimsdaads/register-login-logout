import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chatting from './pages/Chatting';
import AdminChatting from './pages/AdminChatting';

import { Dialog, DialogProvider } from "./component/Dialog";

function App() {
  return (
    <DialogProvider>
        <div className="App">
          <Routes>
            <Route path={`/`} element={<Login></Login>}></Route>
            <Route path={`/register`} element={<Register></Register>}></Route>
            <Route path={`/adminchatting`} element={<AdminChatting></AdminChatting>}></Route>
            <Route path={`/chatting`} element={<Chatting></Chatting>}></Route>
          </Routes>
          <Dialog></Dialog>
        </div>
    </DialogProvider>
  );
}

export default App;
