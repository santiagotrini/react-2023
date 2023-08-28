import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clock from './18-clock/Clock'
import Stopwatch from './19-stopwatch/Stopwatch'
import Random from './15-random/Random'
import Tabla from './21-tabla/Tabla';
import Pokemon from './23-pokemon/Pokemon';
import Contador from './31-contador/Contador';
import datos from './datos';
import './index.css'
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
