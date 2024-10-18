
import { useState } from 'react'
import './App.css'
import Counter from './Componnet/Counter'
import Allplayers from './Componnet/Allplayers'
import AllDeveloper from './Componnet/AllDevelopers'
import Allpost from './Componnet/Allpost'
import Singlepost from './Componnet/Singlepost'

function App() {
  const [count, setcount] = useState(0)


  // const playercount = () => {
  //   let countplayer = count + 1
  //   setcount(countplayer)
  // }
  // const playercount2 = () => {
  //   let countplayer = count2 + 1
  //   setcount2(countplayer)
  // }

  const firstalert = () => {
    alert("First Alert")
  }

  const secondalert = () => {
    alert("Second Alert")
  }

  // const players = [
  //   { name: "Azmir Uddin", selary: 20, skils: "Sticker" },
  //   { name: "Lionel Messi", selary: 97, skils: "Sticker" },
  //   { name: "Alvarez", selary: 23, skils: "Forword" },
  //   { name: "naymer", selary: 32, skils: "Forword" },
  //   { name: "Molina", selary: 25, skils: "Defends" },
  //   { name: "Mbappy", selary: 24, skils: "Forword" },
  //   { name: "Suarej", selary: 36, skils: "Sticker" },

  // ]



  const develoeprs = [
    { name: "Azmir Uddin", selary: 18000, skils: "Front end Developer" },
    { name: "Abduk Korim", selary: 45000, skils: "Full steack Developer" },
    { name: "Md Saim", selary: 40000, skils: "Full steack Developer" },
    { name: "Asif", selary: 18000, skils: "Front end Developer" },
    { name: "Rj Sakil", selary: 16000, skils: "Front end Developer" },
    { name: "Md Shoan", selary: 36000, skils: "Full steack Developer" },
    { name: "Salman", selary: 19000, skils: "Front end Developer" },

  ]


  return (
    <>
      <h2>Button Click and Alert Show</h2>
      <button onClick={firstalert}>First Alert</button>
      <button onClick={secondalert}>Second Alert</button>
      <button onClick={() => { alert("Alert Three") }}>Therd Alert</button>

      {/* <h1>Player List {count} </h1>
            <button onClick={playercount}> Add Player</button>

          <Counter nam = {playercount2} cont = {count2}></Counter> */}


      {/* {
        players.map(transfar => <Allplayers obj = {transfar} ></Allplayers>)
        
      } */}

      {/* <AllDeveloper developer = {develoeprs}></AllDeveloper> */}

      {/* <h1>Player List {count} </h1>
      <button onClick={() => setcount(count + 1)} > Add Player</button> */}

      <Allpost></Allpost>

    </>
  )

}

export default App
