import { useState } from "react";

function App() {
  const [test, setTest] = useState('');

  const testFn = (e:any) => {
    if(e.target.value){
      setTest(e.target.value);
    }
  }

  const submit = () => {
    if(test){
      const post = {
        testID : test,
      }
      
      fetch("http://localhost:3001/test", {
        method : "post", // 통신방법
        headers : {
          "content-type" : "application/json",
        },
        body : JSON.stringify(post),
      })
      .then((res)=>res.json())
      .then((json)=>{
        setTest(json.text);
      })
    }
  }

  return (
    <div className="App">
      <input onChange={testFn}></input>
      <span onClick={submit}>submit</span>
      <h1>{test}</h1>
    </div>
  );
}

export default App;
