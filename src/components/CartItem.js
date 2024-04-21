import { IMG_CDN_URL } from '../constants/common';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/slices/cartSlice';

const CartItem = ({ data }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItems(item));
    };

    return (
        <ul>
            {data?.map((item) => {
                console.log('item: ', item);
                return (
                    <li
                        data-testid="menu-item"
                        key={item.id}
                        className="menu-item mt-8 flex justify-between p-4 rounded-lg transition ease-in-out duration-200
                        border-t-2 border-zinc-200"
                    >
                        <div className="self-start">
                            <h3 className="text-lg font-bold text-[#1F4172]">
                                {item.name}
                            </h3>
                            <div className="flex flex-col  gap-[0.4em]">
                                <span className="py-[0.2em] text-lg font-bold">
                                    ₹ {item?.price / 100}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="py-[0.2em] px-2 text-[#FDF0F0] bg-[#60b246] font-bold text-sm flex gap-1 items-center">
                                        {
                                            item?.ratings?.aggregatedRating
                                                ?.rating
                                        }
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                    <span className="font-bold text-sm text-[#132043]">
                                        {
                                            item?.ratings?.aggregatedRating
                                                ?.ratingCount
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                                {item?.imageId !== undefined ? (
                                    <img
                                        src={IMG_CDN_URL + item?.imageId}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src="https://assets-global.website-files.com/64a26163e7f60775e3548a04/64a287398e53b9cd0c94f13a_placeholder.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <div className="text-center my-2">
                                <button
                                    className="bg-orange text-dark-orange border border-dark-orange text-[#60b246] px-[25px] py-[8px] cursor-pointer outline-none mt-[10px] rounded-[5px]"
                                    onClick={() => handleAddItem(item)}
                                >
                                    {' '}
                                    ADD +
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CartItem;
