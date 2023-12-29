import AboutSection from "../Components/AboutSection/AboutSection";
import Banner from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import Menu from "../Components/Menu/Menu";
import Recommended from "../Components/Recomended/Recomended";
import ShouldTry from "../Components/ShouldTry/ShouldTry";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  
  return (
    <div>
      <Banner/>
      <Category/>
      <AboutSection/>
      <Menu/>
      <Recommended/>
      <ShouldTry/>
      <Testimonial/>
    </div>
  );
};

export default Home;