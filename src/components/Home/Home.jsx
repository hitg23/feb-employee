import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleLogInNavigate = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>Welcome to the Employee App</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        doloremque quas, consequatur consectetur odio tempore dolorum
        perspiciatis. Officiis, dolorem commodi?
      </p>
      <button onClick={handleLogInNavigate}>Log In</button>
      <button>Sign In</button>
    </div>
  );
}
