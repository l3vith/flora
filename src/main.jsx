import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import App from './App.jsx'
import './index.css'
import App1 from './App1.jsx'
import App2 from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <App1 />
    <App2 />
  </React.StrictMode>,
)
