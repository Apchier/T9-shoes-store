import nike1 from "../../../public/img/nike1.png"

export default function Hero() {
    return (
        <div className="flex w-full justify-between py-2">
            <div className="w-[74%] h-[38vh] flex justify-between relative bg-[#f5d661] rounded-[3vh]">
                <div className="absolute top-2 left-4 text-[3.5rem] font-bold">
                    <h1>Explore New</h1>
                </div>
                <div className="w-[260px] p-2 flex flex-col gap-1 bg-white rounded-xl absolute top-[120px] left-4">
                    <h3 className="text-xl">Air Spain</h3>
                    <p className="mt-1 text-lg text-red-500">$149.00 <span className="text-black line-through">$199,00</span></p>
                    <div className="mt-2 flex justify-between items-center gap-10">
                        <button className="py-0.5 px-2 rounded-full border-none bg-[#d1e4ff] text-blue-600 text-sm">Colors</button>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-black"></div>
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 text-xs flex">
                    <span className="py-3 px-8 text-white text-[1.1rem] bg-[#ef6000] rounded-bl-[3vh] cursor-pointer">NEW</span>
                    <span className="py-3 px-8 text-white text-[1.1rem] bg-[#0079ff] rounded-tr-[3vh] cursor-pointer">HOT</span>
                </div>
                <div className="absolute right-0 top-[-15px]">
                    <img src={nike1} alt="" className="rotate-[-27deg] w-[570px] mr-10" />
                    <h1 className="absolute bottom-0 right-0 text-5xl font-semibold rotate-[-30deg] mb-16 mr-5">10k+</h1>
                </div>
            </div>
            <div className="flex flex-col w-[22%] h-[38vh] bg-green-200 p-5 rounded-[3vh] text-lg">
                <div className="flex justify-between mb-4">
                    <span className="flex items-center gap-2 text-lg font-medium">
                        <div className="w-3 h-6 rounded-[4px] bg-purple-300"></div>Product Views
                    </span>
                    <div className="relative">
                        <select className="bg-transparent border-2 border-white rounded-md px-2 py-1 text-sm">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                        </select>
                    </div>
                </div>
                <div className="flex h-full justify-between items-end">
                    <div className="flex w-[10%] h-full flex-col justify-between text-sm py-1">
                        <p>30</p>
                        <p>25</p>
                        <p>20</p>
                        <p>15</p>
                        <p>10</p>
                        <p>5</p>
                    </div>
                    <div className="flex w-[85%] justify-between items-end">
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-purple-300 rounded-t-md h-[175px]"></div>
                            <span className="mt-2 text-sm">22</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-orange-300 rounded-t-md h-[140px]" ></div>
                            <span className="mt-2 text-sm">23</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-blue-500 rounded-t-md h-[225px]" ></div>
                            <span className="mt-2 text-sm">24</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-purple-300 rounded-t-md h-[125px]" ></div>
                            <span className="mt-2 text-sm">25</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-blue-400 rounded-t-md h-[165px]" ></div>
                            <span className="mt-2 text-sm">26</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-orange-300 rounded-t-md h-[110px]" ></div>
                            <span className="mt-2 text-sm">27</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 bg-green-400 rounded-t-md h-[150px]" ></div>
                            <span className="mt-2 text-sm">28</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}