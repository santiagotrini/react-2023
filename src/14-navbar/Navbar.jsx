import { useEffect } from 'react';

function Navbar(props) {
  console.log(props.links);
  useEffect(() => {
    alert('ya cargue el componente!');
  }, []);
  return (
    <nav>
      <h2>Barra de navegacion</h2>
      <ul>
        {props.links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;