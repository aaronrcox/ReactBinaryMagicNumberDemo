
import React from 'react';
import { Router } from "@reach/router"
import CounterDemo from './components/CounterDemo';
import MagicNumberGameSetup from './components/MagicNumberGameSetup';
import MagicNumberGame from './components/MagicNumberGame';

function App() {

  return (
    <div>
      <Router>
        <CounterDemo path='/'></CounterDemo>
        <MagicNumberGameSetup path='setup'></MagicNumberGameSetup>
        <MagicNumberGame path='play'></MagicNumberGame>
      </Router>
    </div>
  );
}

export default App;
