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

  state = {
    display : 0,
    lvalue:0,
    rvalue:undefined,
    ans:undefined,
    operator:undefined,
    count:0,
    decimal:10,
    lexp:0,
    rexp:0,
    int:true
  }

valueReset(){
  this.setState({int:true,rvalue:0})
}

updateDisplay = (str) => {
  this.setState({display:str});
}
keypadHandler = (btn) => {

  switch(btn){
    case '+':
    this.setState({operator:0});
    this.valueReset();
    break;
    case '-':
    this.setState({operator:1});
    this.valueReset();

    break;
    case '*':
    this.setState({operator:2});
    this.valueReset();

    break;
    case '/':
    this.setState({operator:3});
    this.valueReset();

    break;
    case '=':
    const lv = this.state.lvalue*Math.pow(10,-this.state.lexp);
    const rv = this.state.rvalue*Math.pow(10,-this.state.rexp);
    const ans = this.state.ans;
    var sol;// = this.state.ans;
    switch(this.state.operator){
      case 0: sol = lv+rv 
      break;
      case 1: sol = lv-rv 
      break;
      case 2: sol = lv*rv 
      break;
      case 3: sol = lv/rv 
      break;

    }
    this.setState({ans:sol,operator:undefined});
  
    break;
    case 'AC':
    this.setState({
      display : 0,
      lvalue:0,
      rvalue:0,
      ans:undefined,
      operator:undefined,
      count:0,
      decimal:10,
      lexp:0,
      rexp:0,
      int:true
    })
    break;
    case '+/-':
    // this.setState({operator:5});
    if(this.state.ans !== undefined){
      this.setState({ans:-this.state.ans})
    }else if (this.state.rvalue !== undefined) {
      this.setState({rvalue:-this.state.rvalue})
    } else {
      this.setState({lvalue:-this.state.lvalue})
    }
    // this.valueReset();
    break;
    case '%':
    // this.setState({operator:4});
    // this.valueReset();
    if(this.state.ans !== undefined){
      this.setState({ans:this.state.ans/100.0})
    }else if (this.state.rvalue !== undefined) {
      this.setState({rvalue:this.state.rvalue})
       this.keypadHandler('=')
      //  this.keypadHandler('%')
    } else {
      this.setState({lvalue:this.state.lvalue/100.0})
    }

    break;
    case '.':
    if(this.state.int === true)
        this.setState({int:false});
    break;
    default:
    if(btn === '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'){
      //  if(this.state.decimal === 10){
      if(this.state.operator === undefined){
        this.setState({lvalue:this.state.lvalue*this.state.decimal+parseInt(btn)});
        if(this.state.int !== true) this.setState({lexp:this.state.lexp+1})
      } else {
        this.setState({rvalue:this.state.rvalue*this.state.decimal+parseInt(btn)});
        if(this.state.int !== true) this.setState({rexp:this.state.rexp+1})
      }
   }
  
    break;



  }
  // alert('hell')
if(this.state.operator !== undefined) {
  this.updateDisplay(this.state.rvalue*Math.pow(10,-this.state.rexp))
}else if (this.state.ans === undefined) {
  this.updateDisplay(this.state.lvalue*Math.pow(10,-this.state.lexp))
} else {
  this.updateDisplay(this.state.ans)
}
this.updateDisplay(this.state.lvalue*Math.pow(0.1,this.state.lexp));
this.updateDisplay(this.state.rvalue*Math.pow(0.1,this.state.rexp));

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
