
import { PropTypes } from 'prop-types';
import FoodCard from '../FoodCard/FoodCard';
const OrderTab = ({ items}) => {

    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                items.map(item=><FoodCard
                    key={item._id}
                    item={item}
                />)
            }
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.array
}
export default OrderTab;