/* eslint-disable react/prop-types */
const AsideLink = ({ icon, text }) => {
    return (
        <a href="#" className="flex flex-col items-center text-[1rem] text-gray-600">
            <span className="flex items-center justify-center p-2 w-[48px] rounded-full h-[48px] transition duration-400 ease-in-out hover:text-white hover:bg-blue-600 text-[1.7rem] hover:transition">
                {icon}
            </span>
            {text}
        </a>
    )
}

export default AsideLink