import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostCast } from "../../redux/actions/post";

const CastMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cast = useSelector((state) => state.post.postCast);

  useEffect(() => {
    dispatch(getPostCast(id));
  }, [dispatch, id]);

  return (
    <div className="relative pt-40 lg:pt-60 p-8">
      <div>
        <div className="">
          <h2 className="text-white py-5 text-2xl">Cast</h2>
          <div className="grid grid-cols-3 md:flex gap-5">
            {cast.slice(0, 6).map((cast) => (
              <div key={cast?.id} className="">
                {cast.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast?.profile_path}`}
                    className="w-56 md:w-40 flex flex-wrap justify-center mx-auto rounded-md"
                  />
                )}
                <p className="text-white text-sm text-center pb-10 p-2">
                  {cast?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastMovie;
