import React, { Component } from 'react';
import './App.css';
import Selector from './container/selector';
import ListSelected from './container/ListSelected';
import Result from './container/result';

class App extends Component {

  render() {
    return (
<React.Fragment>
<Result />
<ListSelected />
<Selector />
</React.Fragment>
    );
  }
}

export default App;
