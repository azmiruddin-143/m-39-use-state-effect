import Singlepets from "./Singlepets";

export default function Allpets({pets}) {

    return (
        <div>
            <h1>All Categories name</h1>

            {

                pets.map(petsloop => <Singlepets petstrasfer = {petsloop} ></Singlepets>)
            }

        </div>
    )
}