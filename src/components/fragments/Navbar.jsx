import { FaPlus } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import NavLink from "../elements/NavLink";
import ButtonPrimary from "../elements/ButtonPrimary";
import ImageProfile from "../elements/ImageProfile";

export default function Navbar() {
    return (
        <div className="flex items-center w-full h-[75px] bg-gray-200 py-2 pr-2">
            <div className="flex w-full justify-between border-l-2 border-black px-2 py-2">
            <div className="flex w-1/4 justify-around text-2xl items-center cursor-pointer ">
                <NavLink link="Products" />
                <NavLink link="Selected" />
            </div>
                <div className="flex w-full justify-end items-center gap-5 ">
                    <ButtonPrimary text="Order" icon={<FaPlus size={20} />} />
                    <BiMessageDetail size={25} />
                    <IoIosNotificationsOutline size={30} />
                    <ImageProfile src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                </div>
            </div>
        </div>
    )
}