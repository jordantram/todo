import React from 'react';
import '../App.css'

// re-factor as function

class TodoForm extends React.Component {
  render() {
    return (
      <div className='todo-box todo-text todo-form shadow'>
        <form onSubmit={this.props.onFormSubmit}>
          <i className='large angle down icon'></i>
          <input className='todo-text todo-input' type='text' placeholder='What do you need to do?'
                value={this.props.input} onChange={this.props.onInputChange}></input>
        </form>
      </div>
    );
  }
};

export default TodoForm;