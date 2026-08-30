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
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-display text-2xl text-[#dde6f0] tracking-tight">
                    Apex<span className="teal-gradient">Detail</span>
                </span>
                <div className="hidden md:flex items-center gap-8 text-sm text-[#6b8599] font-light">
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
                    className="text-sm font-medium text-[#0b0e14] px-5 py-2 rounded-full transition-colors duration-200"
                    style={{ background: A }}
                >
                    Book Now
                </a>
            </div>
        </nav>
    );
}