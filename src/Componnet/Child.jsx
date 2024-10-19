

export default function Child({transfatchild}) {

    return(
       <div>
         <h1>hbfdb</h1>
         <button onClick={()=>transfatchild("test korlam")}>test child</button>
       </div>
    )
}