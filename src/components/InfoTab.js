import React from 'react';
import '../App.css';

const InfoTab = ({ todos, numItems, clearCompleted, selectedFilter, onFilterButtonPress }) => {
  return (
    <div className='todo-box info-tab'>
      <div className='left'>
        { numItems === 1 
          ? `${numItems} item left` 
          : `${numItems} items left`
        }
      </div>
      <div className='filter-buttons-wrapper center'>
        <button className={selectedFilter === 'all' ? 'selected' : null} 
                onClick={() => {onFilterButtonPress('all')}}>All</button>
        <button className={selectedFilter === 'active' ? 'selected' : null} 
                onClick={() => {onFilterButtonPress('active')}}>Active</button>
        <button className={selectedFilter === 'completed' ? 'selected' : null} 
                onClick={() => {onFilterButtonPress('completed')}}>Completed</button>
      </div>
      <div className='right'>
        {todos.filter(todo => todo.status === 'completed').length
          ? <button className='transparent-button clear-button' 
                    onClick={clearCompleted}>Clear Completed</button>
          : null}
      </div>
    </div>
  );
};

export default InfoTab;