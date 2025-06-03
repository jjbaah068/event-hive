import {Linkedin, Instagram, Facebook} from "lucide-react";


export default function Footer() {
    return (
      <footer className="bg-navy-blue text-white">
        <h1 className="text-center py-3 font-bold text-2xl">
            <span>Event</span>
        <span className="text-[#7848F4] px-1">Hive</span>
        </h1>
        <form>
            <input type="email" placeholder="Enter your mail" name="email" />
            <button type="submit">Subscribe</button>

        </form>
        <div>
            <span>Home</span>
             <span>About</span>
              <span>Services</span>
               <span>Get in touch</span>
                <span>FAQs</span>
        </div>
        <hr />
        <div>
            <div>
                <button>English</button>
                <button>French</button>
                <button>Hindi</button>
            </div>
            <div>
                <Linkedin />
                <Instagram />
                <Facebook />
            </div>
            <p>Non Copyrighted© 2025 Upload by EventHive</p>
        </div>
      </footer>
    );
}
