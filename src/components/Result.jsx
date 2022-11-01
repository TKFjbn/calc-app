import React from "react";
import PropTypes from "prop-types"

//función
const Result = ({value}) => (
    <div className="result">
            {value}
    </div>
)


//validación
Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}


//exportar
export default Result