import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPosts } from "../../redux/actions/post";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import { CgArrowLongRight } from "react-icons/cg";
import "swiper/css";
import "swiper/css/pagination";

const CardMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [slidesPerView, setSlidesPerView] = useState(7);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) {
      setSlidesPerView(4);
    } else if (windowWidth >= 700) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickDetail = (id) => {
    navigate(`/movieDetail/${id}`);
  };

  const handleClickView = (i) => {
    navigate(`/viewMovie`);
  };

  return (
    <div className="p-5 lg:px-10 md:px-10 bg-black pt-10">
      <div className="flex justify-between gap-20 text-white py-6">
        <div>
          <h3 className="text-sm md:text-2xl font-semibold uppercase ">
            <span
              className="relative cursor-pointer transition-all 
        before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
        before:duration-500 before:bg-red-600 hover:before:w-full hover:before:opacity-100"
            >
              Popular Movie
            </span>
          </h3>
        </div>
        <div className="p-0">
          <CgArrowLongRight
            className="w-20 text-red-600 text-2xl "
            onClick={() => handleClickView()}
          />
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={25}
          loop={true}
          scrollbar={{
            draggable: true,
          }}
          Pagination={{
            clickable: true,
          }}
          direction="horizontal"
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(Swiper) => console.log(Swiper)}
          modules={[Pagination, Autoplay, Navigation, Scrollbar, A11y]}
        >
          <div className="pt-10 items-center justify-center w-full">
            {posts?.length > 0 &&
              posts.slice(0, 6).map((post) => (
                <SwiperSlide key={post?.id}>
                  <div className="w-full">
                    <div className="mt-3 hover:scale-95 transition relative overflow-hidden">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}
                        alt=""
                        className="w-full h-full rounded-lg"
                        to={`/movieDetail/${post?.id}`}
                        onClick={() => handleClickDetail(post.id)}
                      />
                      <h2 className="text-white truncate capitalize text-sm w-52 pt-5">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
          <button className="swiper-button-prev font-extrabold text-red-500 scale-50"></button>
          <button className="swiper-button-next font-extrabold text-red-500 scale-50"></button>
        </Swiper>
      </div>
    </div>
  );
};

export default CardMovie;
