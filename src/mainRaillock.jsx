import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRaillock from './AppRaillock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRaillock />
  </StrictMode>,
)
