import React, { Component } from 'react'

class GreeterForm extends Component {
  onFormSubmit(e){
    e.preventDefault();
    // console.log('submit clicked');

    var updates = {}
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    console.log('name: ' + this.refs.name.value);

    if(name.length > 0){
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="enter name" ref="name" />
          </div>
          <div>
            <textarea placeholder="enter message" ref="message"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>

        </form>
      </div>
    )
  }
}

export default GreeterForm
