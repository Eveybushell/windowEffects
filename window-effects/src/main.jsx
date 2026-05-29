import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FlexibleDisplay from './FlexibleDisplay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlexibleDisplay />
  </StrictMode>,
)
