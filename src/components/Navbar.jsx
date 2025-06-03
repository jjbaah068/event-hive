export default function Navbar() {
    return (
        <nav className="flex flex-row place-content-between py-4">
            <h1 className="font-bold text-2xl"><span>Event</span>
                <span className="text-[#7848F4] px-0.5 text-2xl">Hive</span>
            </h1>
            <div className="space-x-4 inline-block">
                <button className="font-bold">Login</button>
                <button className="bg-[#7848F4] text-white rounded-sm px-6 py-2 mr-4">Signup</button>
            </div>
        </nav>

    );
}