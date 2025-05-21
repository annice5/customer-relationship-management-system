import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Leads from './pages/leads';
import Email from './pages/email';
import FollowUp from './pages/followUp';
import Analytics from './pages/analytics';
import LeadScoring from './pages/leadScoring';
import Invoice from './pages/invoice';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
    
  },
  {
    path: '/register',
    element: <Register/>
  },

  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/leads',
    element: <Leads/>
  },
  {
    path: '/email',
    element: <Email/>
  },
 
   {
    path: '/followUp',
    element: <FollowUp/>
  },
  {
    path: '/analytics',
    element: <Analytics/>
  },
  {
    path: '/leadScoring',
    element: <LeadScoring/>
  },
   {
    path: '/invoice',
    element: <Invoice/>
  }



])

function App(){
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
