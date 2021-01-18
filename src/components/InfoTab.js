import React from 'react';
import '../App.css'

// re-factor as function

class InfoTab extends React.Component {
  render() {
    return (
      <div className='todo-box info-tab'>
        <div className='left'>
          { this.props.numItems === 1 
            ? `${this.props.numItems} item left` 
            : `${this.props.numItems} items left`
          }
        </div>
        <div className='filter-buttons center'>
          <button className={this.props.selectedFilter === 'all' ? 'selected' : null} 
                  onClick={() => {this.props.onFilterButtonPress('all')}}>All</button>
          <button className={this.props.selectedFilter === 'active' ? 'selected' : null} 
                  onClick={() => {this.props.onFilterButtonPress('active')}}>Active</button>
          <button className={this.props.selectedFilter === 'completed' ? 'selected' : null} 
                  onClick={() => {this.props.onFilterButtonPress('completed')}}>Completed</button>
        </div>
        <div className='right'>
        {this.props.todos.filter(todo => todo.status === 'completed').length
            ? <button className='transparent-button clear-button' 
                      onClick={this.props.clearCompleted}>Clear Completed</button>
            : null}
        </div>
      </div>
    );
  }
};

export default InfoTab;