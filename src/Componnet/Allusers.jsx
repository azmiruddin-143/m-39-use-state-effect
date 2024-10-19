import { useEffect, useState } from "react"
import Singleusers from "./Singleusers"

export default function Allusers() {

    const [users , setusers] = useState([])
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(responseuser => responseuser.json())
        .then(usersdata => setusers(usersdata))
        
    },[])
    
    return(

        <div>
            {
                users.map(usersloop => <Singleusers usersingle = {usersloop} ></Singleusers> )
            }
        </div>

    )
}

