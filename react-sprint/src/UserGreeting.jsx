export default function UserGreeting({isLoggedIn, username = "Stranger"}){

    const welcomeMessage = <h2>Welcome {username}</h2>;
    const loginPrompt = <h2>Please login to continue</h2>;
    
    return(
        isLoggedIn ? welcomeMessage : loginPrompt
    );

}