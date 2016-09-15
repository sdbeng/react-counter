import React, { Component } from 'react'

class GreeterMessage extends Component {
  // constructor(props) {
  //   super(props)
  //   message: 'Hello from the GreeterMessage component'
  // }


  render(){
    // console.log('this.props.name: ' +this.props.name);
    // console.log('this.props.message: ' +this.props.message);
    return (
      <div>
        <h2>{this.props.name}</h2>
            {this.props.message}
      </div>
    )
  }
}

export default GreeterMessage
