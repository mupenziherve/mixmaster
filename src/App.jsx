
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { About,
         HomeLayout,
         Landing,
         Error,
         NewsLetter,
         Cocktail,


  } from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'company',
            element: <h2>Our company</h2>,
          },
          {
            path: 'Person',
            element: <h2>Our company</h2>,
          },
        ],
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App;
