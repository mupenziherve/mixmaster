import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Home Page</h2>,
  },
  {
    path: '/about',
    element: <div>
      <h2>About page</h2>
    </div>,
  },
]);

const App = () => {
  return <h1>Mixmaster starter</h1>
}

export default App
