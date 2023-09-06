import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Random from './15-random/Random'
import Clock from './18-clock/Clock'
import Stopwatch from './19-stopwatch/Stopwatch'
import Tabla from './21-tabla/Tabla';
import Futbol from './22-futbol/Futbol';
import Pokemon from './23-pokemon/Pokemon';
import Todos from './25-todos/Todos';
import Galeria from './26-unsplash/Galeria';
import Blog from './27-blog/Blog';
import Ciphers from './28-ciphers/Ciphers';
import Trivia from './29-trivia/Trivia';
import Contador from './31-contador/Contador';
import Toggle from './32-render-condicional/Toggle';
import Countdown from './33-countdown/Countdown';
import Unform from './42-unform/Unform';
import Navbar from './14-navbar/Navbar';
import datos from './datos';
import './index.css';

const links = [
  {name: 'About', url: 'about.html'},
  {name: 'Home', url: 'home.html'},
  {name: 'Contact', url: 'contact.html'}
];

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/clock',
    element: <Clock />
  },
  {
    path: '/stopwatch',
    element: <Stopwatch />
  },
  {
    path: '/random',
    element: <Random />
  },
  {
    path: '/tabla',
    element: <Tabla datos={datos} />
  },
  {
    path: '/pokemon',
    element: <Pokemon />
  },
  {
    path: '/contador',
    element: <Contador />
  },
  {
    path: '/todos',
    element: <Todos />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/ciphers',
    element: <Ciphers />
  },
  {
    path: '/trivia',
    element: <Trivia />
  },
  {
    path: '/futbol',
    element: <Futbol />
  },
  {
    path: '/toggle',
    element: <Toggle />
  },
  {
    path: '/galeria',
    element: <Galeria />
  },
  {
    path: '/countdown',
    element: <Countdown />
  },
  {
    path: '/unform',
    element: <Unform />
  },
  {
    path: '/navbar',
    element: <Navbar links={links} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)





