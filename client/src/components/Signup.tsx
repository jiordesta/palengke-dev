import React from "react";

interface SigninProps {
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<SigninProps> = ({ setShowRegister }) => {
  return <button onClick={() => setShowRegister(false)}>Click</button>;
};
export default Signup;
