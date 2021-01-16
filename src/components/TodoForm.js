import React from 'react';
import '../App.css'

// re-factor as function

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <i className='large angle down icon'></i>
        <input className='todo-text' type='text' placeholder='What do you need to do?'
               value={this.props.input} onChange={this.props.onInputChange}></input>
      </form>
    );
  }
};

export default TodoForm;