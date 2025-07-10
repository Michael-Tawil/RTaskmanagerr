import {JSX, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";

// Define the view type for better type safety
type ViewType = "list" | "calendar";

function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [view, setView] = useState<ViewType>("list");

  return (
    <>
      <ToastContainer position="top-right" autoClose={500} />
      <Navbar 
        view={view} 
        setView={setView} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
      />
      <Dashboard 
        view={view} 
        searchQuery={searchQuery}
      />
    </>
  );
}

export default App;