import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import ProductCard from "../elements/ProductsCard";
import ButtonPrimary from "../elements/ButtonPrimary";
import FilterUpload from "../elements/FilterUpload";


export default function ProductList() {
    return (
        <div className="flex w-full h-[45vh]">
            <div className="flex flex-col w-[80%] items-center">
                <div className="flex w-full">
                    <div className="flex w-full items-center ">
                        <div className="block bg-green-400 w-5 h-10 rounded-lg mr-3"></div>
                        <span className="text-xl">Recent Product</span>
                    </div>
                    <div className="flex w-full gap-3 justify-end">
                        <FilterUpload />
                        <ButtonPrimary text="New Post" />
                    </div>
                </div>
                <ProductCard>
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                    <ProductCard.CardProduct latest="New" hot="Hot" img="https://placehold.co/170x200" title="Nike Air" price="$180.00" discount="$289.00" />
                </ProductCard>
            </div>
            <div className="w-[20%] flex flex-col justify-between pl-16 p-2">
                <span className="p-1 flex items-center justify-center w-[55px] h-[55px] bg-green-300 rounded-full">
                    <FaRegUserCircle className="" size={24} />
                </span>
                <span className="flex items-center mt-5 text-lg">People reached <IoIosAlert className="ml-3" /></span>
                <span className="flex items-center mt-2 text-4xl font-medium">256K</span>
                <div className="flex items-center mt-2 gap-1">
                    <span className="flex items-center gap-2 text-green-400 text-sm"><FaArrowUp />37.8%</span>
                    this week
                </div>
                <span className="p-1 flex items-center mt-5 justify-center w-[55px] h-[55px] bg-green-300 rounded-full">
                    <LuArrowDownUp size={24} />
                </span>
                <span className="flex items-center mt-5 text-lg">Engagement <IoIosAlert className="ml-3" /></span>
                <span className="flex items-center mt-2 text-4xl font-medium">1.2x</span>
                <div className="flex items-center mt-2 gap-1">
                    <span className="flex items-center gap-2 text-green-400 text-sm"><FaArrowUp />37.8%</span>
                    this week
                </div>
            </div>
        </div>
    )
}