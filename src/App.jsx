
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { About,
         HomeLayout,
         Landing,
         Error,
         NewsLetter,
         Cocktail,
         SinglePageError,


  } from './pages';

  import { loader as landingLoader } from './pages/Landing';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <h2>something went wrong...</h2>,
        loader: landingLoader,
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
