import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Task1 from './pages/Task1'
import Task2 from './pages/Task2'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/task-1',
    element: (
      <Layout>
        <Task1 />
      </Layout>
    )
  },
  {
    path: '/task-2',
    element: (
      <Layout>
        <Task2 />
      </Layout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
