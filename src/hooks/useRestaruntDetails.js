import { useState, useEffect } from 'react';
import {
    SWIGGY_MENU_API,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY,
} from '../constants/common';

const useRestaruntDetails = (id) => {
    const [restarunt, setRestaurants] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getRestaruntDetails();
    }, []);

    async function getRestaruntDetails() {
        try {
            const response = await fetch(SWIGGY_MENU_API + id);
            const json = await response.json();
            const data =
                json?.data?.cards
                    .map((item) => item.card)
                    ?.find(
                        (element) =>
                            element &&
                            element.card['@type'] === RESTAURANT_TYPE_KEY,
                    )?.card?.info || null;
            setRestaurants(data);

            const menuItemsData =
                json?.data?.cards
                    .find((x) => x.groupedCard)
                    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                        (x) => x.card?.card,
                    )
                    ?.filter((x) => x['@type'] == MENU_ITEM_TYPE_KEY)
                    ?.map((x) => x.itemCards)
                    .flat()
                    .map((x) => x.card?.info) || [];

            const uniqueMenuItems = [];
            menuItemsData.forEach((item) => {
                if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                    uniqueMenuItems.push(item);
                }
            });
            setMenuItems(uniqueMenuItems);
        } catch (error) {
            setMenuItems([]);
            setRestaurants(null);
            console.error('error: ', error);
        }
    }

    return { restarunt, menuItems };
};

export default useRestaruntDetails;
