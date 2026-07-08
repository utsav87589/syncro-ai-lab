// import React, {useState} from 'react';

// export default function MyComponent(){

//     let [count, changeCounter] = useState(0);

//     const increaseCount = () => {
//         // changeCounter(count + 1);
//         changeCounter(c => c + 1);
//         changeCounter(c => c + 1);
//         changeCounter(c => c + 1);
//     }

//     const resetCount = () => {
//         changeCounter(count = 0);
//     }

//     const decreaseCount = () => {
//         // changeCounter(count - 1);
//         changeCounter(c => c - 1);
//         changeCounter(c => c - 1);
//     }

//     return(<>
//         <div>
//             <h2>{count}</h2><br></br>
//             <button onClick={increaseCount}>Increment</button>
//             <button onClick={resetCount}>reset</button>
//             <button onClick={decreaseCount}>Decrement</button>
//         </div>
//     </>);

// }


//------------updating the objects

// import React, {useState} from 'react';
// export default function MyComponent(){

//     let [car, setCar] = useState({make : "Ford", model : "Mustang 5.0 v8", year : 2026});

//     const handleYearchange = (e) => {
//         setCar(c => ({...c, year : e.target.value}))
//     }

//     return(<>
//         <p>Your favourite car is : {car.make} {car.model} {car.year}</p>
//         <input type='number' value={car.year} onChange={handleYearchange}></input>
//     </>);
// }


//--------------updating the arrays

import React, {useState} from "react";

export default function MyComponent(){

    const [cars, setCars] = useState(["Mustang", "Tesla", "Camry", "Civic"]);

    function addNewCar(){
        const newCarValue = document.getElementById("car-input").value;
        document.getElementById("car-input").value = "";

        setCars(c => [...c, newCarValue]);
    }

    return(<>
        <h2>My Fav cars are : </h2>
        <ul>
            {cars.map((car, index) => 
            <li key = {index}>
                {car}
            </li>
            )}
        </ul>
        <input type="text" id="car-input" placeholder="enter any new car"></input>
        <button onClick={addNewCar}>Add car</button>
    </>);
}