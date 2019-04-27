import React, { Component } from 'react';
import './NewTodo.css';
import App from './App';

class NewTodo extends Component {
  constructor(props) {
    super(props);
    // this.addTodo = this.addTodo.bind(this);
    this.state = {value: ''};
  }

  render() {
    return (
      <div id="submit">
        <form>
          <input type="text" name="event" id="addTodo"
          placeholder="What ya gotta do?" onFocus="this.placeholder=''"
          onBlur="this.placeholder='What ya gotta do?'"></input>
          <button id="submit-button" onClick={this.props.addedTodo} value={this.state.value} onChange={this.handleChange}><i className="far fa-calendar-plus"></i></button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
