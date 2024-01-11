import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAxios from "../../Hooks/useAxios";
import FoodCard from "../FoodCard/FoodCard";

const Recommended = () => {
    const axiosPublic = useAxios();

    const [populars, setPopulars] = useState([]);
    useEffect(() => {
        axiosPublic.get('/menu')
            .then(res => {
                const popularItems = res.data.filter(item => item.category === 'popular').slice(0, 3)
                setPopulars(popularItems)
            })
    }, [axiosPublic])


    return (
        <div className="container mx-auto my-10">
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="should try"
            />
            <div className="grid grid-cols-3 gap-5">
                {
                    populars.map(popular => <FoodCard
                        key={popular._id}
                        item={popular}
                    />)
                }
            </div>
        </div>
    );
};

export default Recommended;