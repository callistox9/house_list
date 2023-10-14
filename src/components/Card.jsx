import React from "react";
import data from "./data";
export default function (props)
{
    return (
        <div className="card">
            <img src={`src/images/${props.img}`} className="card-image-1"/>
        
        
<div className="card-stats">
{
    //Syntax of immediately invoked function
  (() => {
    if (props.openSpots === 0) {
      return <div className="card-badge">SOLD OUT</div>;
    }
    // You can return null or any other fallback UI element if the condition is not met
    return null;
  })()
}

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
