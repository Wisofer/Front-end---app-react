import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io(); // La conexión con el servidor Socket.IO se establecerá a través del proxy configurado en 'vite.config.js'

const App = () => {
  useEffect(() => {
    console.log('La conexión fue exitosa :D', socket);

    // Aquí puedes agregar el código para escuchar eventos o enviar mensajes al servidor
    socket.emit('customEvent', { data: 'Hola, servidor!' });

    socket.on('customResponse', (response) => {
      console.log('Respuesta del servidor:', response);
    });

    // Importante: No olvides limpiar los listeners cuando el componente se desmonte
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>Hola amigos :D</p>
    </div>
  );
};

export default App;