/* eslint-disable react/prop-types */
const ButtonPrimary = ({ text, icon }) => {
    return (
        <button className="flex items-center text-white gap-3 bg-blue-600 rounded-lg px-4 py-2">{icon}{text}</button>
    )
}

export default ButtonPrimary