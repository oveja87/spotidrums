import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>This will be awesome!</p>;
  }
}

render(<App/>, document.getElementById('app'));
