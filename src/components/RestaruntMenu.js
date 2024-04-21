import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from '../constants/common';
import { MenuShimmer } from './Shimmer';
import useRestaruntDetails from '../hooks/useRestaruntDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../utils/slices/cartSlice';
import RestaurantCategory from './RestaruntCategory';
import { useState } from 'react';

const RestaruntMenu = () => {
    const { id } = useParams();

    const { restarunt, menuItems } = useRestaruntDetails(id);

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItems(item));
    };

    return !restarunt ? (
        <MenuShimmer />
    ) : (
        <div className="w-auto mt-20 min-h-screen">
            <div className="flex justify-center items-center h-52 bg-light-black text-[#1F4172]">
                <img
                    className="w-[250px] h-[170px] rounded-[5px]"
                    src={IMG_CDN_URL + restarunt?.cloudinaryImageId}
                    alt={restarunt?.name}
                />
                <div className="flex m-5 flex-col flex-basis-520">
                    <h2 className="text-[40px] font-[300] max-w-[540px]">
                        {restarunt?.name}
                    </h2>
                    <p className="whitespace-nowrap text-inherit opacity-70 text-base max-w-540">
                        {restarunt?.cuisines?.join(', ')}
                    </p>
                    <div className="flex mt-[18px] justify-between items-center text-[12px] font-semibold pb-3 text-inherit max-w-[340px]">
                        <div
                            className="flex items-center gap-[5px] rounded-[5px] p-[5px] space-x-5 bg-dark-green"
                            style={
                                restarunt?.avgRating < 4
                                    ? { backgroundColor: 'var(--light-red)' }
                                    : restarunt?.avgRating === '--'
                                    ? {
                                          backgroundColor: 'white',
                                          color: 'black',
                                      }
                                    : { color: 'white' }
                            }
                        >
                            <i className="fa-solid fa-star"></i>
                            <span>{restarunt?.avgRating}</span>
                        </div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restarunt?.sla?.slaString}</div>
                        <div className="restaurant-rating-slash">|</div>
                        <div>{restarunt?.costForTwoMessage}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="mt-[30px] w-[850px]">
                    <div className="p-5">
                        <h3 className="menu-title">Recommended</h3>
                        <p className="mt-14 leading-5 text-rgba-40-44-63-45 tracking-wider text-base">
                            {menuItems.length} ITEMS
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        {menuItems.map((item) => (
                            <div
                                className="flex justify-between max-h-[250px] p-[20px] border-b border-rgba-40-44-63-45-05"
                                key={item?.id}
                            >
                                <div className="menu-item-details">
                                    <h3 className="w-[60%]">{item?.name}</h3>
                                    <p className="mt-[4px] text-[1rem] font-[400] w-[40%] text-[#3e4152]">
                                        {item?.price > 0
                                            ? new Intl.NumberFormat('en-IN', {
                                                  style: 'currency',
                                                  currency: 'INR',
                                              }).format(item?.price / 100)
                                            : ' '}
                                    </p>
                                    <p className="mt-[14px] leading-[1.3] w-[60%] tracking-[-0.3px] text-[1rem] text-rgba-40-44-63-45">
                                        {item?.description}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center w-[200px] overflow-hidden">
                                    {item?.imageId && (
                                        <img
                                            className="h-[100px] w-[100px] rounded-[5px]"
                                            src={
                                                ITEM_IMG_CDN_URL + item?.imageId
                                            }
                                            alt={item?.name}
                                        />
                                    )}
                                    <button
                                        className="bg-orange text-dark-orange border border-dark-orange text-[#60b246] px-[25px] py-[8px] cursor-pointer outline-none mt-[10px] rounded-[5px]"
                                        onClick={() => handleAddItems(item)}
                                    >
                                        {' '}
                                        ADD +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaruntMenu;
