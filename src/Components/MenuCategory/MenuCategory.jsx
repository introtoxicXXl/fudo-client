import { Link } from "react-router-dom";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import MenuItems from "../MenuItems/MenuItems";
import { PropTypes } from 'prop-types';

const MenuCategory = ({ img, title, items }) => {

    return (
        <div className="flex flex-col items-center my-20">
            <div className="w-full">
                <CategoryTitle
                    img={img}
                    title={title}
                />
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-5 my-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div>
                <Link to={`/ourShop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-2 text-[#BB8506] border-[#BB8506] bg-base-200 hover:bg-[#111827] hover:text-[#BB8506]">Order Your Favorite Food</button>
                </Link>
            </div>
        </div>
    );
};
MenuCategory.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string,
    items: PropTypes.array
}

export default MenuCategory;