import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Jogo from './components/Jogo.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Jogo></Jogo>
  </React.StrictMode>,
)
