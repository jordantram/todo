import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map((todo) => {
      return (<li key={todo.id}>{todo.text}</li>)
    })

    return (
      <div>
        <ul>{todoItems}</ul>
      </div>
    );
  }
};

export default TodoList;