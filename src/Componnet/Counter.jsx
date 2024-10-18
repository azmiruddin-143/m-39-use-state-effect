
export default function Counter ({nam,cont}) {
    console.log(nam);
    return (
        <div>
            <h1>Player List {cont}</h1>
            <button onClick={nam}> Add Player</button>
        </div>
    )
}