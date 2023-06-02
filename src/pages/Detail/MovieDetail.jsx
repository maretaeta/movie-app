import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../redux/actions/post";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import CastMovie from "../../components/Cast/CastMovie";

const MovieDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  const handleClickBack = () => {
    navigate(`/`);
  };

  return (
    <div className="w-full h-full lg:pb-20">
      <div className="md:pb-20">
        <img
          src={`https://image.tmdb.org/t/p/original/${postDetails?.backdrop_path}`}
          className="h-96 w-full object-cover opacity-50 "
        />

        <div className="absolute top-16 p-3 w-full mx-auto lg:px-10 shadow-o">
          <div className="py-8 px-5 md:px-10">
            <HiOutlineArrowNarrowLeft
              className="text-white scale-150 "
              onClick={() => handleClickBack()}
            />
          </div>

          <div className="flex gap-4 justify-items-center items-center">
            <div className="lg:pt-2 md:p-10 justify-items-center items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${postDetails?.poster_path}`}
                alt="movie"
                className="w-48 md:w-80 lg:w-96 rounded-xl "
              />
            </div>
            <div className="">
              <h1 className="text-2xl w-full text-white font-bold pt-5 sm:text-4xl md:pt-10 lg:text-5xl">
                {postDetails?.title}
              </h1>
              <div className="py-3 flex md:gap-5 gap-2">
                <p className="border text-sm border-white text-white w-7 h-6 text-center rounded-sm">
                  {postDetails?.original_language}
                </p>
                <p className="flex gap-2 text-base text-yellow-500">
                  <AiFillStar className="h-5 text-base pt-1 lg:pt-1" />
                  {postDetails?.vote_average}
                </p>
              </div>
              <p className="text-white flex gap-2 md:pt-1 text-xs ">
                <FaCalendarAlt className="h-5 text-center" />
                {postDetails?.release_date}
              </p>

              <p className="text-white text-justify w-44 sm:w-80 md:text-base md:w-[50vw] text-xs py-3 ">
                {postDetails?.overview}
              </p>

              <button className="flex gap-2 items-center p-2 lg:p-4 bg-red-600 text-center rounded-xl w-28 lg:w-36 h-7 lg:h-7 text-white text-xs lg:text-sm">
                <ion-icon name="play"></ion-icon>
                <p>Watch Trailer</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CastMovie />
      </div>
    </div>
  );
};

export default MovieDetail;
