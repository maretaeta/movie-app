import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function RedirectProtected({ children }) {
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn || user) {
      navigate("/");
    }
  }, [isLoggedIn, navigate, user]);

  return children;
}

export default RedirectProtected;
