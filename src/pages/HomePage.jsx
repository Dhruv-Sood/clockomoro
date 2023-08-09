import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";
function HomePage() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <>
      <Navbar />
      <div className={`h-remaining p-5 sm:p-10 flex flex-col-reverse lg:flex-row items-center justify-around lg:justify-between gap-8 lg:gap-10 ${darkMode? "bg-black text-white" : "bg-white text-black"}`}>
        <div className="flex flex-col gap-5 sm:gap-10 cutive-mono items-center">

          {/* WEB_TITLE */}
          <div>
            <h1 className={`text-3xl sm:text-5xl tracking-wider font-bold gradient`}>
              CLOCKOMORO
            </h1>
          </div>

          {/* WEB_DESCRIPTION */}
          <div className="text-sm sm:text-lg md:text-2xl sm:leading-[2rem] md:leading-[2.5rem] text-center">
            Clockomoro is an open-source web application designed to enhance
            developers' productivity and time management using the Pomodoro
            Technique. The Pomodoro Technique is a time management method that
            involves breaking work into intervals, typically 25 minutes long,
            separated by short breaks.
          </div>

          {/* TIMER BUTTON */}
          <Link to="/timer">
          <div className={`tektur hover-effect tracking-wider p-2 w-[120px] grid place-content-center hover:opacity-70 hover:cursor-pointer transition-all duration-[0.2s] skew-x-[-12deg] rounded-lg font-semibold ${darkMode?"bg-white text-black" : "bg-red-400 text-white" }`}>
            Timer
          </div>
          </Link>
        </div>

        {/* CLOCK IMAGE */}
        <div className="lg:block">
          <img src="/clock.png" alt="" className="min-w-[200px] w-[300px] sm:min-w-[400px] sm:w-[400px] rounded-xl" />
        </div>
      </div>
    </>
  );
}
export default HomePage;
