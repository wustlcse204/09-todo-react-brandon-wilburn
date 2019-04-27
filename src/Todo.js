import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id={this.props.id}>
        <button className="completed-button" onClick={this.completedTodo}>&#10004;</button>
        <p className="todo-list-text">{this.props.text}</p>
        <button className="close" onClick={this.deleteTodo}>&#10008;</button>
      </article>
    );
  }
}

export default Todo;
