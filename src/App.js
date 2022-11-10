import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthProvider } from './context/ContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './context/layOut/Main';
import Home from './componant/pages/Home/Home';
import Login from './componant/Shard/Login/Login';
import SignUp from './componant/Shard/SignUp/SignUp';

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
