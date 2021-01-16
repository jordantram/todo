import React from 'react';
import '../App.css';
import { Checkbox, Icon } from 'semantic-ui-react'

// re-factor as function

class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map(todo => {
      return (
          <li className='todo-box' key={todo.id}>
            <Checkbox />
            <span className='todo-text'>{todo.text}</span>
            <Icon className='pointer' name='trash' onClick={() => {this.props.deleteItem(todo.id)}} />
          </li>
      )
    });

    return (
      <ul className='shadow'>{todoItems}</ul>
    );
  }
};

export default TodoList;