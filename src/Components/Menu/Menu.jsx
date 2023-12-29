import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import axios from "axios";
import MenuItems from "../MenuItems/MenuItems";

const Menu = () => {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                const popularItems = res.data.filter(item => item.category === 'popular')
                setMenus(popularItems)
            })
    }, [])

    return (
        <section className="container mx-auto my-10">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Check It Out"
            />

        <div className="grid grid-cols-2 gap-5">
            {
                menus.map(menu=><MenuItems
                    key={menu._id}
                    item={menu}
                />)
            }
        </div>

        </section>
    );
};

export default Menu;