'use strict'

import React, {Component} from 'react'
import Navbar from './Navbar'

export default props => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  );
}
