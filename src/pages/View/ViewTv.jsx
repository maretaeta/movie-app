import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";

const ViewTv = () => {
  const [getTv, setGetTv] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPopularTv();
  }, []);

  const getPopularTv = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_POSTS_API}/tv/top_rated`,
        {
          params: {
            api_key: import.meta.env.VITE_TMBD_KEY,
          },
        }
      );
      setResults(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (getTv.trim() === "") {
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_POSTS_API}/search/tv`,
        {
          params: {
            api_key: import.meta.env.VITE_TMBD_KEY,
            query: getTv,
          },
        }
      );
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDetail = (id) => {
    navigate(`/tvDetail/${id}`);
  };

  return (
    <div className="min-h-screen text-white py-10 pt-16 p-10">
      <div className="pt-28">
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center">
          Popular TV
        </h1>
      </div>

      <div className="max-w-screen-lg mx-auto py-10">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pl-4 text-gray-800"></div>

            <div className="flex gap-2 pb-14 md:px-8">
              <input
                type="text"
                value={getTv}
                onChange={(e) => setGetTv(e.target.value)}
                placeholder="search tv here ...."
                className="bg-gray-700 text-gray-200 placeholder:text-gray-200 placeholder:italic rounded-full px-10 h-8 w-full focus:outline-none focus:ring-2"
              />

              <button
                type="submit"
                className=" text-white text-2xl placeholder:text-black rounded-full px-4 hover:scale-110"
              >
                <TbSearch />
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            results.map((tv) => (
              <div key={tv.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                  alt={tv.title}
                  className="hover:opacity-75 transition ease-in-out duration-150 rounded-md"
                  onClick={() => handleClickDetail(tv.id)}
                />
                <div className="mt-2">
                  <a href="#" className="text-lg mt-2 hover:text-gray-300">
                    {tv.name}
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTv;
