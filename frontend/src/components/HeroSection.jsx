import { A } from "../constants";


export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="../../resources/img/homeMain2.jpg"
                    alt="Luxury car"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/70 via-transparent to-[#0b0e14]" />
                <div className="absolute bottom-0 left-0 right-0 h-64" style={{ background: `linear-gradient(to top, ${A}08, transparent)` }} />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <p className="fade-up fade-up-1 text-xs tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: A }}>
                    Local Car Detailing · Cardiff, Wales
                </p>
                <h1 className="fade-up fade-up-2 font-display text-6xl md:text-8xl lg:text-9xl text-[#dde6f0] leading-[0.95] mb-8">
                    Your car,<br />
                    <em className="teal-gradient not-italic">perfected.</em>
                </h1>
                <p className="fade-up fade-up-3 text-lg md:text-xl text-[#6b8599] max-w-xl mx-auto mb-12 font-light leading-relaxed">
                    Obsessive attention to detail. Showroom-grade results. Studio and mobile service across Cardiff and South Wales.
                </p>
                <div className="fade-up fade-up-3 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full text-sm font-medium text-[#0b0e14] transition-opacity duration-200 hover:opacity-80"
                        style={{ background: A }}
                    >
                        Book a Detail
                    </a>
                    <a
                        href="#results"
                        className="px-8 py-4 rounded-full glass text-[#dde6f0] text-sm font-medium hover:border-white/20 transition-colors duration-300"
                    >
                        See the Results
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <div className="w-px h-10 animate-pulse" style={{ background: A }} />
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: A }}>Scroll</span>
            </div>
        </section>
    );
}