import React  from 'react';
import { Form, Field } from 'react-final-form'

const VTXTransferForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount
          </label>

          <Field name="amount" type="number" component="input" placeholder="Amount" />
        </div>

        <div>
          <label>
            Recipient
          </label>

          <Field name="toAddress" component="input" placeholder="Recipient" />
        </div>

        <button type="submit" disabled={pristine || invalid}>
          Send
        </button>
      </form>
    )}
  />
)

const validate = (formValues) => {
  return {
    amount: formValues.amount === undefined ? {error: 'required'} : {},
    toAddress: formValues.toAddress === undefined ? {error: 'required'} : {}
  }
}

export default VTXTransferForm;
