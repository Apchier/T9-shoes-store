import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";



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
                        <select name="" id="" className="outline-none p-2">
                            <option value="Last-7-Days">Last 7 Days</option>
                            <option value="Last-30-Days">Last 30 Days</option>
                            <option value="Last-90-Days">Last 90 Days</option>
                        </select>
                        <button className="px-4 py-2 bg-blue-500 rounded-md text-white">New Post</button>
                    </div>
                </div>
                <div className="flex w-full overflow-x-scroll gap-7 mt-5 flex-grow">
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                    <div className="flex-shrink-0">
                        <img className="rounded-xl" src="https://placehold.co/170x200" alt="" />
                        <div className="text-xl font-semibold mt-5">Nike Air</div>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-400">$180.00</span>
                            <span className="line-through">$289.00</span>
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
                </div>
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