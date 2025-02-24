import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const mockUsers = [
  { email: "admin", password: "123", roleName: "ADMIN" },
  { email: "expert", password: "123", roleName: "EXPERT" },
  { email: "user", password: "123", roleName: "MEMBER" },
];

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("userData", JSON.stringify(user));

      switch (user.roleName) {
        case "MEMBER":
        case "EXPERT":
          navigate("/home");
          break;
        case "ADMIN":
          navigate("/dashboard");
          break;
        default:
          navigate("/login");
      }
    } else {
      setError("Sai tên người dùng hoặc mật khẩu!");
    }
  };

  return (
    <div className="pt-28 justify-center h-screen bg-[#325343] flex px-44 overflow-hidden">
      <div className="px-8 mt-2 pr-20 w-[55%]">
        <h2 className="text-3xl font-bold text-center mt-1 text-white mb-2">
          Login
        </h2>
        <p className="text-lg font-medium text-center text-white mb-6">
          Welcome back MarriTalk 👋👋👋
        </p>
        {error && <p className="text-red-500 text-center mb-4 ">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4 px-5">
          <div className="mb-5 ">
            <label className="block text-white text-base mb-1 font-medium">
              Email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" Email user"
              className="w-full px-5 py-3 cursor-pointer rounded-2xl bg-white  focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>

          <div className="mb-5">
            <label className="block text-white  text-base mb-1 font-medium">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password user"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-2xl bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <div className="text-white text-base font-medium flex justify-end mb-5">
            Forgot password?
          </div>
          <div className="flex justify-between space-x-10 mb-8">
            <button
              type="submit"
              className="w-1/2 border-2 border-white text-white text-base font-bold py-3 rounded-2xl cursor-pointer transition duration-500 opacity-100 hover:opacity-55"
            >
              Login
            </button>
            <button className="w-1/2  text-[#325343] bg-white text-base font-bold py-3 rounded-2xl cursor-pointer transition duration-500 opacity-100 hover:opacity-60">
              Sign up
            </button>
          </div>
          <div className="text-white text-center mb-6 font-medium">
            ___Or login with Google___
          </div>
          <button className="w-full flex justify-center text-[#325343] bg-white text-base font-bold py-3 rounded-2xl cursor-pointer transition duration-500 opacity-100 hover:opacity-60">
            <FcGoogle className="text-2xl mr-2" />
            Google
          </button>
        </form>
      </div>
      <div className="w-[45%] mt-2 h-screen ">
        <img
          src="src/assets/Login.jpg"
          alt="MarriTalk Logo"
          className="w-full h-[75%] border-2 border-white rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Login;
