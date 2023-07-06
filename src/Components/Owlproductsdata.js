import React from 'react'
import "./owlproducts.css"

function Owlproductsdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="imag" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default Owlproductsdata
