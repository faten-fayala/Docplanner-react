import React from 'react';


const Offices = (props) => {
    return (<li className="offices-bloc">
        <img className="offices-img" src={props.data.source}></img>
        <div className="sous-titre-img">
            <h2  >{props.data.title}</h2>
            <button className="offices-button">{props.data.button}</button>
        </div>
    </li>

    )

}


export default Offices;