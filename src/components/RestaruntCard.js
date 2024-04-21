import { IMG_CDN_URL } from '../constants/common';

const RestaruntCard = (props) => {
    return (
        <div
            data-testid="res-card"
            className="res-card shadow-xl min-h-full rounded-2xl overflow-hidden transition ease-in-out bg-white
      hover:bg-[#FDF0F0] duration-300"
        >
            <div className="res-card-pic">
                <img
                    src={IMG_CDN_URL + props?.info?.cloudinaryImageId}
                    className="w-full object-cover"
                    style={{ height: 200 + 'px' }}
                />
            </div>
            <div className="res-details px-2 py-4 flex flex-col justify-between gap-2">
                <h3 className="res-name text-xl text-[#132043] font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                    {props.info.name}
                </h3>
                <p className="res-cuisine text-slate-500 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                    {props.info.cuisines.join(', ')}
                </p>
                <span
                    className="res-rating py-[0.2em] px-[0.5em] text-[#FDF0F0] w-min bg-[#1F4172] flex items-center gap-1 font-medium
        "
                >
                    {props.info.avgRating} <i className="fa-solid fa-star"></i>
                </span>
                <span className="estd text-[#1F4172] font-medium flex items-center gap-1">
                    <i className="fa-regular fa-clock"></i>{' '}
                    {props.info.sla.deliveryTime + ' MINS'}
                </span>
            </div>
        </div>
    );
};

export default RestaruntCard;
