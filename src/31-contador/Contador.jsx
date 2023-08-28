import { useState } from 'react';
function Contador(props) {

  let [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1); // esto se ejecuta de manera asincrona
    // console.log(clicks);
  }

  return (
    <>
      <h2>El ejemplo mas simple posible de <code>useState</code></h2>
      <button onClick={handleClick}>Contar</button>
      <h1>{clicks}</h1>  
    </>
  );  
}

export default Contador;