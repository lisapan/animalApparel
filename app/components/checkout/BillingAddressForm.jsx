'use strict'

import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import normalizePhone from '../utils/normalizePhone'
import { renderField, renderStateSelect } from '../utils/renderFields'
import { Button } from 'react-bootstrap'

const required = value => value ? undefined : 'Required'
const isZipcode = value => value && /(^\d{5}$)/.test(value) ? undefined: 'Invalid zipcode'
const isPhone = value => value && /^\d{3}[-\s]\d{3}[-\s]\d{4}$/.test(value) ? undefined: 'Invalid Phone Number'

const BillingAddressForm = props => {
  const { handleSubmit, invalid, pristine, previousPage } = props

  return (
    <div>
      <div className="checkoutFormField">
        <h3>Billing Address</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <Field name="billingAddressLine1" type="text" component={renderField} label="Address Line 1*" validate={[required]} />
        <Field name="billingAddressLine2" type="text" component={renderField} label="Address Line 2" />
        <Field name="billingCity" type="text" component={renderField} label="City*" validate={[required]} />
        <Field name="billingState" component={renderStateSelect} label="State*" validate={[required]} />
        <Field name="billingZipcode" type="text" component={renderField} label="Zipcode*" validate={[required, isZipcode]} />
        <Field name="billingPhone" type="text" component={renderField} label="Phone*" normalize={normalizePhone} validate={[required, isPhone]} />
      <div className="checkoutFormField">
        <Button className="product-detail previous" bsStyle="primary" bsSize="large" type="button" onClick={previousPage}>Edit Shipping Address</Button>
        <Button className="product-detail next" bsStyle="primary" bsSize="large" type="submit" disable={invalid} >Add Payment Info</Button>
      </div>
      </form>
    </div>
  )
}

BillingAddressForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  invalid: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'checkout',     // a unique identifier for this form
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(BillingAddressForm)
