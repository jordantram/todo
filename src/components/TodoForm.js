import React from 'react';
import { Form } from 'semantic-ui-react'

// re-factor as function

class TodoForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onFormSubmit}>
        <Form.Group>
          <Form.Input placeholder='What do you need to do?' name='todo' value={this.props.input} onChange={this.props.onInputChange}/>
        </Form.Group>
      </Form>
    );
  }
};

export default TodoForm;