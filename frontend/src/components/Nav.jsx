import { useState, useEffect } from "react";
import { A } from "../constants";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative">

                <a href="#" className="font-serif text-[1.35rem] text-[#dde6f0] tracking-wide">
                    TimDetail
                </a>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-sm text-[#8c9bab] font-light">
                    {["Services", "Process", "Pricing", "Gallery", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-[#dde6f0] transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="text-sm font-medium text-[#0b0e14] px-6 py-2.5 rounded-full transition-transform hover:scale-105 duration-200"
                    style={{ background: A }}
                >
                    Book Now
                </a>
            </div>
        </nav>
    );
}