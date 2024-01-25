import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Register from "./component/Register";
import Login from "./component/Login";
import Chatting from "./component/Chatting";
import AdminChatting from "./component/AdminChatting";

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
