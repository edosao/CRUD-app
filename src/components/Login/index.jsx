import { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "admin@example.com";
  const adminPassword = "qwerty";

  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("qwerty");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        title: "Logging in...",
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          setIsAuthenticated(true);
          localStorage.setItem("is_authenticated", true);

          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You are now logged in.",
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Incorrect email or password.",
            timer: 1500,
            showConfirmButton: false,
          });
        },
      });
    }
  };

  return (
    <div className="max-w-[60%] mx-auto text-[#4e4e4e]">
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleLogin}>
        <h1 className="text-4xl font-semibold">Admin Login</h1>
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="w-full border rounded border-[#dedede] py-2 px-4 focus:outline-none focus:ring-2 
         focus:ring-[#0366ee] focus:ring-offset-2 transition"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="w-fit bg-[#0366ee] hover:bg-[#0356d6] text-base text-white py-2 px-4 rounded font-bold"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
