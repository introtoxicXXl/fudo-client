import aboutImg from '../../assets/home/chef-service.jpg';

const AboutSection = () => {
  return (
    <div className='relative container mx-auto my-10'>
      <img src={aboutImg} alt="About Fudo" className="w-full" /> {/* Ensure the image takes up the full width */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center bg-white lg:p-8 md:p-5  lg:w-10/12 w-11/12'>
          <h1 className="lg:text-4xl md:text-3xl text-xl lg:mb-4 md:mb-3 mb-1 text-[#151515]">FuDo</h1>
          <p className="md:text-base text-xs">
            Embark on a culinary journey with Fudo, where we celebrate diversity, flavors, and the cultural tapestry woven through food. Our inception was fueled by a shared love for exceptional cuisine and a vision to create a platform that brings together the finest culinary treasures. At Fudo, we curate a blend of recipes, cooking tips, and the latest trends in the culinary world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
