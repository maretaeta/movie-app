import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <>
      {!isLogin && !isRegister && (
        <footer className="w-full  mx-auto px-10 p-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center sm:mb-0">
              <span className="self-center text-2xl font-semibold text-red-600">
                iPLAY+
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-200 sm:mb-0 ">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/viewMovie"
                  smooth={true}
                  duration={500}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Movie
                </Link>
              </li>
              <li>
                <Link
                  to="/viewTv"
                  smooth={true}
                  duration={500}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  TV
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200 sm:mx-auto lg:my-5" />
          <span className="block text-sm text-gray-200 text-center">
            © 2023 MovieTime . All Rights Reserved.
          </span>
        </footer>
      )}
    </>
  );
};

export default Footer;
