import React from 'react';
import "./headline.scss";

function Headline(props) {
    let { title, desc } = props;
    return (
        <div data-test="headline-test" className="headline">
            <h1 data-test="title">{title && title}</h1>
            <p data-test="desc">{desc && desc}</p>
        </div>
    )
}

export default Headline
