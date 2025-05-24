import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import './App.css'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const location = useLocation(); {/* USED BY ROUTES */}

  return (
    <>
      <AnimatePresence mode="wait"> {/* ENABLES ANIMATION */}
        <Routes location={location} key={location.pathname}> {/* LOCATION & KEY ALSO ENABLES ANIMATION */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
