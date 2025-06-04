// import eventCardImage from "../assets/images/event-card.png";

export default function EventCard({event}) {
    return(
        <div className="bg-white rounded-xl shadow-lg overflow-hidden py-7 px-5 ">
            <img src={event.image} alt="Event Card" />
            <h1 className="font-semibold py-2.5">BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2 className="text-[#7848F4] font-semibold py-4">Saturday, March 19, 9.30PM</h2>
            <h3 className="text-[#7E7E7E]">ONLINE EVENT- Attend anywhere</h3>
        </div>
    );
}