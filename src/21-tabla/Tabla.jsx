function Tabla(props) {
  const { datos } = props; 
  const encabezados = Object.keys(datos[0]);
  console.log(encabezados);

  return (
    <table>
      <thead>
        <tr>
          {encabezados.map(i => <th key={i}>{i}</th>)}  
        </tr>
      </thead>
      <tbody>
        {datos.map(dato =>
        <tr key={dato.id}>
          {encabezados.map(key => <td key={dato[key]}>{dato[key]}</td>)}
        </tr>
        )}
      </tbody>  
    </table>
  );
}

export default Tabla;