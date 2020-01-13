import React from 'react';



const Introduction = (props) =>{
    return (
<div>
<div className="title-introduction">
<img width="50px"src={props.data.source}/>  
<h1 className="title-green">{props.data.title}</h1>
</div>
<div className="paragraph">
<p className="paragraphstyle">{props.data.pg1} </p>  
<p className="paragraphstyle" >{props.data.pg2}</p>
</div>
</div> 


       ) }
export default Introduction;
