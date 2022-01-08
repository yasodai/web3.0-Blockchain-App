import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
function NavBarItem({ title, classProps }) {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
}
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-32 cursor-pointer"
        />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu ? (
          <HiMenuAlt4
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-white md:hidden cursor-pointer w-7 h-7"
          />
        ) : (
          <>
            <AiOutlineClose
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-white md:hidden cursor-pointer w-7 h-7"
            />
            <ul
              className="z-10 fixed -top-0 -right-2 w-[50vw] h-screen md:hidden 
              bg-black/40 backdrop-blur-sm 
            flex flex-col gap-y-4 justify-start items-end text-white animate-slide-in"
            >
              <li className="text-lg w-full my-2">
                <AiOutlineClose
                  onClick={() => setToggleMenu(!toggleMenu)}
                  className="cursor-pointer w-7 h-7"
                />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => (
                  <NavBarItem key={item + index} title={item} />
                )
              )}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
