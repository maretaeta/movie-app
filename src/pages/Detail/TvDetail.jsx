import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTvsDetails } from "../../redux/actions/tvActions";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CastTv from "../../components/Cast/CastTv";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const TvDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { tvDetails } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getTvsDetails(id));
  }, [dispatch, id]);

  const handleClickBack = () => {
    navigate(`/`);
  };

  return (
    <div>
      <div className="w-full h-full pb-40 lg:pb-20 mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/original/${tvDetails?.backdrop_path}`}
          alt="detailTv"
          className="h-96 w-full object-cover opacity-50 "
        />
        <div className="absolute top-16 p-5 w-full mx-auto lg:px-10 shadow-o justify-center">
          <div className="py-8 px-5 md:px-10">
            <HiOutlineArrowNarrowLeft
              className="text-white scale-150 "
              onClick={() => handleClickBack()}
            />
          </div>

          <div className="md:flex md:gap-8 justify-center mx-auto md:pt-14 lg:p-8">
            <div className="justify-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvDetails?.poster_path}`}
                alt="movie"
                className="w-52 md:w-80 lg:w-96 xl:w-80 rounded-xl flex justify-center mx-auto"
              />
            </div>
            <div className="mx-auto justify-center px-11 md:px-0">
              <h1 className="text-3xl w-full text-white font-bold pt-5 sm:text-4xl md:pt-10 lg:text-5xl">
                {tvDetails?.name}
              </h1>
              <div className="py-3 flex md:gap-5 gap-4">
                <p className="border text-sm border-red-600 text-white w-7 h-6 rounded-sm text-center">
                  {tvDetails?.original_language}
                </p>
                <p className="flex gap-1 text-base text-yellow-500">
                  <AiFillStar className="h-5 text-base pt-1 lg:pt-1" />
                  {tvDetails?.vote_average}
                </p>
              </div>
              <p className="text-white flex gap-2 md:pt-1 text-base ">
                <FaCalendarAlt className="h-5 pt-1 text-center" />
                {tvDetails?.first_air_date}
              </p>

              <p className="text-white text-justify w-full sm:w-80 md:text-base md:w-[50vw] text-xs py-3 ">
                {tvDetails?.overview}
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
        <CastTv />
      </div>
    </div>
  );
};

export default TvDetail;
