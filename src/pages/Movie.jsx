import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/post";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";

function Movie() {
  const dispatch = useDispatch();

  // useSelector : mengambil data yg ada di global state (redux)
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        direction="horizontal"
        modules={[Pagination, Autoplay, Navigation, Scrollbar, A11y]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        Pagination={{
          clickable: true,
        }}
        navigation={true}
        scrollbar={{ draggable: true }}
      >
        {posts?.length > 0 &&
          posts.slice(0, 6).map((post) => (
            <SwiperSlide className="relative overflow-hidden" key={post?.id}>
              <div className="">
                <img
                  src={`https://image.tmdb.org/t/p/original/${post.backdrop_path}`}
                  alt="movie"
                  className="w-full h-64 md:h-[80vh] lg:h-[100vh] object-cover"
                />
                <div className="absolute top-12 md:top-16 lg:top-20 px-5 w-full h-full mx-auto md:p-9 lg:p-14 shadow-o">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div>
                      <h1 className="text-2xl w-full text-white font-bold pt-7 flex md:text-5xl md:pt-10 lg:text-6xl">
                        {post.title}
                      </h1>
                      <div className="flex py-2">
                        <p className="text-yellow-500 w-6 text-lg lg:pt-1">
                          <AiFillStar />
                        </p>
                        <p className="text-white text-xs lg:text-lg">
                          {post.vote_average}
                        </p>
                      </div>
                      <p className="text-white text-[7px] w-72 md:w-full md:text-justify lg:text-base md:text-sm pb-2">
                        {post.overview}
                      </p>
                      <button className="flex flex-rows gap-2 items-center p-2 lg:p-5 bg-red-600 text-center rounded-xl w-28 lg:w-36 h-7 lg:h-10 text-white text-xs lg:text-sm hover:scale-110">
                        <ion-icon name="play"></ion-icon>
                        <p>Watch Trailer</p>
                      </button>
                    </div>

                    <div className="pt-2 lg:pt-2 pl-20">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}
                        alt="movie"
                        className="w-52 lg:w-[30vw] md:w-80 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Movie;
