import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recommended = () => {
    const [populars, setPopulars] = useState([]);
    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                const popularItems = res.data.filter(item => item.category === 'popular').slice(0, 3)
                setPopulars(popularItems)
            })
    }, [])


    return (
        <div className="container mx-auto my-10">
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="should try"
            />
            <div className="grid grid-cols-3 gap-5">
                {
                    populars.map(popular => <div key={popular._id}>
                        <div className=" bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full" src={popular.image} alt="" />
                            <div className="p-5 text-center">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{popular.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{popular.recipe}</p>
                                <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recommended;