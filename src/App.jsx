import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import HeroSection from "./Pages/HeroSection";

// Extra Page Component
function About() {
  return <h2 className="text-3xl font-bold text-center mt-10">This is About Page</h2>;
}

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 text-gray-900 px-6">
      {/* Logos */}
      <div className="flex gap-10 mb-10">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="w-24 hover:rotate-12 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-24 hover:-rotate-12 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        Vite + React + Tailwind
      </h1>

      {/* Navigation */}
      <nav className="mb-6">
        <Link to="/" className="mx-3 font-bold text-blue-700 hover:underline">Home</Link>
        <Link to="/about" className="mx-3 font-bold text-blue-700 hover:underline">About</Link>
      </nav>

      {/* Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-96 text-center border-4 border-purple-400">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
        >
          Count is {count}
        </button>

        <p className="mt-6 text-gray-600">
          Edit <code className="text-purple-600 font-bold">src/App.jsx</code> and save to test HMR.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
