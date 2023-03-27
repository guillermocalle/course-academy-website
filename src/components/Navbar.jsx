import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[80px] z-50 bg-white border-b">
      <div className="xl:w-1/6 text-center">
        <img src={logo} className="h-[25px]" />
      </div>

      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Support</a>
        <a href="#">Platform</a>
        <a href="#">Pricing</a>

        <button className="flex justify-between items-center bg-transparent px-6 gap-2">
          <img src={lock} /> Login
        </button>
        <button className="px-6 py-3 rounded-md bg-[#4979d4] text-white font-bold">
          Sign Up For Free
        </button>
      </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <img src={close} /> : <img src={hamburgerMenu} />}
      </button>
    </header>
  );
};

export default Navbar;
