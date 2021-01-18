import React from 'react';
import '../App.css';
import { Checkbox, Icon } from 'semantic-ui-react'

// re-factor as function

class TodoList extends React.Component {
  render() {
    let todosFiltered;

    if (this.props.selectedFilter === 'all') {
      todosFiltered = this.props.todos;
    } else {
      todosFiltered = this.props.todos.filter(todo => todo.status === this.props.selectedFilter);
    }

    const todoItems = todosFiltered.map(todo => {
      const isCompleted = todo.status === 'completed';
      const statusOnChange = isCompleted ? 'active' : 'completed';
      const markTodoAs = () => {
        this.props.markTodoAs(todo.id, statusOnChange);
      }

      return (
          <li className='todo-box' key={todo.id}>
            <Checkbox checked={isCompleted} style={{ marginLeft: '0.2rem' }} onChange={markTodoAs} />
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