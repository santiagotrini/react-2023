import { useState } from 'react';

const Todos = props => {
  
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  }

  function deleteTarea(e) {
    console.log(e.target);
    let borrar = e.target.parentElement.previousElementSibling.textContent;
    let array = tareas.filter(t => t !== borrar);
    setTareas(array);
  }

  function handleChange(event) {
    console.log(event.target.value); 
    setNuevaTarea(event.target.value);
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <form className="newTask" onSubmit={handleSubmit}>
        <input  
          type="text" 
          value={nuevaTarea}
          onChange={handleChange}
        />
        <input type="submit" value="Guardar" />
      </form>
      <ul className="task-list">
        {tareas.map(tarea => <Tarea deleteTarea={deleteTarea} texto={tarea} />)}
      </ul>
    </>
  );

};

function Tarea(props) {



  return (
    <li className="tarea">
      <input className="cuadradito" type="checkbox" />
      <label>{props.texto}</label>
      <button onClick={props.deleteTarea}>
        <i className='fa-solid fa-trash'></i>
      </button>
    </li>
  );
}

export default Todos;