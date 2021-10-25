import React from 'react';
import { Button } from '../Buttons';
import "./headline.scss";

function Headline(props) {
    let { title, desc } = props;
    return (
        <div data-test="headline-test" className="headline">
            <h1 data-test="title">{title && title}</h1>
            <p data-test="desc">{desc && desc}</p>

            <Button onClick={e => {
                e.preventDefault()
                console.log("test button")
            }} type="button" className="btn-primary">Post</Button>
        </div>
    )
}

export default Headline
