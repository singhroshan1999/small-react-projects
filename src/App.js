import React, { Component } from 'react';
import './App.css';

import Div from './layout/Div';
import Layout from './layout/layout';
import Display from './layout/dispaly';
import KeyPad from './layout/keypad';

class App extends Component {

  render() {
    return (
      <Div>
        <Layout>
          <Display />
          <KeyPad />
        </Layout>
      </Div>

    );
  }
}

export default App;
