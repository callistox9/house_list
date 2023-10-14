import React from "react";
import data from "./data";
export default function (props)
{
   let badgeText;
   if(props.openSpots==0)
{
    badgeText="SOLD OUT";
}else if(props.location=="Online")
{
    badgeText ="Online";
}




    return (
        <div className="card">
            <img src={`src/images/${props.img}`} className="card-image-1"/>
        
        
<div className="card-stats">
{
    //Syntax of immediately invoked function
  (() => {
    if (badgeText) {
      return <div className="card-badge">{badgeText}</div>;
    }
    // You can return null or any other fallback UI element if the condition is not met
   else if(props.location === "Online")
   {
    return <div className="card-badge">"Online"</div>;
   }
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
