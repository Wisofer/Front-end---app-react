import React from 'react'
import io from 'socket.io-client'



const socket = io("https://servidor-lake.vercel.app")

const App = () => {

  console.log("La conexion fue exitosa :D",socket)
  return (
    <div>
        <p>Hola amigos :D</p>
    </div>
  )
}

export default App
