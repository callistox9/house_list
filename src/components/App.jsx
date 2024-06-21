import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card"; 
import data from "./data";
import Footer from "./Footer";
export default function App()
{

    const cards = data.map(item=>{

        return (
            <Card
            key ={item.id}
            {...item}
            //Learn Spread Operator
            />


        )





    })
    return(
        <div>
            <NavBar/>
            <Hero/>
            
           <div className="cards-list" >{cards}
           
           </div>
           
            
            


           <Footer/>
        </div>
    )
}