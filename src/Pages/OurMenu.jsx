import { Helmet } from "react-helmet";
import CategoryTitle from "../Components/CategoryTitle/CategoryTitle";
import UseMenu from "../Hooks/UseMenu";
import menuImg from '../assets/menu/banner3.jpg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import desertImg from '../assets/menu/dessert-bg.jpeg';
import saladImg from '../assets/menu/salad-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';
import MenuItems from "../Components/MenuItems/MenuItems";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const OurMenu = () => {
    const [menu] = UseMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');


    return (
        <div>
            <Helmet>
                <title>Fudo | Our Menu</title>
            </Helmet>
            <CategoryTitle
                img={menuImg}
                title="Our menu"
            />
            <div className="container mx-auto my-20">
                <SectionTitle
                    heading="todays offer"
                    subHeading="Do not miss it"
                />
                <div className=" grid grid-cols-2 gap-5 mt-5">

                    {
                        offered.map(menu => <MenuItems
                            key={menu._id}
                            item={menu}
                        />)
                    }
                </div>
            </div>
            <CategoryTitle
                img={pizzaImg}
                title="pizza"
            />
            <div className="container mx-auto grid grid-cols-2 gap-5 my-20">
                {
                    pizza.map(menu => <MenuItems
                        key={menu._id}
                        item={menu}
                    />)
                }
            </div>
            <CategoryTitle
                img={desertImg}
                title="dessert"
            />
            <div className="container mx-auto grid grid-cols-2 gap-5 my-20">
                {
                    dessert.map(menu => <MenuItems
                        key={menu._id}
                        item={menu}
                    />)
                }
            </div>
            <CategoryTitle
                img={soupImg}
                title="Soup"
            />
            <div className="container mx-auto grid grid-cols-2 gap-5 my-20">
                {
                    soup.map(menu => <MenuItems
                        key={menu._id}
                        item={menu}
                    />)
                }
            </div>
            <CategoryTitle
                img={saladImg}
                title="salad"
            />
            <div className="container mx-auto grid grid-cols-2 gap-5 my-20">
                {
                    salad.map(menu => <MenuItems
                        key={menu._id}
                        item={menu}
                    />)
                }
            </div>
        </div>
    );
};

export default OurMenu;