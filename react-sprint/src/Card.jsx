import image from './assets/hero.png'

function Card(){
    return(
        <div className = "card">
            <img alt="profile picure" src={image}></img>
            <h1>React JS sprint</h1>
            <p>Aspiring freelancer for building MVP products for the startups</p>
        </div>
    );
}

export default Card