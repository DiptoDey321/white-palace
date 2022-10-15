import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Compontent/Home/Home';
import Layout from './Compontent/Layout/Layout';
import Rooms from './Compontent/Rooms/Rooms';

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
        // {
        //   path:'/topics',
        //   element : <Topics></Topics>,
        // },
        // {
        //   path:'/statistics',
        //   loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        //   element : <Statistics></Statistics>
        // }
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
