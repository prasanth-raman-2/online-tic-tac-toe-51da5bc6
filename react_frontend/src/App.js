import React from 'react';
import './App.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App" style={{ borderRadius: '8px' }}>
      <Game />
    </div>
  );
}

export default App;
