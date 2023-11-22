import React from 'react'
import io from 'socket.io-client'



const socket = io("http://localhost:3000")

const App = () => {
  return (
    <div>
        <p>Hola amigos :D</p>
    </div>
  )
}

export default App
