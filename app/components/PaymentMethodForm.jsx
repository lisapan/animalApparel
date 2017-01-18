import React, { Component, PropTypes } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import {renderField, renderCreditCardSelect, renderMonthSelect, renderYearSelect } from './utils/renderFields'
import { Button } from 'react-bootstrap'
const required = value => value ? undefined : 'Required'
const isCreditCard = value => value && /^\d{16}$/.test(value) ? undefined: 'Invalid card number'
const isSecurityCode = value => value && /^\d{3}$/.test(value) ? undefined: 'Invalid security code'


const PaymentMethodForm = (props) => {
  const { handleSubmit, invalid, pristine, previousPage } = props
  return (
    <div>
      <div className="checkoutFormField">
        <h3>Payment Info</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <Field name="paymentCreditCard" component={renderCreditCardSelect} label="Credit Card*" validate={[required]}/>
        <Field name="paymentCardNumber" type="text" component={renderField} label="Card Number*" validate={[required, isCreditCard]}/>
        <Field name="paymentCardName" type="text" component={renderField} label="Name on Card*" validate={[required]}/>
        <Field name="paymentExpirationMonth" component={renderMonthSelect} label="Expiration Month*" validate={[required]}/>
        <Field name="paymentExpirationYear" component={renderYearSelect} label="Expiration Year*" validate={[required]} />
        <Field name="paymentSecurityCode" type="text" component={renderField} label="Security Code*" validate={[required, isSecurityCode]}/>
      <div className="checkoutFormField">
        <Button className="product-detail previous" bsStyle="primary" bsSize="large" type="button"  onClick={previousPage}>Edit Payment Info</Button>
        <Button className="product-detail next" bsStyle="primary" bsSize="large" type="submit" disabled={invalid} >Review Order</Button>
      </div>
      </form>
    </div>
  )
}

PaymentMethodForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  invalid: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired
}


export default reduxForm({
  form: 'checkout',     // a unique identifier for this form
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(PaymentMethodForm)
