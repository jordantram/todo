import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import InfoTab from './components/InfoTab';

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

  componentDidMount() {
    if (localStorage.length) {
      const storageTodos = JSON.parse(localStorage.getItem('todos'));
      this.setState({ todos: storageTodos });
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
      }), () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
      });

      this.setState({ input: '' });
    }
  } 

  deleteItem = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(todo => todo.id !== id)
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    });
  }

  render() {
    return (
      <div className='todo-main'>
        <h1>Todo</h1>
        <TodoForm input={this.state.input} onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
        <div className='shadow'>
          <InfoTab numItems={this.state.todos.length} />
          <TodoList todos={this.state.todos} deleteItem={this.deleteItem}/>
        </div>
      </div>
    )
  }
}

export default App;
