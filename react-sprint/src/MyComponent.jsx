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

// import React, {useState} from "react";

// export default function MyComponent(){

//     const [cars, setCars] = useState(["Mustang", "Tesla", "Camry", "Civic"]);

//     function addNewCar(){
//         const newCarValue = document.getElementById("car-input").value;
//         document.getElementById("car-input").value = "";

//         setCars(c => [...c, newCarValue]);
//     }

//     return(<>
//         <h2>My Fav cars are : </h2>
//         <ul>
//             {cars.map((car, index) => 
//             <li key = {index}>
//                 {car}
//             </li>
//             )}
//         </ul>
//         <input type="text" id="car-input" placeholder="enter any new car"></input>
//         <button onClick={addNewCar}>Add car</button>
//     </>);
// }


//---------------updating the array of objects

// import React, {useState} from "react";

// export default function MyComponent(){

//     const [cars, setCars] = useState([{make : "Ford", model : "Mustang v8", year : 2026}]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");

//     function handleAddCar(){
//         const newcar = {make : carMake, model : carModel, year : carYear};

//         setCars(c => [...c, newcar]);

//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }

//     function handleCarMake(e){
//         setCarMake(e.target.value);
//     }

//     function handleCarModel(e){
//         setCarModel(e.target.value);
//     }

//     function handleCarYear(e){
//         setCarYear(e.target.value);
//     }

//     return(<>
//         <h3>Updating the array of objects</h3>
//         <h3>List of car objects</h3>

//         <ul>
//             {cars.map((car, index) => 
//             <li key = {index}>
//                 {car.make} {car.model} {car.year}
//             </li>
//             )}
//         </ul>

//         <input type = "number" value={carYear} onChange={handleCarYear}></input><br></br>
//         <input type="text" value={carMake} onChange={handleCarMake} placeholder="Enter car make"></input><br></br>
//         <input type="text" value={carModel} onChange={handleCarModel} placeholder="Enter car model"></input><br></br>
//         <button type="submit" onClick={handleAddCar}>Add Car</button>
//     </>);
// }


//-------------useEffects() hook

// import React, {useEffect, useState} from "react";

// export default function MyComponent(){

//     const [count, setCount] = useState(0);

//     // useEffect(() => {
//     //     document.title = `count : ${count}`;
//     // }, [])
    
//     useEffect(() => {
//         document.title = `count : ${count}`;
//     }, [count])

//     function addCount(){
//         setCount(c => c + 1);
//     }

//     return(<>
//         <h2>Use effect hook</h2>
//         <p>count : {count}</p>
//         <button onClick={addCount}>add count</button>
//     </>);
// }


//---------useRef() hook

import React, {useEffect, useRef} from "react";

export default function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
        console.log('Component rendered!');
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
    }

    return(<>
        <div>
            <button onClick={handleClick1}>Clicke me!</button><br></br>
            <input ref={inputRef1}></input><br></br>

            <button onClick={handleClick2}>Clicke me!</button><br></br>
            <input ref={inputRef2}></input><br></br>
        </div>
    </>);
}