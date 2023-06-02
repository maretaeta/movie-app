import React, { useState } from "react";
import bg from "../assets/imgLogin.jpg";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authActions";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  const clikLogin = (i) => {
    navigate(`/login`);
  };

  const handleClickBack = (i) => {
    navigate(`/`);
  };

  return (
    <section class="min-h-screen flex items-center justify-center p-5">
      <div className="bg-gray-100 rounded-2xl shadow-lg max-w-4xl p-8 ">
        <div className="text-right">
          <CgClose
            className="text-red-600 text-2xl"
            onClick={() => handleClickBack()}
          />
        </div>
        <div class="flex items-center">
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#002D74] text-center pb-8">
              Register
            </h2>

            <form action="" class="flex flex-col gap-4" onSubmit={onSubmit}>
              <input
                class="p-2 rounded-xl border"
                type="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                class="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div class="relative">
                <input
                  class="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="relative">
                <input
                  class="p-2 rounded-xl border w-full"
                  type="Password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Register Now
              </button>
            </form>

            <div class="mt-10 text-xs flex justify-center items-center text-[#002D74]">
              <p>Have an account?</p>
              <button
                class="py-2 px-2 underline  hover:scale-110 duration-300"
                onClick={clikLogin}
              >
                LogIn
              </button>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src={bg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
