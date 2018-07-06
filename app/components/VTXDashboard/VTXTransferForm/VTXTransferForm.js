import React  from 'react';
import { Form, Field } from 'react-final-form';
import { Button, Box, Col, Input, Row } from 'smooth-ui';
import './style.scss';

const VTXTransferForm = (props) => (
  <div>
    <h2 className='header'>
      Transfer VTX
    </h2>

    <Form
      onSubmit={props.onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Row className='row'>
            <Col>
              <Field className="input" name="amount" type="number" component={AdaptedInput} placeholder="Amount" />
            </Col>
          </Row>

          <Row className='row'>
            <Col>
              <Field className="input" name="toAddress" component={AdaptedInput} placeholder="Recipient" />
            </Col>
          </Row>

          <Row className='row'>
            <Col />

            <Col xs={4}>
              <Button className="submitButton" type="submit" variant="dark" disabled={pristine || invalid}>
                Send
              </Button>
            </Col>

            <Col />
          </Row>
        </form>
      )}
    />
  </div>
)

const adapt = Component => ({
  input,
  meta: { valid },
  ...rest
}) => <Component {...input} {...rest} valid={valid} />;
const AdaptedInput = adapt(Input);

const validate = (formValues) => {
  return {
    amount: formValues.amount === undefined ? {error: 'required'} : {},
    toAddress: formValues.toAddress === undefined ? {error: 'required'} : {}
  }
}


export default VTXTransferForm;
