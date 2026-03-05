import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState.jsx";

function App() {
  return (
    <NoteState>
      <>
        <Navbar />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </>
    </NoteState>
  );
}

export default App;