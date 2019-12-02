import React from 'react';
import './App.css';
import CounterComponent from './CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HELLO React Redux
        </h1>
        <CounterComponent/>
      </header>
    </div>
  );
}

export default App;
