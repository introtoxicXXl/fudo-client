
import { PropTypes } from 'prop-types';

const MenuItems = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div>
            <div className='flex'>
                <div className='flex gap-5'>
                    <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-[118px] h-[104px]' src={image} alt="" />
                    <div>
                        <h2 className='text-xl'>{name} --------------</h2>
                        <p className='text-[#737373] text-base'>{recipe}</p>
                    </div>
                </div>
                <p className='text-[#BB8506] text-xl'>${price}</p>
            </div>
            
        </div>
    );
};

MenuItems.propTypes = {
    item: PropTypes.object
}

export default MenuItems;