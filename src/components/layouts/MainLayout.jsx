import Aside from "../fragments/Aside";
import Hero from "../fragments/Hero";
import Navbar from "../fragments/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className='flex w-full min-h-screen max-h-screen overflow-hidden font-Poppins'>
            <div className=''>
                <Aside />
            </div>
            <div className='flex flex-col w-full'>
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-col bg-gray-300">
                    <div className='w-full bg-white rounded-tl-[3vh] px-6 py-4'>
                        <Hero />
                    </div>
                    <div className='w-full bg-white px-6 py-4'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}