import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthProvider } from './context/ContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './context/layOut/Main';
import Home from './componant/pages/Home/Home';

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
