import React from "react";
import data from "./data";
export default function (props)
{
    return (
        <div className="card">
            <img src={`src/images/${props.img}`} className="card-image-1"/>
        
        
<div className="card-stats">
    <img src="src/images/red-star.png" className="red-star"></img>
    <span>{props.rating}</span>
    <span>({props.reviewCount  })*</span>
    <span>{props.location}</span>


</div>
<div>
    <p>{props.title}</p>
    <p className="Card-Price">From ${props.price}</p>
    
    
</div>



</div>

    )
}
