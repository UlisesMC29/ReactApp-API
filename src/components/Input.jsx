import React from "react";
import PropTypes from 'prop-types'
export const Input = (props) => {
    return <input {...props} />;

};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
