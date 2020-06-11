import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Exercises = (props) => {
  return (
    <div>
    <h1 className='mb-3 font-weight-normal'>Exercises</h1>
    <Form>
      <FormGroup>
        <Label for="exercise"></Label>
        <Input type="textarea" name="exercise" id="exercise" style={{height: '32em'}} />
      </FormGroup>
    </Form>
    </div>
  );
}

export default Exercises;