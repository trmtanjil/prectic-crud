import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainRout from './Root/MainRout.jsx';
import Home from './Component/Home.jsx';
import AllUser from './Component/AllUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout> </MainRout>,
    children:[
      {
        index:true,

        loader:()=>fetch('http://localhost:5000/users'),
        Component:Home,

        },
        {
          path:'alluser',
          Component:AllUser,
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
