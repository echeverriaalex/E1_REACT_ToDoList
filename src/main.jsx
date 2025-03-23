import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoContextProvider } from './context/context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </StrictMode>
)