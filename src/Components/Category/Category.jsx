import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Category.css'
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';

const Category = () => {
  
  return (
    <div>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={img1} alt="" />
        <p className='uppercase text-2xl text-center -mt-14 text-white'>salad</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        <p className='uppercase text-2xl text-center -mt-14 text-white'>pizza</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        <p className='uppercase text-2xl text-center -mt-14 text-white'>soup</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        <p className='uppercase text-2xl text-center -mt-14 text-white'>desert</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        <p className='uppercase text-2xl text-center -mt-14 text-white'>breakfast</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;