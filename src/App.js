import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthProvider } from './context/ContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './context/layOut/Main';
import Home from './componant/pages/Home/Home';
import Login from './componant/Shard/Login/Login';
import SignUp from './componant/Shard/SignUp/SignUp';
import PrivateRoute from './componant/Shard/PrivateRouter/PrivateRoute';
import DetailsPage from './componant/DetailsPage/DetailsPage';
import MoreDetails from './componant/uitlities/MoreDetails/MoreDetails';
import RevewPage from './componant/pages/RevewPage/RevewPage';
import UpdatePage from './componant/pages/UpdatePage/UpdatePage';
import Blog from './componant/pages/Blog/Blog';
import NotFound from './componant/pages/NotFound/NotFound';

function App() {
  const { name } = useContext(AuthProvider)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",

          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: "/details/:id",
          loader: ({ params }) => fetch(`https://assingment-clint-server.vercel.app/serves/${params.id}`),
          element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
        },
        {
          path: '/moredetails',
          element: <PrivateRoute><MoreDetails></MoreDetails></PrivateRoute>
        },
        {
          path: '/orderrevew',
          element: <PrivateRoute><RevewPage></RevewPage></PrivateRoute>
        },
        {
          path: "/update/:id",
          loader: ({ params }) => fetch(`https://assingment-clint-server.vercel.app/update/${params.id}`),
          element: <UpdatePage></UpdatePage>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  console.log(name)
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
