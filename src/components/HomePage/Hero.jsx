import { HomepageImg, HomepageImg2 } from '../../Assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [HomepageImg, HomepageImg2];

function Hero() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                  Welcome to Future Glance Pvt. Ltd
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for navigation arrows and pagination dots */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            width: 30px;
            height: 30px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 18px;
          }

          .swiper-pagination-bullet {
            background: white;
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background: #33277B; /* Tailwind's blue-500 */
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
