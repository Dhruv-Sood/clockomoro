import { useContext, useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  // Timeout function to remove cursor once the logo animation ends.
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("Typewriter__cursor")[0].innerHTML = "";
    }, 1500);
  }, []);

  return (
    <>
      <nav
        className={`navbar flex py-4 px-6 md:px-8 w-full justify-between items-center relative ${darkMode ? " bg-black text-white" : "bg-white text-black"
          }`}
      >
        {/* LOGO */}
        <div className="text-2xl sm:text-3xl md:text-4xl hover-effect">
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 100,
              strings: "CLOCKOMORO",
            }}
          />
        </div>
        

        {/* HAMBURGER MENU */}
        <div className=" md:hidden flex gap-4 items-center justify-center">
          <div
            className={` cursor-pointer transform transition-transform hover:scale-110`}
            onClick={toggleMenu}
          >
            <GiHamburgerMenu className="text-2xl" />
          </div>
          <div>
            {darkMode ? (
              <GoSun
                className="text-[26px] hover:cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={toggleDarkMode}
              />
            ) : (
              <CiDark
                className="text-[26px] hover:cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={toggleDarkMode}
              />
            )}
          </div>

        </div>

        <div className={`hidden md:flex items-center gap-8`}>
          {/* NAV LINKS */}
          <ul className="flex gap-4 text-2xl">
            <li className="transition-colors hover:text-blue-500 hover:cursor-pointer hover-effect duration-100">
              Home
            </li>
            <li className="transition-colors hover:text-blue-500 hover:cursor-pointer hover-effect duration-100">
              About
            </li>
            <li className="transition-colors hover:text-blue-500 hover:cursor-pointer hover-effect duration-100">
              <a href="https://github.com/Dhruv-Sood/clockomoro" target="_blank" className=" decoration-0">Contribute</a>
            </li>
          </ul>

          {/* DARKMODE/LIGHTMODE ICON */}
          <div>
            {darkMode ? (
              <GoSun
                className="text-[28px] hover:cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={toggleDarkMode}
              />
            ) : (
              <CiDark
                className="text-[28px] hover:cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>

        {showMenu && (
          <div className={`md:hidden absolute top-16 right-8 border rounded shadow-lg ${darkMode ? " bg-black text-white" : "bg-white text-black"}`}>
            <ul className="flex flex-col gap-4 text-2xl p-4">
              <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">
                Home
              </li>
              <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">
                About
              </li>
              <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">
                Contribute
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
