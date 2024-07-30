export default function ProductList() {
    return (
        <div className="flex w-full items-center ">
            <div className="flex w-3/4">
                <div className="flex w-full items-center bg-red-200">
                    <div className="block bg-green-400 w-5 h-10 rounded-lg mr-3"></div>
                    <span className="text-xl">Recent Product</span>
                </div>
                <div className="flex w-full bg-blue-300 justify-end">
                    <select name="" id="" className="outline-none p-2">
                        <option value="Last-7-Days">Last 7 Days</option>
                        <option value="Last-30-Days">Last 30 Days</option>
                        <option value="Last-90-Days">Last 90 Days</option>
                    </select>
                    <button className="p-2 bg-blue-500 rounded-md text-white">New Post</button>
                </div>
            </div>
            <div className="w-1/6 bg-green-600">
                <div>lorem</div>
            </div>
        </div>
    )
}