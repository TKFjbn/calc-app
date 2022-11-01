import React from "react"
import PropTypes from "prop-types"
import "./Button.css"


//componente Button 
//type = button-long-text
const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text)}>
         <span>{text}</span>
    </button>
)

//validacion Button
/*
Valida el tipo de valor de type que sea string.
valida el tipo de valor de text que sea striong y que sea requerifo.
valida que el click handler tenga su funcion y sea requerida
*/
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button