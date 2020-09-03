import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div class="card">
        <div class="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div class="card-body">
          <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div class="card-footer">
          <button id="generate" class="btn">Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
