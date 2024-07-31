/* eslint-disable react/prop-types */
import Aside from "../fragments/Aside";
import Hero from "../fragments/Hero";
import Navbar from "../fragments/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className='flex w-full min-h-screen max-h-screen overflow-hidden font-Poppins'>
            <div className=''>
                <Aside />
            </div>
            <div className='flex flex-col w-full bg-gray-200'>
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-col bg-gray-200 mr-4">
                    <div className='w-full h-[46vh] bg-white rounded-tl-[4.3vh] rounded-tr-[4.3vh] px-6 py-4'>
                        <Hero />
                    </div>
                    <div className='w-full h-[48vh] bg-white rounded-bl-[4.3vh] rounded-br-[4.3vh] px-6 mt-[-15px]'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}