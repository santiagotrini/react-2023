import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clock from './18-clock/Clock'
import Stopwatch from './19-stopwatch/Stopwatch'
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
