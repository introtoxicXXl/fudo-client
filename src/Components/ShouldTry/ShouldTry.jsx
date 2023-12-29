import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/home/featured.jpg';
import './ShouldTry.css';

const ShouldTry = () => {

    return (
        <div className="should-try bg-fixed py-20 text-white">
            <div className="container mx-auto">
                <SectionTitle
                    heading="FROM OUR MENU"
                    subHeading="Check It Out"
                />
                <div className="flex justify-center items-center mt-12">
                    <div className="basis-1/2 flex justify-center">
                        <img className="w-4/5" src={img} alt="" />
                    </div>
                    <div className="basis-1/2  text-xl">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem quidem quisquam nostrum culpa harum provident vero consequuntur delectus ducimus, quibusdam nobis iure sit, soluta officiis, qui fugiat distinctio perferendis!</p>
                        <button className="btn btn-outline border-0 border-b-2 border-white text-white mt-3">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShouldTry;