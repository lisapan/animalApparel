import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import normalizePhone from './utils/normalizePhone'

const required = value => value ? undefined : 'Required'
const isZipcode = value => value && /(^\d{5}$)/.test(value) ? undefined: 'Invalid zipcode'
const isPhone = value => value && /^\d{3}[-\s]\d{3}[-\s]\d{4}$/.test(value) ? undefined: 'Invalid Phone Number'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const ShippingAddressForm = (props) => {
  const { handleSubmit, invalid, pristine, reset, submitting } = props
  return (
    <div>
      <h3>Shipping Info</h3>
      <form onSubmit={handleSubmit}>
        <Field name="shippingFirstName" type="text" component={renderField} label="First Name*" validate={[required]}/>
        <Field name="shippingLastName" type="text" component={renderField} label="Last Name*" validate={[required]}/>
        <Field name="shippingAddressLine1" type="text" component={renderField} label="Address Line 1*" validate={[required]}/>
        <Field name="shippingAddressLine2" type="text" component={renderField} label="Address Line 2"/>
        <Field name="shippingCity" type="text" component={renderField} label="City" validate={[required]}/>
        <Field name="shippingState" component="select" label="State*" validate={[required]}>
            <option>Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </Field>
        <Field name="shippingZipcode" type="text" component={renderField} label="Zipcode*" validate={[required, isZipcode]}/>
        <Field name="shippingPhone" type="text" component={renderField} label="Phone*" normalize={normalizePhone} validate={[required, isPhone]}/>
      <div>
        <button type="submit" disable={invalid} className="next">Next</button>
      </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'checkout',     // a unique identifier for this form
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(ShippingAddressForm)
