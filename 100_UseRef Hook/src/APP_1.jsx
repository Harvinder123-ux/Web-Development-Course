import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  //Definition -The useRef Hook in React is used to create a refrence to a DOM node or a value that persisits(Kayam Rahegi) across renders. it similar to createRef in class components

  //1ST Use Case
  // let a = 0; //when we use this it on re render it val become 1 and never increment after that coz useffect re rendering the component which make it become 0 again and the + 1 = 1

  //but what if i want the component will not re render when the states change what should i do for this?
  //to overcome these kind of problems we use the useRef Hook and its syntax is -
  const a = useRef(0);
  //if we change the value of useRef but still useEffect will not triggers - in other words during the change in useRef the component will not re-render

  //when ever we change the state the component will re-render
  useEffect(() => {
    //need to follow the rule add the current for useRef hook will work properly
    a.current = a.current + 1;
    console.log(`Re rendring and the value of a is ${a.current}`);
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
