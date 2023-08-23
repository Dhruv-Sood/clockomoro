
import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"

const NotFound = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`h-screen p-5 flex justify-center items-center gap-8 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        <div className="flex flex-col gap-9 justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-red" style={{lineHeight: 1.5}}>Page Not Found</h1>
          <p className="text-sm sm:text-lg md:text-2xl text-center">
            The page you're looking for does not exist.
          </p>
          <Link to="/">
            <div
              className={`tektur hover-effect tracking-wider p-2 w-[120px] grid place-content-center hover:opacity-70 hover:cursor-pointer transition-all duration-[0.2s] skew-x-[-12deg] rounded-lg font-semibold ${
                darkMode ? "bg-white text-black" : "bg-red-400 text-white"
              }`}
            >
              Home
            </div>
          </Link>
        </div>
        <div className="not-found-image">
          <img src="/notFoundPage.png" className="max-w-[500px]" alt="Not Found"/>
        </div>        
      </div>
    </>
  );
};

export default NotFound;
