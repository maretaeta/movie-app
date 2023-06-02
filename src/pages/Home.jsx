import React from "react";
import CardMovie from "../components/Card/CardMovie";
import Movie from "./Movie";
import CardTv from "../components/Card/CardTv";

const Home = () => {
  return (
    <>
      <Movie />
      <CardMovie />
      <CardTv />
    </>
  );
};

export default Home;
