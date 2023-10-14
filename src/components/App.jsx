import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card"; 
import data from "./data";
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
           <section className="cards-list" >{cards}

           </section>
            
            



        </div>
    )
}