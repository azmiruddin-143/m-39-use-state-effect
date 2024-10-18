

export default function Singlepost({ singlepost }) {
    console.log(singlepost);
    return (
        <div>
            <h1>User Id :{singlepost.id}</h1>
            <p>Title :{singlepost.title} </p>
        </div>
    )
}