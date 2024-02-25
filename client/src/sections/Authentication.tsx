import { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function Authentication() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <section className="h-screen w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8 flex flex-col justify-center items-center">
      <div className="h-[7%] w-full bg-black bg-opacity-25 flex justify-start items-center">
        <img src="/icons/market-icon.svg" width={50} height={50} alt="" />
      </div>
      <div className="h-[73%] w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/4 bg-black p-4 bg-opacity-25 rounded-xl">
          {showRegister ? (
            <Signup setShowRegister={setShowRegister} />
          ) : (
            <Signin setShowRegister={setShowRegister} />
          )}
        </div>
      </div>
      <div className="h-[20%] w-full bg-black bg-opacity-25">dasd</div>
    </section>
  );
}
