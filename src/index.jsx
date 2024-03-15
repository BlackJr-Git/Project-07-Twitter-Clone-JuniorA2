import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './components/layout';
import {Home,Profile,Notifications,Explore, Messages, Bookmarks, Lists, Page404} from "./pages" ;
import TweetProvider from './contexts/tweet-provider';
import UserProvider from './contexts/user-Provider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider> 
                  <TweetProvider>  
                      <Layout />
                  </TweetProvider> 
              </UserProvider> ,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "/:userName",
        element: <Profile /> ,
      },
      {
        path: "/more",
        element: <Home />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ]
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

