import React from 'react';
import { Button } from '../Buttons';
import "./headline.scss";

function Headline(props) {
    let { title, desc } = props;
    return (
        <div data-test="headline-test" className="headline">
            <h1 data-test="title">{title && title}</h1>
            <p data-test="desc">{desc && desc}</p>

            <Button onSubmit={e => e.preventDefault()} type="button" className="btn-primary" buttonText="Post" />
        </div>
    )
}

export default Headline
