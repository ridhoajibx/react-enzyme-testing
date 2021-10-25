import React from 'react';
import "./headline.scss";

function Headline(props) {
    let { title, desc } = props;
    if(!title){
        return null
    }
    return (
        <div data-test="headline-test" className="headline">
            <h1 data-test="title">{title}</h1>
            <p data-test="desc">{desc}</p>
        </div>
    )
}

export default Headline
