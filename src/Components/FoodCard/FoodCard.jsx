
import { PropTypes } from 'prop-types';
const FoodCard = ({ item }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-2 text-[#BB8506] border-[#BB8506] bg-base-200 hover:bg-[#111827] hover:text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object
}
export default FoodCard;