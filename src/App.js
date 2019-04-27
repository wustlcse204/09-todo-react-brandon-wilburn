import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';
import NewTodo from './NewTodo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addedTodo = this.addedTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.completedTodo = this.completedTodo.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);
  }

  // render() {
  //   return (
  //   <NewTodo newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} />
  //   )
  // }

  // Get Todos
  componentDidMount() {
    console.log("Working Get")
    var self = this;
    // AJAX goes here
    var api = "d18f1adca4df69e67de8c3cb3dae2becf51be12d633dc716731361e782a8dd3b";
    // Loading
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var todos = JSON.parse(this.responseText);
        for (var i=0; i < todos.length; i++) {
          todos = JSON.parse(this.responseText);
          self.setState({todos: todos});
          console.log(todos[i]);
        }
      } else if (this.readystate === 4) {
          console.log(this.responsetext);
        }
    };

    xhttp.open("GET", "https://api.kraigh.net/todos", true);
    xhttp.setRequestHeader("x-api-key", api);
    xhttp.send();
      // If AJAX successful, pare the JSON and save to state
  }

  // render() {
  //   return (
  //   <NewTodo addTodo={this.addTodo} />
  //   )
  // }

  addedTodo(event) {
    event.preventDefault();
    console.log("Working!");
    // var self = this;
    // Ajax Call
    this.setState({...this.state.todos, NewTodo});
    let newTodoText = this.state.input;

    var data = {
      text: document.getElementById("addTodo").value
    }
    var api = "d18f1adca4df69e67de8c3cb3dae2becf51be12d633dc716731361e782a8dd3b";
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        this.state.input = '';
        // return (
        //   <NewTodo newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} />
        // )
        // todos = JSON.parse(this.responseText);
      } else if (this.readystate == 4) {
        console.log(this.responsetext);
      }
    };

    xhttp2.open("POST", "https://api.kraigh.net/todos", true);
    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    xhttp2.send(JSON.stringify(data));
  }

  onChange(event) {
    var self = this;
    // Set the state to the value of the input
    this.setState({
     input: event.target.value
    });
  }

  // render() {
  //   return (
  //     <NewTodo newTodo onClick={this.addTodo} onChange={this.onChange} input={this.state.input} />
  //   )
  // }

  completedTodo() {
    var self = this;
    // render() {
    //   var className = "todo";
    //   if (this.state.completed) {
    //     className = "completed-text";
    //   }
    //   return(
    //     <div className={className}> TODO GOES HERE </div>
    //   );
      // }

  }

  deleteTodo() {
    var self = this;
  }

  render() {
    return (
      <React.Fragment>
      <div id="nav">
        <h1>TODAY IS THE DAY</h1>
        <div id="date-container">
          <h2 id="date"></h2>
          <h2 id="time"></h2>
        </div>
      </div>
      <comp1 />
      <div id="todo-list">
        {this.state.todos.map((todo) =>
          <Todo key={todo.id} id={todo.id} completed={todo.completed}
            text={todo.text} removeDeletedTodo={this.removeDeletedTodo}/>
        )}
      </div>
      <NewTodo newTodo={this.addedTodo} onChange={this.onChange} input={this.state.input} />
      </React.Fragment>
    );
  }

}

export default App;
