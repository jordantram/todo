import React from 'react';
import './TodoList.css';
import { Checkbox, Icon } from 'semantic-ui-react'

// re-factor as function

class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map(todo => {
      return (
          <li key={todo.id}>
            <Checkbox className="cb" label={{ children: todo.text }} />
            <Icon className="pointer" name="trash" onClick={() => {this.props.deleteItem(todo.id)}} />
          </li>
      )
    })

    return (
      <ul>{todoItems}</ul>
    );
  }
};

export default TodoList;