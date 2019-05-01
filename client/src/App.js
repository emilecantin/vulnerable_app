import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Home from './Home';
import House from './House';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/:id*" component={House} />
    </div>
  );
}

export default App;
