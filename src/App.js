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

function App() {
  const {name} = useContext(AuthProvider)
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/details/:id',
          loader:({params})=>fetch(`http://localhost:5000/serves/${params.id}`),
          element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
        },
        {
          path:'/moredetails',
          element:<PrivateRoute><MoreDetails></MoreDetails></PrivateRoute>
        }
      ]
    }
  ])
  console.log(name)
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
