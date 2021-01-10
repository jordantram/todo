import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <input type='text' value={this.props.input} onChange={this.props.onInputChange}/>
        <button>Enter</button>
      </form>
    );
  }
};

export default TodoForm;