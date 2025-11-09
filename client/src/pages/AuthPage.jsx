import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  // Form fields states
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Directly use context
  const { loading, loginUser, signupUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginUser(email, password);
      } else {
        await signupUser(username, email, password, dob);
      }
      // Success actions (optional)
    } catch (err) {
      console.error(err);
    }
  };

  const paperBoxClass =
    "bg-white bg-[url('https://www.transparenttextures.com/patterns/paper-1.png')] p-8 shadow-xl rounded-lg border border-stone-300";

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-transparent bg-[url('https://www.transparenttextures.com/patterns/cork-wallet.png')] p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* --- Main Form --- */}
        <div className={`col-span-1 lg:col-span-2 ${paperBoxClass}`}>
          <h1 className="text-5xl font-bold text-stone-800 mb-8 text-center font-['Kalam',cursive]">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Signup Only */}
            {!isLogin && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label className="block text-2xl font-bold text-stone-700 font-['Kalam',cursive]">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Choose a username..."
                    className="w-full bg-transparent border-b-2 border-stone-400 py-2 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-2xl font-bold text-stone-700 font-['Kalam',cursive]">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b-2 border-stone-400 py-2 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
            )}
            {/* Common Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <label className="block text-2xl font-bold text-stone-700 font-['Kalam',cursive]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b-2 border-stone-400 py-2 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-2xl font-bold text-stone-700 font-['Kalam',cursive]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full bg-transparent border-b-2 border-stone-400 py-2 text-xl text-stone-700 placeholder:text-stone-500 font-['Special_Elite'] focus:outline-none focus:border-amber-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-950 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-['Kalam',cursive] text-2xl"
              disabled={loading}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-8 text-center text-stone-600 font-['Special_Elite'] text-lg">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-amber-800 hover:text-amber-600 ml-2 bg-transparent border-none"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
        {/* Social Login Box */}
        <div
          className={`col-span-1 lg:col-span-1 ${paperBoxClass} flex flex-col justify-center space-y-6`}
        >
          <h2 className="text-3xl font-bold text-stone-700 text-center font-['Kalam',cursive]">
            ...or continue with
          </h2>
          <button className="w-full bg-white hover:bg-stone-50 border-2 border-stone-400 text-stone-700 font-bold py-3 px-6 rounded-lg shadow-sm transition-all duration-200 font-['Special_Elite'] text-lg">
            Login with Google
          </button>
          <button className="w-full bg-white hover:bg-stone-50 border-2 border-stone-400 text-stone-700 font-bold py-3 px-6 rounded-lg shadow-sm transition-all duration-200 font-['Special_Elite'] text-lg">
            Login with GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
