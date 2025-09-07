import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoaded, signUp, setActive } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp.create({
        emailAddress: email,
        password,
      });
      console.log("Signup result:", res);
      console.log("Required fields:", res.requiredFields);
      console.log("Missing fields:", res.missingFields);

      await setActive({ session: signUp.createdSessionId });

      navigate({ to: "/login" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate({ to: "/login" })}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
