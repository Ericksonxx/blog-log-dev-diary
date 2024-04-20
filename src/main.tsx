import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './app/store.ts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//files import
import AppHome from './App.tsx'
import Auth from './comps/auth/Auth.tsx'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <AppHome />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
