import {Linkedin, Instagram, Facebook} from "lucide-react";


export default function Footer() {
    return (
      <footer className="bg-navy-blue text-white">
        <h1 className="text-center py-3 font-bold text-2xl">
            <span>Event</span>
        <span className="text-[#7848F4] px-1">Hive</span>
        </h1>
        <form className="text-center text-black space-x-2">
            <input type="email" placeholder="Enter your mail" name="email" className="bg-white rounded-sm px-3 py-1" />
            <button type="submit" className="rounded-sm bg-[#7848F4] text-white px-5 py-1">Subscribe</button>

        </form>
        <div className="text-center space-x-5 py-7">
            <span>Home</span>
             <span>About</span>
              <span>Services</span>
               <span>Get in touch</span>
                <span>FAQs</span>
        </div>
        <hr />
        <div className="flex flex-row place-content-between py-5">
            <div className="space-x-4">
                <button className="hover:bg-[#7848F4]">English</button>
                <button className="hover:bg-[#7848F4]">French</button>
                <button className="hover:bg-[#7848F4]">Hindi</button>
            </div>
            <div className="flex flex-row pl-50 space-x-3">
                <Linkedin />
                <Instagram />
                <Facebook />
            </div>
            <p>Non Copyrighted© 2025 Upload by EventHive</p>
        </div>
      </footer>
    );
}
