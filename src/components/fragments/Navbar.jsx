import { FaPlus } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar() {
    return (
        <div className="flex items-center w-full h-[70px] bg-gray-300 py-2 pr-2">
            <div className="flex w-full justify-between border-l-2 border-black px-2 py-2">
                <div className="flex w-1/4 justify-around text-2xl items-center cursor-pointer ">
                    <span className="hover:font-semibold hover:text-black text-gray-500 duration-200 delay-100 ease-in-out">Product</span>
                    <span className="hover:font-semibold hover:text-black text-gray-500 duration-200 ease-in-out">Selected</span>
                </div>
                <div className="flex w-full justify-end items-center gap-5 ">
                    <button className="flex items-center text-white gap-3 bg-blue-600 rounded-lg px-4 py-2"><FaPlus />Order</button>
                    <BiMessageDetail size={25} />
                    <IoIosNotificationsOutline size={30} />
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}