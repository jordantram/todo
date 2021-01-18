import React from 'react';
import '../App.css';
import { Checkbox, Icon } from 'semantic-ui-react'

// re-factor as function

class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map(todo => {
      return (
          <li className='todo-box' key={todo.id}>
            <Checkbox style={{ marginLeft: '0.2rem' }} />
            <span className='todo-text'>{todo.text}</span>
            <Icon className='pointer' style={{ marginBottom: '0.35rem' }} name='trash' onClick={() => {this.props.deleteItem(todo.id)}} />
          </li>
      )
    });

    return (
      <ul>{todoItems}</ul>
    );
  }
};

export default TodoList;