/* eslint-disable react/prop-types */
const NavLink = ({ link }) => {
    return (
        <div>
            <span className="hover:font-semibold hover:text-black text-gray-500 duration-200 delay-100 ease-in-out">{link}</span>
        </div>
    )
}


export default NavLink