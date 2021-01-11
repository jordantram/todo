import React from 'react';
import { Form } from 'semantic-ui-react'
import '../App.css'

// re-factor as function

class TodoForm extends React.Component {
  render() {
    return (
      <Form className='center' onSubmit={this.props.onFormSubmit}>
        <Form.Group>
          <Form.Input placeholder='What do you need to do?' name='todo' value={this.props.input} onChange={this.props.onInputChange}/>
          <Form.Button content='Add' />
        </Form.Group>
      </Form>
    );
  }
};

export default TodoForm;