
export default function Singleusers({usersingle}) {
    const address = usersingle.address
    const{name,email} = usersingle
    const{city,zipcode} = address
    

    return(
        <div className="players">
            <h1>Name : {name} </h1>
            <h1>Email : {email} </h1>
            <h1>City : {city} </h1>
            <h1>City : {zipcode} </h1>
        </div>
    )
}