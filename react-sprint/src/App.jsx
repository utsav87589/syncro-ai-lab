// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Car from './Car.jsx'
// import Card from './Card.jsx'


//props : they are used to send the data to the child component from the parent component

// import Student from "./Student";

// export default function App() {

//   return(
//     <>
//       <h1>Student data is : </h1>
//       <Student studentName = "Spongebob" studentAge = {22} studentCompany = "Alphabet inc" />
//       <Student studentName = "Patrick" studentCompany = "Craby patty LLC" studentAge={28}/>
//       <Student/>
//     </>
//   );
// }



//---------------Conditional rendering
// allows us to control what gets render based on the critea
// import UserGreeting from "./UserGreeting";

// export default function App(){
//   return(<>
//       <UserGreeting isLoggedIn={true}/>
//       <UserGreeting isLoggedIn={false}/>
//       <UserGreeting isLoggedIn={true} username="Spongebob"/>
//   </>);
// }



//---------------rendering Lists


// allows us to control what gets render based on the critea
// import List from "./List";

// export default function App(){

//   const sedans = ['Tesla Model 3', 'Toyota Camry XSE'];
//   const suvs = ['Chevy Suburabn', 'Toyota Land Cruiser', 'Lincoln Navigator'];
//   const sports = ['Ford Mustang 5.0 v8'];

//   return(<>

//   <h2>Some of my favporite cars are : </h2>
//   <List item = {sedans} category = "sedans"/>
//   <List item = {suvs} category = "suvs"/>
//   <List item = {sports}/>

//   </>);
// }


//------------------click events

// an interaction, when a user clicks on a specific element

// import Button from "./Button";

// export default function App(){
//   return(<>
//     <p>The Buttons are : </p>
//     <Button/>
//   </>);
// }


//----------------React hooks
//----------------v2 : using the updater functions

// they are built in functions that allow us to use React features inside the functional components

// import MyComponent from "./MyComponenet";
// export default function App(){
//   return(<>
//     <MyComponent/>
//   </>);
// }


//---------------onChange events

// event handler used primarily with form elements, triggers a function everytime the value of the input changes

// import OnChange from "./OnChange";

// export default function App(){
//   return(
//     <>
//       <OnChange/>
//     </>
//   );
// }


//-----------------------Color picker program

// import ColorPicker from "./ColorPicker";
// export default function App(){

//     return(<>
//         <ColorPicker/>
//     </>);
// }


//-------------------updating OBJECTS in state
//-------------------updating Arrays in state

// import MyComponent from "./MyComponent";

// export default function App(){

//     return(<>
//         <MyComponent/>
//     </>);
// }


//---------------todo list app

// import ToDo from "./ToDo";

// export default function App(){

//     return(<>
//         <ToDo/>
//     </>);
// }



//-----------useEffect() hooks

import MyComponent from "./MyComponent";

export default function App(){

    return(<>
        <MyComponent/>
    </>);

}