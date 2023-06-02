import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ViewMovie from "./pages/View/ViewMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetail from "./pages/Detail/MovieDetail";
import ViewTv from "./pages/View/ViewTv";
import TvDetail from "./pages/Detail/TvDetail";
import RedirectProtected from "./components/RedirectProtected";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Protected from "./components/Protected";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewMovie" element={<ViewMovie />} />
            <Route path="/viewTv" element={<ViewTv />} />
            <Route
              path="/login"
              element={
                <RedirectProtected>
                  <Login />
                </RedirectProtected>
              }
            />
            <Route
              path="/register"
              element={
                <RedirectProtected>
                  <Register />
                </RedirectProtected>
              }
            />
            <Route
              path="/movieDetail/:id"
              element={
                <Protected>
                  <MovieDetail />
                </Protected>
              }
            />
            <Route
              path="/tvDetail/:id"
              element={
                <Protected>
                  <TvDetail />
                </Protected>
              }
            />
          </Routes>
          <Footer />

          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
};
export default App;
