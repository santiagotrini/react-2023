// el primer input es usuario
// el segundo es password
// cuando envias el form mostrar un alert con 
// user y pass
// los componentes del form deben ser componentes
// controlados
import { useState } from 'react';
function Unform(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  function handleUserChange(event) {
    setUser(event.target.value);
  }
  function handlePassChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();  // no refresh
    console.log('hola enviado');
    alert(user + ' ' + password);  // el alert
    console.log(user + ' ' + password);
    setUser('');
    setPassword('');         // blanquear form
  }
  return (
    <form className="unform" onSubmit={handleSubmit}>
      <h2>Un formulario</h2>
      <input 
        value={user} 
        onChange={handleUserChange} 
        type="text" 
        placeholder="user"
      />
      <br />
      <input 
        value={password} 
        onChange={handlePassChange} 
        type="password" 
        placeholder="pass"
      />
      <br />
      <input type="submit" value="ingresar" />
    </form>
  );
}

export default Unform;