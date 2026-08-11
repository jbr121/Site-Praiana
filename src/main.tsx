import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { asset } from './lib/asset'

document.documentElement.style.setProperty(
  '--img-charter',
  `url('${asset('images/charter-praiana.png')}')`,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
