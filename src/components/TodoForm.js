import React from 'react';
import '../App.css';

const TodoForm = ({ input, onInputChange, onFormSubmit }) => {
  return (
    <div className='todo-box todo-text todo-form shadow'>
      <form onSubmit={onFormSubmit}>
        <i className='large angle down icon'></i>
        <input className='todo-text todo-input' type='text' placeholder='What do you need to do?'
               value={input} onChange={onInputChange}></input>
      </form>
    </div>
  );
};

export default TodoForm;