import { SHIMMER_CARD_UNIT, SHIMMER_MENU_CARD_UNIT } from '../constants/common';

const CardShimmer = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer-img stroke animate"></div>
            <div className="shimmer-title stroke animate"></div>
            <div className="shimmer-tags stroke animate "></div>
            <div className="shimmer-details stroke animate "></div>
        </div>
    );
};

export const MenuShimmer = () => {
    return (
        <div className="w-[60%] px-4 py-8 mx-auto max-w-screen-xl">
            <div className="h-[200px] bg-zinc-200"></div>
            <div className="mt-8">
                <div className="mt-4 h-[200px] bg-zinc-200"></div>
                <div className="mt-4 h-[200px] bg-zinc-200"></div>
                <div className="mt-4 h-[200px] bg-zinc-200"></div>
            </div>
        </div>
    );
};

const Shimmer = () => {
    return (
        <div
            className="shimmer-container w-[70%] mx-auto max-w-screen-xl mt-4 grid gap-4"
            style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 30%))',
            }}
        >
            <div className="shimmer-card w-[100%] bg-zinc-200 h-[250px] overflow-hidden rounded-lg"></div>
            <div className="shimmer-card w-[100%] bg-zinc-200 h-[250px] overflow-hidden rounded-lg"></div>
            <div className="shimmer-card w-[100%] bg-zinc-200 h-[250px] overflow-hidden rounded-lg"></div>
        </div>
    );
};

export default Shimmer;
