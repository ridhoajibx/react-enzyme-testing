import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
    const { buttontext, onSubmit } = props;
    return (
        <button onClick={onSubmit} data-test="buttonComponent" {...props}>
            <span>{buttontext}</span>
        </button>
    )
}

Button.propTypes = {
    buttontext: propTypes.string,
    onSubmit: propTypes.func
};

export { Button };
