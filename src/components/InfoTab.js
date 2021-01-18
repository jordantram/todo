import React from 'react';
import '../App.css'

// re-factor as function

class InfoTab extends React.Component {
  render() {
    return (
      <div className='todo-box info-tab'>
        <div>
          { this.props.numItems === 1 
            ? `${this.props.numItems} item left` 
            : `${this.props.numItems} items left`
          }
        </div>
        <div className='filter-buttons'>
          <button onClick={() => {this.props.onFilterButtonPress('all')}}>All</button>
          <button onClick={() => {this.props.onFilterButtonPress('active')}}>Active</button>
          <button onClick={() => {this.props.onFilterButtonPress('completed')}}>Completed</button>
        </div>
        <button className='transparent-button' onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
};

export default InfoTab;