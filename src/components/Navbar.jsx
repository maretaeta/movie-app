import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, logout } from "../redux/actions/authActions";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const { isLoggedIn, token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getProfile());
    }
  }, [dispatch, isLoggedIn, token]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <>
      {!isLogin && !isRegister && (
        <div
          className={`fixed w-full left-0 top-0 px-5 md:px-10 p-2 drop-shadow-lg z-10 
    ${sticky ? "bg-black text-white h-16 items-center" : "text-white"}`}
        >
          <div className="flex items-center justify-between z-10 gap-6 cursor-pointer h-14  ">
            <div className="flex">
              <h4 className="md:text-2xl lg:p-4 text-xl font-bold text-red-600 hover:text-white">
                iPLAY+
              </h4>
            </div>
            <div className="lg:text-lg text-white">
              <ul className="hidden md:flex font-bold gap-3 md:gap-5">
                <li
                  className="hover:text-red-600 relative cursor-pointer transition-all 
               before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
               before:duration-500 before:bg-red-600 hover:before:w-full hover:before:opacity-100"
                >
                  <Link to="/" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li
                  className="hover:text-red-600 relative cursor-pointer transition-all 
               before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
               before:duration-500 before:bg-red-600 hover:before:w-full hover:before:opacity-100"
                >
                  <Link
                    to="/viewMovie"
                    smooth={true}
                    offset={-200}
                    duration={500}
                  >
                    Movies
                  </Link>
                </li>
                <li
                  className="hover:text-red-600 relative cursor-pointer transition-all 
               before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
               before:duration-500 before:bg-red-600 hover:before:w-full hover:before:opacity-100"
                >
                  <Link to="/viewTv" smooth={true} offset={-200} duration={500}>
                    TV
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`text-gray-900 md:block hidden  rounded-bl-full`}>
              <ul className="flex flex-row items-center">
                {isLoggedIn ? (
                  <>
                    <div className="relative">
                      <div
                        className="flex gap-2 items-center px-2 justify-center font-bold lg:text-lg text-white"
                        onClick={toggleDropdown}
                      >
                        Hi, {user?.name}
                        <MdKeyboardArrowDown className="text-2xl pt-1" />
                      </div>
                      {isOpen && (
                        <div className="absolute right-0 z-10 w-64 mt-2  bg-white divide-y divide-gray-100 rounded-md shadow-lg">
                          <ul className="py-2">
                            <li className="px-4 py-2 pb-4 flex gap-3 text-gray-700 ">
                              <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                class="w-8 rounded-full"
                                alt="Avatar"
                              />
                              <div className="text-xs">
                                <span>{user?.name}</span>
                                <p>{user?.email}</p>
                              </div>
                            </li>
                            <li className="">
                              <button
                                className=" text-red-600 text-sm border-t w-full py-1 p-3 border-gray-100"
                                onClick={() => dispatch(logout(navigate))}
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <li className="py-5 pr-4  ">
                      <button className="w-20 text-red-600 text-center h-7 text-sm border border-red-600 rounded-full hover:scale-110 ">
                        <Link to="/login">Login</Link>
                      </button>
                    </li>
                    <li className="">
                      <button className="h-7 text-sm px-2 bg-red-600 rounded-full text-white w-20 text-center hover:scale-110">
                        <Link to="/register">Register</Link>
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className={`z-[999] ${
                open ? "text-gray-900" : "text-gray-100"
              } text-3xl md:hidden m-5 mt-6`}
            >
              <ion-icon name="menu"></ion-icon>
            </div>
            <div
              className={`text-gray-900 md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 ${
                open ? "right-0" : "right-[-100%]"
              }`}
            >
              <ul className="flex flex-col justify-center items-center h-full gap-7 text-lg">
                <li className="">
                  <Link to="/">Home</Link>
                </li>
                <li className="">
                  <Link
                    to="/viewMovie"
                    smooth={true}
                    offset={-200}
                    duration={500}
                  >
                    Movies
                  </Link>
                </li>
                <li className="">
                  <Link to="/viewTv" smooth={true} offset={-200} duration={500}>
                    TV Series
                  </Link>
                </li>

                <div>
                  {/* User */}
                  {isLoggedIn ? (
                    <>
                      <ul className="pt-20">
                        <li className="pb-2 flex gap-3 text-gray-700 ">
                          <img
                            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                            class="w-8 rounded-full"
                            alt="Avatar"
                          />
                          <p className="text-xs">
                            Hi, {user?.name}
                            <p>{user?.email}</p>
                          </p>
                        </li>
                        <li className="px-11 border-b border-gray-300 pb-4">
                          <button
                            className=" text-red-600 text-sm"
                            onClick={() => dispatch(logout(navigate))}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <div>
                      <ul className="items-center text-center">
                        <li className="py-5 ">
                          <button className="w-20 text-red-600 text-center h-7 text-sm border border-red-600 rounded-full hover:scale-110">
                            <Link to="/login">Login</Link>
                          </button>
                        </li>
                        <li className="">
                          <button className="h-7 text-sm px-2 bg-red-600 rounded-full text-white w-20 text-center hover:scale-110">
                            <Link to="/register">Register</Link>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
