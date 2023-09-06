// definir un componente Countdown que devuelva un h1 y un h2
// el h1 muestra una cuenta regresiva
// el h2 aparece cuando termina la cuenta regresiva y dice Ya!
// 1) Definir el componente solo mostrando los dos elementos
// ignorar todo tipo de funcionalidad
// 2) Agregar a este componente una variable de estado para 
// mostrar la cuenta regresiva
// 3) Mostrar el h2 solamente cuando time es 0
// 4) Cuando carga el componente se inicia una cuenta regresiva
// que hook usamos para eso? que funcion de JS usamos para
// que time vaya contando para atras cada 1 segundo
// que pare cuando llegue a cero

import { useState, useEffect } from 'react';
function Countdown(props) {
  const [ time, setTime ] = useState(10);
  
  useEffect(() => {  
    let id = setInterval(() => {
      if (time <= 0) {
        clearInterval(id);
      } else {
        setTime(t => t-1);
      }  
    }, 1000);
    return () => clearInterval(id);
  }, [time]);
  
  return (
    <>
      <h1>{time}</h1>
      {!time && <h2>Cero!</h2>}
    </>
  );
}

export default Countdown;
