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
import List from "./List";

export default function App(){

  const sedans = ['Tesla Model 3', 'Toyota Camry XSE'];
  const suvs = ['Chevy Suburabn', 'Toyota Land Cruiser', 'Lincoln Navigator'];
  const sports = ['Ford Mustang 5.0 v8'];

  return(<>

  <h2>Some of my favporite cars are : </h2>
  <List item = {sedans} category = "sedans"/>
  <List item = {suvs} category = "suvs"/>
  <List item = {sports}/>

  </>);
}