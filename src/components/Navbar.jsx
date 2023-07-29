import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Typewriter from 'typewriter-effect';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  // Timeout function to remove cursor once the logo animation ends.
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName('Typewriter__cursor')[0].innerHTML = '';
    }, 1500);
  }, []);

  return (
    <>
      <nav className="navbar flex bg-white py-4 px-8 w-full justify-between items-center relative">

        {/* LOGO */}
        <div className=" md:text-4xl lg:text-4xl text-black hover-effect">
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 100,
              strings: "CLOCKOMORO",
            }}
          />
        </div>

        <div
          className={`md:hidden cursor-pointer transform transition-transform hover:scale-110`}
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="text-2xl" />
        </div>

        <div className={`hidden md:flex items-center gap-8`}>
          {/* NAV LINKS */}
          <ul className="flex gap-4 text-2xl">
            <li className="transition-colors hover:text-blue-500 hover:cursor-pointer hover-effect duration-100">Home</li>
            <li className="transition-colors hover:text-blue-500 hover:cursor-pointer hover-effect duration-100">About</li>
            <li className="transition-colors hover:text-blue-500 hover:cursor-pointer hover-effect duration-100">Contribute</li>
          </ul>

          {/* DARKMODE ICON */}
          <div>
            <CiDark className="text-[28px] hover:cursor-pointer hover:scale-110 transition-all duration-200" />
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden absolute top-16 right-8 bg-white border rounded shadow-lg">
            <ul className="flex flex-col gap-4 text-2xl p-4">
              <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">Home</li>
              <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">About</li>
              <li className="transition-colors duration-300 ease-in-out hover:text-blue-500">Contribute</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
