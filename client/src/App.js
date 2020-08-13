import React from 'react';
import logo from './logo.svg';
import Cal from "./components/calendar/Calender";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      {/* 아래 캘린더 */}
      <Cal></Cal>
    </div>
  );
}

export default App;
