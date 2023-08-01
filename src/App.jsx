import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <TimerPage />
    </>
  );
}

export default App;
