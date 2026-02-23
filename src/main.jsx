import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: '1px solid #42A5F5',
            padding: '16px',
            color: '#42A5F5',
          },
          iconTheme: {
            primary: '#42A5F5',
            secondary: '#fff',
          },
        }}
      />
  </BrowserRouter>,
)
