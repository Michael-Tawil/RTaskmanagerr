import { useState } from "react"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from "react-toastify"

function App() {

  const [searchQuery,setSearchQuery] = useState("")

  return (
    <>
    <ToastContainer position="top-right" autoClose={2000}/>
    <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <Dashboard searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </>
  )
}

export default App
