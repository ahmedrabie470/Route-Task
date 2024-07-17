import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Users from './Components/Users/Users';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element:<Home/>},
        { path: "/home", element:<Home/>},
        { path: "/users", element:<Users/>},
        { path: "/dashboard/:customerId", element:<Dashboard/>},
        { path: "*", element:<NotFound/>},
    ],
    },
  ]);
  return (
    <RouterProvider router={routers}>
    </RouterProvider>
  );
}

export default App;
