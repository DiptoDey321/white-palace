import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Compontent/Menus/Home/Home';
import Layout from './Compontent/Layout/Layout';
import Rooms from './Compontent/Menus/Rooms/Rooms';
import Service from './Compontent/Menus/Service/Service';
import Gallery from './Compontent/Menus/Gallery/Gallery';
import News from './Compontent/Menus/News/News';
import About from './Compontent/Menus/About/About';
import Contacts from './Compontent/Menus/Contacts/Contacts';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element : <Layout></Layout>,
      children: [
        {
          path:'/',
          element : <Home></Home>,
        },
        {
          path:'/rooms',
          element : <Rooms></Rooms>,
        },
        {
          path:'/service',
          element : <Service></Service>,
        },
        {
          path:'/gallery',
          element : <Gallery></Gallery>,
        },
        {
          path:'/news',
          element : <News></News>,
        },
        {
          path:'/about',
          element : <About></About>,
        },
        {
          path:'/contact',
          element : <Contacts></Contacts>,
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
