import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useTransactions } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

import { Loader } from "./";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px]  flex justify-center items-center outline outline-1 text-sm font-light text-white";

function Input({ placeholder, name, type, value, handleChange }) {
  const [_value, setValue] = useState("");
  return (
    <input
      step="0.0001"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="my-2 w-full rounded-sm p-2 outline-none text-white border-none text-sm  bg-transparent backdrop-blur-sm"
      style={{ background: "rgba(255, 255, 255, 0.05)" }}
    />
  );
}

function Welcome() {
  const { connectWallet, currentAccount, onSubmit, isLoading } =
    useTransactions();

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          {!currentAccount && (
            <button
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <ul
            className="grid sm:grid-cols-3 grid-cols-2
          w-full mt-10 
          border-2 rounded-2xl overflow-hidden text-white"
          >
            <li className={companyCommonStyles}>Reliability</li>
            <li className={companyCommonStyles}>Security</li>
            <li className={companyCommonStyles}>Ethereum</li>
            <li className={companyCommonStyles}>Web 3.0</li>
            <li className={companyCommonStyles}>Low Fees</li>
            <li className={companyCommonStyles}>Blockchain</li>
          </ul>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
          <div
            className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5
          eth-card bg-white/5 backdrop-blur-sm
          "
          >
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ">
                  <SiEthereum className="h-6 w-6 text-white" />
                </div>
                <BsInfoCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="p-5 sm:w-96 w-full flex flex-col justify-start items-center
            bg-[#273259]/40 rounded-2xl shadow-sm shadow-black/20"
          >
            <Input placeholder="Address To" name="addressTo" type="text" />
            <Input placeholder="Amount (ETH)" name="amount" type="number" />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" />
            <Input placeholder="Enter Message" name="message" type="text" />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="submit"
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
