import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const isCreditCard = value => value && /^\d{16}$/.test(value) ? undefined: 'Invalid card number'
const isSecurityCode = value => value && /^\d{3}$/.test(value) ? undefined: 'Invalid security code'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const PaymentMethodForm = (props) => {
  const { handleSubmit, invalid, pristine, reset, submitting, previousPage } = props
  return (
    <div>
      <h3>Payment Method</h3>
      <form onSubmit={handleSubmit}>
        <Field name="paymentCreditCard" component="select" label="Credit Card*" validate={[required]}>
            <option>--Select Card--</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="AmericanExpress">American Express</option>
            <option value="Discover">Discover</option>
        </Field>
        <Field name="paymentCardNumber" type="text" component={renderField} label="Card Number*" validate={[required, isCreditCard]}/>
        <Field name="paymentCardName" type="text" component={renderField} label="Name on Card*" validate={[required]}/>
        <Field name="paymentExpirationMonth" component="select" label="Expiration Month*" validate={[required]}>
            <option>--Select Month--</option>
            <option value='1'>Janaury</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
        </Field>
        <Field name="paymentExpirationYear" component="select" label="Expiration Year*" validate={[required]}>
            <option>--Select Year--</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
        </Field>
        <Field name="paymentSecurityCode" type="text" component={renderField} label="Security Code*" validate={[required, isSecurityCode]}/>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={invalid} className="next">Review</button>
      </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'checkout',     // a unique identifier for this form
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(PaymentMethodForm)
