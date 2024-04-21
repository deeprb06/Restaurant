import CartItem from './CartItem';

const RestaurantCategory = ({ data, showItems, setShowIndex, hideItems }) => {
    console.log('data: ', data);
    const { item } = data;

    return (
        <div className="menu-category border-t-2 border-gray-300">
            <div
                className=" py-4 px-2 category-heading flex justify-between items-center cursor-pointer hover:bg-gray-100 transition ease-in-out duration-300"
            >
                <h2 className="text-xl font-bold text-[#132043]">{`${data?.name}`}</h2>
                <i className="fa-solid fa-chevron-down text-[#132043]"></i>
            </div>
             {/* <CartItem data={data} /> */}
        </div>
    );
};

export default RestaurantCategory;
