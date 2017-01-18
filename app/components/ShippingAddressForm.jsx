import React, { Component, PropTypes } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import normalizePhone from './utils/normalizePhone'
import {renderField, renderStateSelect } from './utils/renderFields'
import { Button } from 'react-bootstrap'

const required = value => value ? undefined : 'Required'
const isZipcode = value => value && /(^\d{5}$)/.test(value) ? undefined: 'Invalid zipcode'
const isPhone = value => value && /^\d{3}[-\s]\d{3}[-\s]\d{4}$/.test(value) ? undefined: 'Invalid Phone Number'


const ShippingAddressForm = (props) => {
  const { handleSubmit, invalid, pristine } = props
  return (
    <div>
        <div className="checkoutFormField">
          <h3>Shipping Info</h3>
        </div>
        <div className="checkoutForm">
          <form onSubmit={handleSubmit}>
            <Field name="shippingFirstName" type="text" component={renderField} label="First Name*" validate={[required]}/>
            <Field name="shippingLastName" type="text" component={renderField} label="Last Name*" validate={[required]}/>
            <Field name="shippingAddressLine1" type="text" component={renderField} label="Address Line 1*" validate={[required]}/>
            <Field name="shippingAddressLine2" type="text" component={renderField} label="Address Line 2"/>
            <Field name="shippingCity" type="text" component={renderField} label="City*" validate={[required]}/>
            <Field name="shippingState" component={renderStateSelect} label="State*" validate={[required]} className="checkoutFormField"/>
            <Field name="shippingZipcode" type="text" component={renderField} label="Zipcode*" validate={[required, isZipcode]}/>
            <Field name="shippingPhone" type="text" component={renderField} label="Phone*" normalize={normalizePhone} validate={[required, isPhone]}/>
          <div className="checkoutFormField">
            <Button className="product-detail next" bsStyle="primary" bsSize="large" type="submit" disable={invalid} >Add Billing Info</Button>
          </div>
          </form>
        </div>
    </div>
  )
}

ShippingAddressForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'checkout',     // a unique identifier for this form
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(ShippingAddressForm)
