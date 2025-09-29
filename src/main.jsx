 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "next-themes"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <ThemeProvider attribute="class">
      <App />
</ThemeProvider>
    </BrowserRouter>
)
