import React, { Component } from 'react';
import './App.css';

import Div from './layout/Div';
import Layout from './layout/layout';
import Display from './layout/dispaly';
import KeyPad from './layout/keypad';

class App extends Component {

  state = {
    display : "",
    count:0
  }

updateDisplay = (str) => {
  this.setState({display:str,count:this.state.count+1});
}
keypadHandler = () => {
this.updateDisplay("clicked");
}

  render() {
    return (
      <Div>
        <Layout>
          <Display display = {this.state.display} />
          <KeyPad clicked = {this.keypadHandler} />
        </Layout>
      </Div>

    );
  }
}

export default App;
