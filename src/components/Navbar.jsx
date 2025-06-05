export default function Navbar() {
    return (
        <nav className="flex flex-row place-content-between py-4 bg-[#f8f8fa]">
            <h1 className="font-bold text-2xl mt-5 ml-[150px]"><span>Event</span>
                <span className="text-[#7848F4] px-0.5 text-2xl">Hive</span>
            </h1>
            <div className="space-x-4 inline-block mt-5 mr-[100px]">
                <button className="font-bold">Login</button>
                <button className="bg-[#7848F4] text-white rounded-sm px-6 py-2 mr-4">Signup</button>
            </div>
        </nav>

    );
}