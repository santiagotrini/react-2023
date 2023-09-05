import { useState } from 'react';
function Galeria() {
  const [url, setUrl] = useState('https://source.unsplash.com/random?landscape');
  const [busqueda, setBusqueda] = useState('landscape');
  function handleChange(event) {
    setBusqueda(event.target.value);
    setUrl('https://source.unsplash.com/random?'+event.target.value);
  }   
  const style = { 
    width: '100px',
    height: '100px',
    objectFit: 'cover' 
  };
  return (
    <>
      <h1>Galeria</h1>
      <input onChange={handleChange} value={busqueda} placeholder="fotos de que queres?" type="text" />
      <div className="galeria">  
        <img style={style} src={url+'&1'} />
        <img style={style} src={url+'&2'} />
        <img style={style} src={url+'&3'} />
        <img style={style} src={url+'&4'} />
        <img style={style} src={url+'&5'} />
        <img style={style} src={url+'&6'} />
      </div>
    </>
  );
}

export default Galeria;