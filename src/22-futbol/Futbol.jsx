import { useState } from 'react';

function Futbol(props) {
  const equipos = [
    'Newells', 
    'Independiente',
    'Estudiantes',
    'Argentinos Jrs', 
    'San Lorenzo',
    'Zaracho FC',
    'Jorge Newbery',
    'Zaracho FC Filial Asuncion'
  ];

  const [busqueda, setBusqueda] = useState('');
  const [lista, setLista] = useState(equipos);
  
  
  
  const handleChange = e => {
    setBusqueda(e.target.value);
    let array = equipos.filter(cosa => cosa === e.target.value);
    setLista(array);
  };


  return (
    <>
      <input 
        type="text"
        value={busqueda}
        onChange={handleChange}
      />
      <ul>
        {lista.map(equipo => <li key={equipo}>{equipo}</li>)}
      </ul>
    </>
  );
}

export default Futbol;