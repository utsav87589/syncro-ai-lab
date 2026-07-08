import React, {use, useState} from "react";

export default function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return(<>

        <div style = {{backgroundColor : color}}>

            <h1>Color Picker</h1>

            <p>Pick a color : </p>
            <input type="color" onChange={handleColorChange}></input>
            <p>you picked : {color}</p>

        </div>

    </>);
}