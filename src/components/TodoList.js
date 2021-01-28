import React from 'react';
import '../App.css';
import { Checkbox, Icon } from 'semantic-ui-react';

const TodoList = ({ todos, deleteItem, markTodoAs, selectedFilter }) => {
  let todosFiltered;

  if (selectedFilter === 'all') {
    todosFiltered = todos;
  } else {
    todosFiltered = todos.filter(todo => todo.status === selectedFilter);
  }

  const todoItems = todosFiltered.map(todo => {
    const isCompleted = todo.status === 'completed';
    const statusOnChange = isCompleted ? 'active' : 'completed';

    return (
        <li className='todo-box f-space-between' key={todo.id}>
          <Checkbox className='checkbox' checked={isCompleted} onChange={() => markTodoAs(todo.id, statusOnChange)} />
          <span className='todo-text'>{todo.text}</span>
          <Icon className='pointer' style={{ marginBottom: '0.35rem' }} name='trash' 
                onClick={() => deleteItem(todo.id)} />
        </li>
    );
  });

  return (
    <ul className='todo-list'>{todoItems}</ul>
  );
};

export default TodoList;