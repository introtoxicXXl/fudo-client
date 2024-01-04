import { useState } from 'react';
import CategoryTitle from '../Components/CategoryTitle/CategoryTitle';
import shopImg from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../Hooks/UseMenu';
import OrderTab from '../Components/OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import './OurShop.css';
import { Helmet } from 'react-helmet';


const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Fudo | Our Shop</title>
            </Helmet>
            <CategoryTitle
                img={shopImg}
                title='Our Shop'
                subTitle='would you like to try a dish?'
            />

            <div className='container mx-auto flex justify-center my-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='flex justify-center'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab
                            items={salad}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={pizza}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={soup}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={dessert}
                        />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            items={drinks}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;