import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
// import { Checkbox } from 'semantic-ui-react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/* generateKey function taken from 
   https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements */
const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: []
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.input) {
      const todo = {
        id: generateKey(this.state.input),
        text: this.state.input
      }

      this.setState(prevState => ({
        todos: [...prevState.todos, todo]
      }));
      this.setState({ input: '' });
    }
  } 

  deleteItem = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo</h1>
        </div>
        <TodoForm input={this.state.input} onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
        <TodoList todos={this.state.todos} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default App;
