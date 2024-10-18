import Developer from "./Developer";


export default function AllDeveloper({developer}) {
    return (
        <div>
             <h2>Name :  Age :</h2>

             {

                developer.map(azmir => <Developer developer = {azmir} ></Developer>)
             }
        </div>
    )
}