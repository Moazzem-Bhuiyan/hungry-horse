import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/sectiontitle/SectionTitle";
const Catagory = () => {
  return (
    <div>

        <section>
            <SectionTitle 

            subheading={'From 11.00am To 10.00pm'}
            heading={'order online'}
            
            >
                
            </SectionTitle>
        </section>
      <section className="my-10">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <h1 className=" uppercase text-center text-3xl text-white -mt-20">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <h1 className=" uppercase text-center text-3xl text-white -mt-20">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <h1 className=" uppercase text-center text-3xl text-white">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <h1 className=" uppercase text-center text-3xl text-white -mt-20">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <h1 className=" uppercase text-center text-3xl text-white -mt-20">
              Salad
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Catagory;
