import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../redux/actions/authActions";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };
      dispatch(googleLogin(data, navigate));
    },
  });
  return (
    <div>
      <button
        onClick={() => login()}
        className="bg-gray-300 justify-center rounded-xl text-white py-2 w-full h-10 hover:scale-105 duration-300 flex gap-2"
      >
        <FcGoogle className="pt-1 h-5 scale-125" />
        {buttonText}
      </button>
    </div>
  );
};

export default GoogleLogin;
