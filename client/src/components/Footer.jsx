import React from "react";

function Footer() {
  return (
    <div className="flex flex-col w-full justify-between items-center text-white p-4 gradient-bg-footer">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center my-4">
        <div className="flex-[0.5] flex justify-center items-center">
          <img src="/images/logo.png" alt="log" className="w-32" />
        </div>
        <ul className="w-full flex-1 flex justify-evenly mt-5 sm:mt-0">
          <li className="mx-2 cursor-pointer">Market</li>
          <li className="mx-2 cursor-pointer">Exchange</li>
          <li className="mx-2 cursor-pointer">Tutorials</li>
          <li className="mx-2 cursor-pointer">Wallets</li>
        </ul>
      </div>
      <div className="text-sm text-center mt-5">
        <p>Come join us</p>
        <p>info@kryptomastery.com</p>
      </div>

      <div className="w-full sm:w-[90%] h-[0.25px] bg-gray-400 mt-5"></div>
      <div className="w-full sm:w-[90%] flex justify-between items-center text-xs mt-3">
        <p>@kryptomastery2022</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
