import AboutSection from "../Components/AboutSection/AboutSection";
import Banner from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import Menu from "../Components/Menu/Menu";
import Recommended from "../Components/Recomended/Recomended";

const Home = () => {
  
  return (
    <div>
      <Banner/>
      <Category/>
      <AboutSection/>
      <Menu/>
      <Recommended/>
    </div>
  );
};

export default Home;