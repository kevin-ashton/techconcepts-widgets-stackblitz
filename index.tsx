import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { AsciiWidget } from './widgets/ascii';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="p-5">
        <AsciiWidget />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
