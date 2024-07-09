import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import SlideCardSkeleton from "../skeleton/SlideCardSkeleton";

function HeroSection() {
  const [loading, setLoading] = useState(false);

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

  const blogs = [
    {
      category: "sports",
      blogTitle: "The blog was launched asresult organizing",
    },
    {
      category: "technology",
      blogTitle: "Have a look through a handful of the top blogs",
    },
    {
      category: "business",
      blogTitle: "Marketing agency, some of our content clusters are",
    },
    {
      category: "sports",
      blogTitle: "The blog was launched asresult organizing",
    },
    {
      category: "technology",
      blogTitle: "Have a look through a handful of the top blogs",
    },
    {
      category: "business",
      blogTitle: "Marketing agency, some of our content clusters are",
    },
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
          {loading ? (
            <>
              <SwiperSlide>
                <SlideCardSkeleton />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCardSkeleton />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCardSkeleton />
              </SwiperSlide>
              <SwiperSlide>
                <SlideCardSkeleton />
              </SwiperSlide>
            </>
          ) : (
            blogs.map((blog, index) => {
              const random = Math.floor(Math.random() * colors.length);
              return (
                <SwiperSlide key={index}>
                  <div className="slideCard_wrapper">
                    <a className="image_handler" href="#">
                      <img
                        src="https://themexriver.com/wp/magezix/wp-content/uploads/2022/05/travel-new.jpg"
                        alt="Title of Post"
                      />
                    </a>
                    <div className="body_content p-6 md:p-16 md:pb-8">
                      <a
                        href="#"
                        className="mb-6 slide_cate_wrapper rounded-sm py-1 md:p-2 px-3 inline-block"
                        style={{ backgroundColor: colors[random] }}
                      >
                        <span className="uppercase text-sm md:text-lg text-white">
                          {`#${blog.category}`}
                        </span>
                      </a>
                      <a href="#">
                        <h2 className="mb-6 text-3xl md:text-6xl md:max-w-[75%] text-white font-semibold">
                          {blog.blogTitle}
                        </h2>
                      </a>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <img
                            src="../public/assets/admin-vivek.png"
                            alt=""
                            className="h-8 w-8 rounded-full mr-2"
                          />
                          <span className="text-white text-lg">Vivek</span>
                        </div>
                        <span className="text-white mx-2">|</span>
                        <div className="date">
                          <i className="bi bi-calendar4-week text-white mr-2"></i>
                          <span className="text-white text-lg">
                            25 june, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </>
  );
}

export default HeroSection;
