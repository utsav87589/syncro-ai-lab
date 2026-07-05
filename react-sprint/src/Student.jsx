export default function Student({studentName = "ABC", studentCompany = "XYZ Inc.", studentAge = 25}){

    return(
        <div>
            <h2>{studentName}</h2>
            <p>{studentCompany}</p>
            <p>{studentAge}</p>
        </div>
    );
}