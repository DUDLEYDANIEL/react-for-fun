import React from "react";
function Food() {
    const food1 = "Orange";
    const food2 = "apple";
    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    
    );
}
export default Food