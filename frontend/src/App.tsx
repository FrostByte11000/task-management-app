import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'



import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-area">
        <header className="app-header">
          <h1>TaskFlow</h1>
        </header>

        <main className="app-content">
          <h2>Dashboard</h2>
          <p>Welcome to your task manager.</p>
        </main>
      </div>
    </div>
  )
}

export default App