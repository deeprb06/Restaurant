import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearItems } from '../utils/slices/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItems());
    };
    return (
        <div className="mt-8 mb-[50px] w-[60%] px-4 py-8 mx-auto max-w-screen-xl border-t-4 border-t-[#F1B4BB] rounded-lg shadow-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl text-[#132043]">
                    
                    {cartItem?.length
                        ? `Cart items ${cartItem.length}`
                        : 'Cart Is Empty'}
                </h1>
                <button
                    className="font-semibold text-sm bg-[#132043] text-[#FDF0F0] py-2 px-4 rounded-full"
                    onClick={() => handleClearCart()}
                >
                    Clear cart
                </button>
            </div>
            <div>
                <CartItem data={cartItem} />
            </div>
        </div>
    );
};

export default Cart;
