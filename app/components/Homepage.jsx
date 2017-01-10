'use strict'

import React from 'react'

export default props => {
  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-12">
          {/*promo*/}
          <h1>Promo</h1>
          <img src="https://www.rover.com/blog/wp-content/uploads/2014/12/hoodies-900x540.jpg" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {/*women*/}
          <h1>Women</h1>
        </div>
        <div className="col-md-6">
          {/*men*/}
          <h1>Men</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/*dogs*/}
          <h1>Dogs</h1>
        </div>
      </div>
    </div>
  );
}
