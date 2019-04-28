import React, { Component } from 'react';
import './Todo.css';

var api = "d18f1adca4df69e67de8c3cb3dae2becf51be12d633dc716731361e782a8dd3b";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completed
    }
    this.completedTodo = this.completedTodo.bind(this);
  }

  completedTodo(event) {
      console.log("Please")
      var self = this;
    // render() {
      var className = "todo";
      var id = event.target.id;
      console.log(id);
      var data = {
        completed: true
      };
      var wtf = new XMLHttpRequest();

      wtf.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(this.responsetext);
          // event.target.parentNode.classList.add("completed-text");

          self.setState({completed: true});
        } else if (this.readystate == 4) {
          console.log(this.responsetext);
        }
      };

      wtf.open("PUT", "https://api.kraigh.net/todos/" + id, true);
      wtf.setRequestHeader("Content-type", "application/json");
      wtf.setRequestHeader("x-api-key", api);
      wtf.send(JSON.stringify(data));
      // }
  }

  render() {
    var className = "";
    if (this.state.completed) {
      className = "completed-text";
    }
    return (
      <article className = {className}>
        <button className="completed-button" id={this.props.id} onClick={this.completedTodo}>&#10004;</button>
        <p className="todo-list-text">{this.props.text}</p>
        <button className="close" id={this.props.id} onClick={this.props.deleteTodo}>&#10008;</button>
      </article>
    );
  }
}

export default Todo;
