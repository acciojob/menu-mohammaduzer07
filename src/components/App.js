import React, { useState } from "react";
import Menu from "./Menu";
import MenuDisplay from "./MenuDisplay";
import "../styles/App.css";
const App = () =>{

    const [category, setCategory] = useState("all");

    return (
        <>
            <Menu  setCategory={setCategory} />
            <MenuDisplay category={category} />
        </>
    )

}

export default App
