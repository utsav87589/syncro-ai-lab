export default function Button(){
    
    const clickBtn1 = (e, name) => {
        e.target.textContent = 'ouch!'
        console.log('You clicked the button 1');
        console.log(`Stop clicking me ${name}!`);
    }

    const clickBtn2 = (e) => {
        console.log(`You clicked the button 2`)
    }

    return(<>
    <button style = {{marginRight : "8px"}} onClick={(e) => clickBtn1(e, 'Bro')}>Click me</button>
    <button onClick={clickBtn2}>Click me</button>
    </>);
}