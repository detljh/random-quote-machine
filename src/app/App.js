import React from 'react';
import { Home } from './home';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Home />
      </div>
    );
  }
}

export default App;
