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
          <button className='transparent-button'>All</button>
          <button className='transparent-button'>Active</button>
          <button className='transparent-button'>Completed</button>
        </div>
        <button className='transparent-button'>Clear Completed</button>
      </div>
    );
  }
};

export default InfoTab;