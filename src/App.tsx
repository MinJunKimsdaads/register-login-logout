import { useState } from "react";
import Register from "./component/Register";
import Login from "./component/Login";
import Chatting from "./component/Chatting";
import AdminChatting from "./component/AdminChatting";
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Chatting></Chatting> */}
      <AdminChatting></AdminChatting>
    </div>
  );
}

export default App;
