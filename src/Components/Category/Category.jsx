import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
  const categorys = [
    {
      "id": 1,
      "img": img1,
      "title": 'salad'
    },
    {
      "id": 2,
      "img": img2,
      "title": 'pizza'
    },
    {
      "id": 3,
      "img": img3,
      "title": 'soup'
    },
    {
      "id": 4,
      "img": img4,
      "title": 'desert'
    },
    {
      "id": 5,
      "img": img5,
      "title": 'breakfast'
    },
  ]

  return (
    <section className='container mx-auto my-10'>
      <SectionTitle
        heading='ORDER ONLINE'
        subHeading='From 11:00am to 10:00pm'
      />
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
        {/* <SwiperSlide>
          <img src={img1} alt="" />
          <p className='uppercase text-2xl text-center -mt-14 text-white'>salad</p>
        </SwiperSlide> */}
        {
          categorys.map(category => <SwiperSlide key={category.id}>
            <img src={category.img} alt="" />
            <p className='uppercase text-2xl text-center -mt-14 text-white'>{category.title}</p>
          </SwiperSlide>)
        }

      </Swiper>
    </section>
  );
};

export default Category;