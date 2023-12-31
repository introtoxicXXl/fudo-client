import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItems from "../MenuItems/MenuItems";
import UseMenu from "../../Hooks/UseMenu";

const Menu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="container mx-auto my-10">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Check It Out"
            />

            <div className="grid grid-cols-2 gap-5">
                {
                    popular.map(menu => <MenuItems
                        key={menu._id}
                        item={menu}
                    />)
                }
            </div>

        </section>
    );
};

export default Menu;