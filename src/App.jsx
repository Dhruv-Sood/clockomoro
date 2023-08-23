import "./App.css";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
