import React from "react";

const Services = props => {
  return (
    <ul className={props.data.forpatients ? "forpatients" : "fordoctors"}>
      <h4 className="title-services"> {props.data.title} </h4>
      <h1 className="title-services">{props.data.text}</h1>
      {props.data.option && (
        <select className="button-patients">
          
          {props.data.option.map(el => (
            <option>{el} </option>
          ))}
        </select>
      )}
      <img width="350px" className="img-services" src={props.data.source} />
    </ul>
  );
};

export default Services;
