/* eslint-disable react/prop-types */
const ProductCard = ({children}) => {
    return (
        <div className="flex w-full overflow-x-scroll gap-7 mt-5 flex-grow">
            {children}
        </div>
    )
}

const CardProduct = ({latest, hot, img , title, price, discount }) => {
    return (
        <div className="flex-shrink-0 relative rounded-[3vh]">
            <div className="flex absolute top-0 left-0 items-center ">
                <div className="bg-blue-500 text-white px-2 py-1 rounded-tl-xl rounded-br-xl z-[1]">{latest}</div>
                <div className="bg-red-500 text-white px-4 py-1 -ml-3 rounded-br-xl flex items-center justify-center ">{hot}</div>
            </div>
            <img className="rounded-xl" src={img} alt="" />
            <div className="text-xl font-semibold mt-5">{title}</div>
            <div className="flex items-center gap-4 mt-1">
                <span className="text-red-400">{price}</span>
                <span className="line-through">{discount}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
                <span className="p-1 flex items-center justify-center w-[60px] h-[30px] bg-blue-200 rounded-xl">Colors</span>
                <div className="flex gap-1 items-center">
                    <span className="block bg-black w-[6px] h-[6px] rounded-full p-[6px]"></span>
                    <span className="block bg-red-500 w-[6px] h-[6px] rounded-full p-[6px]"></span>
                    <span className="block bg-orange-500 w-[6px] h-[6px] rounded-full p-[6px]"></span>
                    <span className="block bg-yellow-500 w-[6px] h-[6px] rounded-full p-[6px]"></span>
                </div>
            </div>
        </div>
    )
}

ProductCard.CardProduct = CardProduct

export default ProductCard