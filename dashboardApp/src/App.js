import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreeterMessage from './components/GreeterMessage'
import GreeterForm from './components/GreeterForm'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {count:0, a:1}
    this.decrease = this.decrease.bind(this)

    // console.log(this.props);
    // define state here
    this.state = {name: 'Serg',message: 'This is my default message'}
    // in ES6 I have to bind the method this
    this.handleNewData = this.handleNewData.bind(this)
  }

  decrease(){
    console.log(`clicked decrease: ${this.state.count}`);
  }

  handleNewData(updates){
    this.setState(updates)
  }

  render() {
    var name = this.state.name
    var message = this.state.message

    // console.log(`this.state.name ${this.state.name}`);
    // console.log(`this.state.message ${this.state.message}`);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {/* the name of the variable MUST be the same i pass in the props component */}
          <GreeterMessage name={name} message={message} />
          <GreeterForm onNewData={this.handleNewData} />
        </div>
        <div>
          <h1>React Counter</h1>
          Clicked: <span>{this.state.count} </span> times
          <button onClick={this.decrease}>Decrease</button>
          <input value={this.state.a} placeholder='a value'/>
        </div>

      </div>
    );
  }
}

export default App;
