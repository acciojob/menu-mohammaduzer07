import React, { useState } from "react";
import Dishes from "./Items";


const MenuDisplay = ({category}) =>{
    let [items, setItems] = useState(Dishes)
    console.log(category)
    return (
        <>
            <div id="main" className="menu-div">
                {
                    items.map((item) =>{
                        (item.category === category || category === "all") &&
                        (
                            <div data-test-id={`menu-item-${category}`} className="item-card">
                                <h1>{item.title}</h1>
                                <p>{item.price}</p>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default MenuDisplay