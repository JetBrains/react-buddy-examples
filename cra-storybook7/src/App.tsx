import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./stories/Button";

function App() {
  return (
    <div className="App">
      <Button label={"Test"} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export const TestButton = () => {
    return <Button label={"Test"} borderRadius="20px"/>
}

export default App;
