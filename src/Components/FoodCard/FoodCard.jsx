import { PropTypes } from 'prop-types';
import useAuth from './../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from './../../Hooks/useAxios';
import useCart from '../../Hooks/useCart';



const FoodCard = ({ item }) => {

    const [, refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();


    const handleAddToCart = item => {
        const { name, image, _id, price } = item;
        if (!user) {
            navigate('/login', { state: { from: location } })
            // return;
        }
        else {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire('item added')
                        refetch();
                    }
                })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 text-[#BB8506] border-[#BB8506] bg-base-200 hover:bg-[#111827] hover:text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object
}
export default FoodCard;