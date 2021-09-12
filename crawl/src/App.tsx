import React from 'react';
import './App.css';

let state = {value: ''};

function handleChange(event: React.FormEvent<HTMLInputElement>) {
  state.value = event?.currentTarget.value;
}

function submit() {
  console.log('current value: ', state.value);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://crawl.develz.org/logo.png" className="App-logo" alt="logo" />
          <p>
            Paste morgue here: <input type="text" onChange={handleChange}></input>
          </p>
          <button onClick={submit}>Analyze</button>
      </header>
    </div>
  );
}

export default App;
