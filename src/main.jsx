import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
