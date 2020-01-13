import React from 'react';


const Stats = (props) => {
    return (<li>
    <h1 className="title-green" >{props.data.title1}</h1>
    <h1 className="title-green" >{props.data.title2}</h1>
    <p>{props.data.p}</p>
    <img className="image-stats" src={props.data.source}></img>
    </li>

    )

}


export default Stats;