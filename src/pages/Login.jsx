import React, { useState } from "react";
import bg from "../assets/imgLogin.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import GoogleLogin from "../components/GoogleLogin";

import { CgClose } from "react-icons/cg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
  };

  const clikRegister = () => {
    navigate(`/register`);
    window.location.reload();
  };

  const handleClickBack = () => {
    navigate(`/`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-5">
      <div className="bg-gray-100 rounded-2xl shadow-lg max-w-5xl p-8">
        <div className="text-right">
          <CgClose
            className="text-red-600 text-2xl"
            onClick={handleClickBack}
          />
        </div>
        <div className="flex items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] text-center">
              Login
            </h2>

            <form action="" className="flex flex-col gap-4" onSubmit={onSubmit}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>

            <div className="py-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-base">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="justify-items-center">
              <GoogleLogin buttonText={"Login with Google"} />
            </div>

            <div className="mt-3 text-sm flex gap-1 justify-center items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button
                className="py-2 underline hover:scale-110 duration-300"
                onClick={clikRegister}
              >
                Register
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img class="rounded-2xl" src={bg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
