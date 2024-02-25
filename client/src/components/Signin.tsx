import OAuth from "./OAuth";
import React from "react";

interface SigninProps {
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signin: React.FC<SigninProps> = ({ setShowRegister }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="/icons/user-icon.svg" width={30} height={30} alt="" />
        </span>
        <input
          type="text"
          placeholder="USERNAME"
          className="w-full py-2 pl-12 pr-2 rounded-md focus:outline-none"
        />
      </div>
      <div className="relative flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="/icons/key-icon.svg" width={30} height={30} alt="" />
        </span>
        <input
          type="text"
          placeholder="USERNAME"
          className="w-full py-2 pl-12 pr-2  rounded-md focus:outline-none"
        />
      </div>
      <button className="bg-black bg-opacity-25 p-2 rounded-lg text-white text-xl font-semibold hover:bg-opacity-50">
        Signin
      </button>
      <div className="flex gap-4 justify-center items-center text-white">
        <div className="bg-black bg-opacity-25 w-full h-[1px]" />
        <h1>or</h1>
        <div className="bg-black bg-opacity-25 w-full h-[1px]" />
      </div>
      <OAuth />
      <button
        className="text-white underline"
        onClick={() => setShowRegister(true)}
      >
        I don't have an account
      </button>
    </div>
  );
};
export default Signin;
