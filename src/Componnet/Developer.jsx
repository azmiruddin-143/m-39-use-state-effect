
export default function Developer({developer}) {
    const {name,skils,selary} = developer
    return(
        <div>
             <h2>Name : {name}   Sliks :  {skils} Selary : {selary} </h2>
        </div>
    )
}