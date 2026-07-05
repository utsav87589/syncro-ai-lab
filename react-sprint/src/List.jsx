export default function List({item, category = "cars"}){

    // const cars = ['Tesla Model 3', 'Toyota Camry XSE', 'Chevrolet Suburban RST', "Ford Mustang 5.0 v8"];
    // const carItem = cars.map(car => <li>{car}</li>)

    const carItem = item.map(car => <li>{car}</li>)

    return(<>

        <h3>{category}</h3>
        <ol>{carItem}</ol>

    </>
    );
}