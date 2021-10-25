import React from 'react';

export const Button = (props) => {
    const { children } = props;
    return (
        <button {...props}>
            <span>{children}</span>
        </button>
    )
}
