import { useEffect, useState } from "react"
import Singlepost from "./Singlepost"

export default function Allpost() {

    const [datafetch, setdatafetch] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(fetchdata => setdatafetch(fetchdata))

    }, [])

    return (

        <div>

            {
              datafetch.map(datamap => <Singlepost singlepost={datamap} ></Singlepost>)
            }
        </div>
    )
}