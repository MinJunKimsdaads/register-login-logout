import { useState } from "react";
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Register from "./component/Register";
import Login from "./component/Login";
import Chatting from "./component/Chatting";
import AdminChatting from "./component/AdminChatting";

function App() {
  // console.log(process.env.REACT_APP_DATABASE);
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} element={<Login></Login>}></Route>
        <Route path={`/register`} element={<Register></Register>}></Route>
        <Route path={`/adminchatting`} element={<AdminChatting></AdminChatting>}></Route>
        <Route path={`/chatting`} element={<Chatting></Chatting>}></Route>
      </Routes>
    </div>
  );
}

export default App;
