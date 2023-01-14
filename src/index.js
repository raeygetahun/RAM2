import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';
import Home from './pages/Home';
import Service from './pages/Service';
import Employment from './pages/Employment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
    {
    path: "Gallary",
    element: <Gallary/>,
  },
  {
    path: "Service",
    element: <Service/>,
  },
  {
    path: "Employment",
    element: <Employment/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
