import { useState } from "react"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import { ToastContainer } from "react-toastify"

function App() {

  const [searchQuery,setSearchQuery] = useState("")
  const [view, setView] = useState("list")

  return (
    <>
    <ToastContainer position="top-right" autoClose={500}/>
    <Navbar view={view} setView={setView} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <Dashboard view={view} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </>
  )
}

export default App
