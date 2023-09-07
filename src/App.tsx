import { useState } from "react";
import {Register} from './component/Register';

function App() {
  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('')
  // const [test, setTest] = useState('');

  // const submit = () => {
  //   if(test){
  //     const post = {
  //       testID : test,
  //     }
      
  //     fetch("http://localhost:3001/test", {
  //       method : "post", // 통신방법
  //       headers : {
  //         "content-type" : "application/json",
  //       },
  //       body : JSON.stringify(post),
  //     })
  //     .then((res)=>res.json())
  //     .then((json)=>{
  //       console.log(json.text);
        
  //       setTest(json.text);
  //     })
  //   }
  // }

  return (
    <div className="App">
      <Register></Register>
    </div>
  );
}

export default App;
