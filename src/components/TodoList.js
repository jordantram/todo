import React from 'react';
import './TodoList.css';
import { Checkbox } from 'semantic-ui-react'

// re-factor as function

class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map((todo, index) => {
      return (
          <li key={todo.id}>
            <Checkbox className="cb" label={{ children: todo.text }}/>
            <i className="close link icon" onClick={() => {this.props.deleteItem(todo.id)}}></i>
          </li>
      )
    })

    return (
      <div>
        <ul>{todoItems}</ul>
      </div>
    );
  }
};

export default TodoList;