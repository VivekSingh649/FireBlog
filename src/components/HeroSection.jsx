import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import SlideCardSkeleton from "../skeleton/SlideCardSkeleton";
import useAllPosts from "../utilities/useAllPosts";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/authProvider";

function HeroSection() {
  const { allPosts, isFetching } = useAllPosts();
  const { formatUrlString } = useAppContext();

  const colors = [
    "#be123c",
    "#be185d",
    "#a21caf",
    "#6d28d9",
    "#1d4ed8",
    "#0e7490",
    "#15803d",
    "#b45309",
    "#dc2626",
  ];

  return (
    <>
      <div className="slideCard_wrapper_container md:py-8">
        <Swiper
          centeredSlides={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
          modules={[Autoplay, Navigation]}
        >
          {isFetching
            ? [...Array(5)].map((_, index) => (
                <SwiperSlide key={index}>
                  <SlideCardSkeleton />
                </SwiperSlide>
              ))
            : allPosts.slice(0, 7).map((blog) => {
                const random = Math.floor(Math.random() * colors.length);
                return (
                  <SwiperSlide key={blog.id}>
                    <div className="slideCard_wrapper">
                      <Link
                        className="image_handler"
                        to={`/blog/${formatUrlString(
                          blog.category
                        )}/${formatUrlString(blog.postTitle)}`}
                      >
                        <img src={blog.postImage} alt={blog.postTitle} />
                      </Link>
                      <div className="body_content p-6 md:p-16 md:pb-8">
                        <Link
                          to={`/blog/${formatUrlString(blog.category)}`}
                          className="mb-6 slide_cate_wrapper rounded-sm py-1 md:p-2 px-3 inline-block"
                          style={{ backgroundColor: colors[random] }}
                        >
                          <span className="uppercase text-sm md:text-lg text-white">
                            {`#${blog.category}`}
                          </span>
                        </Link>
                        <Link
                          to={`/blog/${formatUrlString(
                            blog.category
                          )}/${formatUrlString(blog.postTitle)}`}
                        >
                          <h2 className="mb-6 text-3xl md:text-6xl md:max-w-[75%] text-white font-semibold">
                            {blog.postTitle}
                          </h2>
                        </Link>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <img
                              src="/assets/admin-vivek.png"
                              alt="Admin"
                              className="h-8 w-8 rounded-full mr-2"
                            />
                            <span className="text-white text-lg">Admin</span>
                          </div>
                          <span className="text-white mx-2">|</span>
                          <div className="date">
                            <i className="bi bi-calendar4-week text-white mr-2"></i>
                            <span className="text-white text-lg">
                              {new Date(blog.createDate).toLocaleString(
                                "en-US",
                                {
                                  month: "long",
                                  year: "numeric",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </>
  );
}

export default HeroSection;
