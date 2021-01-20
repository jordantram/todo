import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import InfoTab from './components/InfoTab';

const generateKey = (pre) => {
  /* credit for generateKey function:
   https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements */
  return `${ pre }_${ new Date().getTime() }`;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],
      selectedFilter: 'all'
    }
  }

  componentDidMount() {
    if (localStorage.length) {
      const storageTodos = JSON.parse(localStorage.getItem('todos'));
      this.setState({ todos: storageTodos });
    }
  }

  updateLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.input) {
      const todo = {
        id: generateKey(this.state.input),
        text: this.state.input,
        status: 'active'
      }

      this.setState(prevState => ({
        todos: [...prevState.todos, todo]
      }), this.updateLocalStorage);

      this.setState({ input: '' });
    }
  } 

  onFilterButtonPress = (filter) => {
    this.setState({ selectedFilter: filter });
  }

  deleteItem = (id) => {
    this.setState({ 
      todos: this.state.todos.filter(todo => todo.id !== id)
    }, this.updateLocalStorage);
  }

  markTodoAs = (id, status) => {
    const items = [...this.state.todos];
    const index = items.map(todo => todo.id).indexOf(id);
    const item = {...items[index]};
    item.status = status;
    items[index] = item;

    this.setState({ todos: items }, this.updateLocalStorage);
  }

  clearCompleted = () => {
    this.setState({ 
      todos: this.state.todos.filter(todo => todo.status === 'active')
    }, this.updateLocalStorage);
  }

  render() {
    return (
      <div className='background'>
        <div className='todo-main'>
          <div className='header'>
            <h1>GET IT DONE</h1>
          </div>
          <TodoForm input={this.state.input} onInputChange={this.onInputChange} onFormSubmit={this.onFormSubmit}/>
          <div className='shadow'>
            <InfoTab todos={this.state.todos} numItems={this.state.todos.length} clearCompleted={this.clearCompleted} 
                    selectedFilter={this.state.selectedFilter} onFilterButtonPress={this.onFilterButtonPress} />
            <TodoList todos={this.state.todos} deleteItem={this.deleteItem} markTodoAs={this.markTodoAs}
                    selectedFilter={this.state.selectedFilter} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
