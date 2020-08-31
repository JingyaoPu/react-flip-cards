import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {i: 0};
  }

  colors = ['blue','red','grey'];
  componentDidMount() {
    setInterval(()=>{
      let i = this.state.i;
      if(i===this.colors.length) i=0;
      else i++;
      this.setState({i:i})
    },1000);
  }


render(){
  return (
      <div >
        <h1 style={{color:this.colors[this.state.i]}}>Hello, world! 123</h1>
      </div>
  );
}
}


export default App;
