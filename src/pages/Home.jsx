import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
    // Declare state variable in React
    const [events, setEvents] = useState([]);

    // Define a function to fetch events from API
    const getEvents = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Run fetcher based on side-effects 
    useEffect(getEvents, []);




    return (
        <>
            <Navbar />
            <section className="bg-[url(./assets/images/hero-bg.png)] h-[596px] bg-no-repeat bg-cover w-[95%] mx-auto relative bg-[#f8f8fa]">
                <h1 className="text-big-heading text-white w-[30%] mx-auto text-center pt-32 font-bold">MADE FOR THOSE WHO DO</h1>
                <form className="bg-navy-blue w-[90%] mx-auto py-6 px-10 flex flex-row justify-between rounded-md absolute -bottom-12 left-[5%]">
                    <div className="flex flex-col w-[30%]">

                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md">
                            <option selected disabled>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">

                        <label htmlFor="type" className="text-white">Location</label>
                        <select name="location" id="location" className="bg-white p-2 rounded-md">
                            <option selected disabled>Choose location</option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">

                        <label htmlFor="type" className="text-white">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white rounded-md p-1.5" />
                    </div>
                    <div className="bg-primary text-white px-7 flex flex-row justify-center items-center rounded-md">
                        <Search />
                    </div>
                </form>
            </section>
            <section className="bg-[#f8f8fa]">
                <div className="mt-[105px] ">
                    <h1 className="ml-24">
                        <span className="font-bold text-2xl">Upcoming</span>
                        <span className="font-bold text-2xl text-[#7848F4]"> Events</span>
                    </h1>
                    <div className="flex flex-row justify-end mr-15 space-x-2">
                        <select name="when" id="when">
                            <option selected disabled>Weekdays</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                        </select>
                        <select name="event-type" id="event-type">
                            <option selected disabled>Event Type</option>
                            <option value="Festival">Festival</option>
                            <option value="Concert">Concert</option>
                        </select>
                        <select name="any-category" id="any-category">
                            <option selected disabled>Any Category</option>
                            <option value="Arts Culture">Arts Culture</option>
                            <option value="Community">Community</option>
                        </select>

                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 p-12.5 ml-10 w-[90%]">
                    {events.map(item => {
                        return (
                            <EventCard 
                            key={item.id} 
                            event={item} />
                        );
                    })}
                </div>

                <div className="text-center ">
                <button className="bg-[#7848F4] text-white rounded-sm px-4 py-3">Load more...</button>
            </div>
            </section>

            <section className="h-[500px]"></section>
            <Footer />
        </>

    );
}