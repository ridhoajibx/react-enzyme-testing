import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
    const { buttonText, onSubmit } = props;
    return (
        <button onClick={onSubmit} data-test="buttonComponent" {...props}>
            <span>{buttonText}</span>
        </button>
    )
}

Button.propTypes = {
    buttonText: propTypes.string,
    onSubmit: propTypes.func
};

export { Button };
