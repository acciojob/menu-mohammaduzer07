import React from "react";


const Menu = ({setCategory}) =>{

    return (
        <>
            <div className="menu-bar">
                <h1>Our Menu</h1>
                <div className="menu-heading">
                    <p onClick={() => setCategory("all")} >All</p>
                    <p id="filter-btn-1" onClick={() => setCategory("breakfast")} >BreakFast</p>
                    <p id="filter-btn-2" onClick={() => setCategory("lunch")} >Lunch</p>
                    <p id="filter-btn-3" onClick={() => setCategory("shakes")} >Shakes</p>
                </div>
            </div>
        </>
    )

}

export default Menu