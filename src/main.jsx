import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/appliedJobs/appliedJobs';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/jobdetails/:id",
        element: <JobDetails></JobDetails>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/jobs",
        loader: async () => {return fetch('jobData.json')},
        element: <AppliedJobs></AppliedJobs>

      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {path:"*",
      element: <NotFound></NotFound>
    }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
