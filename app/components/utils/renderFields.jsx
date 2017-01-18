import React from 'react'

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="checkoutFormField">
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export const renderStateSelect = ({input, label, meta: {touched, error} }) => (
    <div className="checkoutFormField">
        <label>{label}</label>
        <div>
            <select {...input}>
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
            </select>
        </div>
    </div>
)


export const renderCreditCardSelect = ({input, label, meta: {touched, error} }) => (
  <div className="checkoutFormField">
     <label>{label}</label>
     <div>
         <select {...input}>
           <option>--Select Card--</option>
           <option value="Visa">Visa</option>
           <option value="MasterCard">MasterCard</option>
           <option value="AmericanExpress">American Express</option>
           <option value="Discover">Discover</option>
         </select>
     </div>
 </div>
)

export const renderMonthSelect = ({input, label, meta: {touched, error} }) => (
  <div className="checkoutFormField">
    <label>{label}</label>
    <div>
       <select {...input}>
         <option>--Select Month--</option>
         <option value="1">Janaury</option>
         <option value="2">February</option>
         <option value="3">March</option>
         <option value="4">April</option>
         <option value="5">May</option>
         <option value="6">June</option>
         <option value="7">July</option>
         <option value="8">August</option>
         <option value="9">September</option>
         <option value="10">October</option>
         <option value="11">November</option>
         <option value="12">December</option>
       </select>
    </div>
 </div>
)

export const renderYearSelect = ({input,label, meta: {touched, error} }) => (
  <div className="checkoutFormField">
    <label>{label}</label>
    <div>
      <select {...input}>
        <option>--Select Year--</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
 </div>
)
