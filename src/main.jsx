import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import ZoochatPage from './pages/Zoochat'
import UrlparserPage from './pages/Urlparser'

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
    path: '/zoochat',
    element: (
      <Layout>
        <ZoochatPage />
      </Layout>
    )
  },
  {
    path: '/urlparser',
    element: (
      <Layout>
        <UrlparserPage />
      </Layout>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
