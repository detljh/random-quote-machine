import React from 'react';
import { Home } from './home';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Home />
      </div>
    );
  }
}

export default App;
