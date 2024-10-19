


export default function Singlepets({petstrasfer}) {
    return(
        <div>
            <div className="pets">
                <h4>Username : {petstrasfer.Username}</h4>
                <h4>Gender: {petstrasfer.Gender ? petstrasfer.Gender: "Not available" }</h4>
                <h4>Birth: {petstrasfer.Birth ? petstrasfer.Birth :"Not available"}</h4>
                <h4>Price: {petstrasfer.Price ?petstrasfer.Price + "$":"Not available" }</h4>
            </div>
        </div>
    )
}