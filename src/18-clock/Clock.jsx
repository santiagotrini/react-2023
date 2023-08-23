import '../App.css';
import { useState, useEffect } from 'react';

function Clock() {
    const fechaInicial = new Date();
    const [fecha, setFecha] = useState(fechaInicial);

    function tick() {
        const nuevaFecha = new Date();
        setFecha(nuevaFecha);
    };


    useEffect(() => {
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, []);
    
    
    return (
        <>
        <h1>
            {fecha.getHours().toString().padStart(2,0)}:
            {fecha.getMinutes().toString().padStart(2,0)}:
            {fecha.getSeconds().toString().padStart(2,0)}
        
        </h1>
        <h3>{fecha.toLocaleDateString('es-AR')}</h3>
        </>
    )
}  

export default Clock;