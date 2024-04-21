import RestaruntCard from './RestaruntCard';
import { IMG_CDN_URL, SWIGGY_PUBLIC_API } from '../constants/common';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../hooks/useOnline';
import UserOffline from './UserOffline';

const filterData = (searchText, restaurants) => {
    return restaurants.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
};

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    async function getData() {
        const response = await fetch(SWIGGY_PUBLIC_API, {
            method: 'GET',
        });
        const json = await response.json();

        async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                // initialize checkData for Swiggy Restaurant data
                let checkData =
                    json?.data?.cards[i]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants;

                // if checkData is not undefined then return it
                if (checkData !== undefined) {
                    return checkData;
                }
            }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
        setRestaurants(resData);
        setFilterRestaurants(resData);
    }

    useEffect(() => {
        getData();
    }, []);

    const isOnline = useOnline();

    if (!isOnline) {
        return <UserOffline />;
    }

    return !restaurants?.length ? (
        <Shimmer />
    ) : (
        <>
            <div className="items-center max-w-[100%] relative m-5">
                <input
                    type="text"
                    className="w-[40%] box-border"
                    placeholder="search you want..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setFilterRestaurants(data);
                    }}
                >
                    search
                </button>
            </div>


            <div className='res-container gap-4'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 30%))'
                }}
            >
                { filterRestaurants.length ? filterRestaurants.map((restaurant) => {
                    return (
                        <>
                            <Link to={'/restarunt/' + restaurant?.info?.id} key={restaurant?.info?.id}>

                                <RestaruntCard
                                    {...restaurant} user= {'deep'} name={'xu'}
                                />
                            </Link>
                        </>
                    );
                }) : `No match found for ${searchText}`}
            </div>
        </>
    );
};

export default Body;
