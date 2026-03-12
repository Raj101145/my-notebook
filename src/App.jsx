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

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <div className="container mt-4">
              <Home />
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="container mt-4">
              <About />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div className="container mt-4">
              <Login />
            </div>
          }
        />

        <Route
          path="/signup"
          element={
            <div className="container mt-4">
              <Signup />
            </div>
          }
        />

      </Routes>

    </NoteState>
  );
}

export default App;