import { BiHomeAlt } from "react-icons/bi";
import { FaRegGem } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import AsideLink from "../elements/AsideLink";

export default function Aside() {
    return (
        <aside className="flex flex-col items-center p-2 bg-gray-200 h-screen">
            <div className="flex text-[3rem] font-semibold">
                <h1 className="text-yellow-600">A</h1>
                <h1>J</h1>
            </div>

            <div className="flex flex-col h-full justify-between py-4 px-4">
                <div>
                    <ul className="flex flex-col items-center gap-4">
                        <li>
                            <AsideLink icon={<BiHomeAlt />} text="Home" />
                        </li>
                        <li>
                            <AsideLink icon={<FaRegGem />} text="Products" />
                        </li>
                        <li>
                            <AsideLink icon={<FaRegUserCircle />} text="Customers" />
                        </li>
                        <li>
                            <AsideLink icon={<FaShop />} text="Shop" />
                        </li>
                        <li>
                            <AsideLink icon={<LuBadgePercent />} text="Promote" />
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <AsideLink icon={<FaRegQuestionCircle />} text="Help" />
                        </li>
                    </ul>
                </div>
            </div>

        </aside>
    )
}