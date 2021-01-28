import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import InfoTab from './components/InfoTab';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const generateKey = (pre) => {
  /* credit for generateKey function:
   https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements */
  return `${ pre }_${ new Date().getTime() }`;
}

function App() {
  const [input, setInput] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [todos, setTodos] = useState(() => {
    return localStorage.length ? JSON.parse(localStorage.getItem('todos')) : [];
  }); // Passing anonymous function so that the function is only called once

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Only re-run this effect if todos changes

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (input) {
      const todo = {
        id: generateKey(input),
        text: input,
        status: 'active'
      }

      setTodos(prevTodos => [...prevTodos, todo]);

      setInput('');
    }
  } 

  const onFilterButtonPress = (filter) => {
    setSelectedFilter(filter);
  }

  const deleteItem = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const markTodoAs = (id, status) => {
    const items = [...todos];
    const index = items.map(todo => todo.id).indexOf(id);
    const item = {...items[index]};
    item.status = status;
    items[index] = item;

    setTodos(items);
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.status === 'active'));
  }

  return (
    <div className='background'>
      <div className='todo-main'>
        <div className='header'>
          <h1 className='header-text'>GET IT DONE</h1>
        </div>
          <TodoForm input={input} onInputChange={onInputChange} onFormSubmit={onFormSubmit}/>
          <div className='shadow'>
          <InfoTab todos={todos} numItems={todos.length} clearCompleted={clearCompleted} 
                  selectedFilter={selectedFilter} onFilterButtonPress={onFilterButtonPress} />
          <TodoList todos={todos} deleteItem={deleteItem} markTodoAs={markTodoAs}
                  selectedFilter={selectedFilter} />
        </div>
      </div>
    </div>
  );
}

export default App;
