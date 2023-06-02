import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieSearch = () => {
  const [getMovies, setGetMovies] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch initial movies
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          params: {
            api_key: "24421cafe490cc00aeb89c9771051f13",
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
    if (getMovies.trim() === "") {
      return;
    }
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "24421cafe490cc00aeb89c9771051f13",
            query: getMovies,
          },
        }
      );
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDetail = (id) => {
    navigate(`/movieDetail/${id}`);
  };

  return (
    <div className="min-h-screen text-white py-10 pt-20 p-10">
      <div className="max-w-screen-lg mx-auto py-10">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pl-4 text-gray-800">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={getMovies}
                onChange={(e) => setGetMovies(e.target.value)}
                placeholder="Enter keyword"
                className="bg-[#F6F6F6] text-black placeholder:text-black rounded-full px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button
                type="submit"
                className="bg-[#F6F6F6] text-black placeholder:text-black rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            results.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="hover:opacity-75 transition ease-in-out duration-150"
                  onClick={() => handleClickDetail(movie.id)}
                />
                <div className="mt-2">
                  <a href="#" className="text-lg mt-2 hover:text-gray-300">
                    {movie.title}
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

export default MovieSearch;
