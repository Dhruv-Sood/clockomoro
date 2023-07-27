import { CiDark } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi"
function Navbar() {
  return (
    <>
      <nav className="navbar flex bg-white py-4 px-8 w-full justify-between items-center">


        {/* LOGO */}
        <div className=" text-4xl text-black">CLOCKOMORO</div>

        {/* MENU DIV */}
        <div className="flex items-center gap-8">
            {/* NAV LINKS */}
          <ul className="flex gap-4 text-2xl">
            <li>Home</li>
            <li>About</li>
            <li>Contribute</li>
          </ul>

          {/* DARKMODE ICON */}
          <div>
            <CiDark className="text-[28px]" />
          </div>

            {/* HAMBURGER ICON */}
            <div className="hidden">
                      <GiHamburgerMenu  className="text-2xl"/>
            </div>

        </div>
      </nav>
    </>
  );
}
export default Navbar;
