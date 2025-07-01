import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Products from './pages/Products';
import { useContexts } from './context/Contexts';


function App() {
  const {
    theme,
    setTheme,
    handleThemeToggle
  }= useContexts();

  return (
    <>
      <Router>
        <div className={`${theme ? 'bg-gray-100' : 'bg-gray-600'} flex h-screen `}>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="p-4 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
