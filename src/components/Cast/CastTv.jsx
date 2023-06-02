import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTvCast } from "../../redux/actions/tvActions";

const CastTv = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cast = useSelector((state) => state.tv.tvCast);

  useEffect(() => {
    dispatch(getTvCast(id));
  }, [dispatch, id]);

  return (
    <div className="min-h-screen text-white pt-96 md:pt-72 p-8 md:p-14">
      <h2 className="text-white py-5 text-2xl">Cast</h2>
      <div className=" grid grid-cols-3 md:flex gap-5">
        {cast.slice(0, 6).map((cast) => (
          <div key={cast?.id} className="">
            {cast.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast?.profile_path}`}
                className="w-56 md:w-40 flex flex-wrap justify-center mx-auto rounded-md"
              />
            )}
            <p className="text-white text-sm text-center pb-10 p-2 ">
              {cast?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastTv;
