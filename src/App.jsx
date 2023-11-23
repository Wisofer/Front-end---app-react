import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://servidor-lake.vercel.app');

const App = () => {
  useEffect(() => {
    // Manejo de eventos y lógica de los sockets
    socket.on('connect', () => {
      console.log('Conectado al servidor');
      
      // Lógica adicional al establecer la conexión
    });

    socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      
      // Lógica adicional al desconectarse
    });

    // Suscribirse a eventos o enviar mensajes al servidor
    socket.emit('mensaje', 'Hola servidor', (respuesta) => {
      console.log('Respuesta del servidor:', respuesta);
    });

    // Limpiar los eventos al desmontar el componente
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