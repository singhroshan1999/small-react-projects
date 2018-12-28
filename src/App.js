import React, { Component } from 'react';
import './App.css';
import Selector from './container/selector';
import ListSelected from './container/ListSelected';
import Result from './container/result';

class App extends Component {
  result = () => {
    let rint = () => Math.floor((Math.random() * 5) + 1);
    let i = 0;
    const arr = [];
    while ( arr.length < 4) {
      i = rint();
      // (arr.includes(i))? null : arr.push(i);
      if(!arr.includes(i)) arr.push(i);
    }
    return arr;
  }
  constructor(props){
    super(props)
    this.state = {
      pattern : this.result()
    }
  }

  render() {
    // alert(this.result());
    return (
<React.Fragment  >
<Result pattern = {this.state.pattern} />
<ListSelected />
<Selector />
</React.Fragment>
    );
  }
}

export default App;
