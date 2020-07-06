import React, { Component } from 'react';
import './Todos';
import Todos from './Todos';
import './AddTodo'
import AddTodo from './AddTodo';
import fire from './fire';



class App extends Component {
  todoRef = fire.database().ref('todos');
  state = {
    todos: [],
    open: false
  };

  handleEdit = (id,content)=>{
    this.todoRef.child(id).set({
      content: content
    })
  }

  readAllTodos = () => {
    let todos = [];
    this.todoRef.on('value', (snapshot) => {
      return (
        todos = [],
        snapshot.forEach(childNode => {
          todos.push({
            id: childNode.key,
            content: childNode.val().content
          })
        }),
        this.setState({
          todos: todos
        })
      )
    })
  }


  deleteTodo = (id) => {
    this.todoRef.child(id).remove();
  }

  addTodo = (todo) => {
    this.todoRef.push(todo);
  }

  componentDidMount() {
    this.readAllTodos();
  }

  render() {
    const { open } = this.state
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} handleEdit={this.handleEdit} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
