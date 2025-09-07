import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoaded, signUp, setActive } = useSignUp();
  console.log("this is register page");
  const handleSubmit = async (e) => {
    e.preventDefualt();
    console.log("this is register page");
    try {
      await signUp.create({
        email: email,
        password,
      });

      await setActive({ session: signUp.createdSessionId });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col justify-between items-center"
      >
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">sign up</button>
      </form>
    </>
  );
};

export default Register;
