import { useState } from "react";
import { A } from "../constants";
import { pricingServices, packages } from "../data";

function AccentBullet() {
    return (
        <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: `1px solid ${A}60` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: A }} />
        </span>
    );
}

export default function PricingSection() {
    const [activeService, setActiveService] = useState(0);
    const s = pricingServices[activeService];

    return (
        <section id="pricing" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="mb-20 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: A }}>Transparent Pricing</p>
                    <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0] mb-4">Services &amp; Pricing</h2>
                    <p className="text-[#6b8599] font-light max-w-md mx-auto">
                        Every price is all-inclusive — no hidden charges. Prices vary by vehicle size; quotes below are for a standard saloon.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-24">
                    <div className="flex flex-col gap-2">
                        {pricingServices.map((sv, i) => (
                            <button
                                key={sv.name}
                                onClick={() => setActiveService(i)}
                                className="text-left rounded-2xl px-6 py-4 transition-all duration-300 flex items-center gap-4"
                                style={i === activeService
                                    ? { background: "rgba(77,155,140,0.08)", border: `1px solid rgba(77,155,140,0.22)` }
                                    : { border: "1px solid transparent" }
                                }
                            >
                                <span className="text-xl transition-colors duration-300" style={{ color: i === activeService ? A : "#2e4050" }}>{sv.icon}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium transition-colors" style={{ color: i === activeService ? "#dde6f0" : "#6b8599" }}>{sv.name}</p>
                                    <p className="text-xs text-[#3a4d5c] truncate">{sv.tagline}</p>
                                </div>
                                <span className="text-sm font-display font-semibold transition-colors" style={{ color: i === activeService ? A : "#2e4050" }}>{sv.price}</span>
                            </button>
                        ))}
                    </div>

                    <div className="glass rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
                        {s.badge && (
                            <span className="absolute top-6 right-6 text-[10px] tracking-widest uppercase font-medium px-3 py-1.5 rounded-full" style={{ background: `${A}18`, color: A, border: `1px solid ${A}30` }}>
                                {s.badge}
                            </span>
                        )}
                        <div className="flex items-start gap-4">
                            <span className="text-3xl" style={{ color: A }}>{s.icon}</span>
                            <div>
                                <h3 className="font-display text-3xl text-[#dde6f0]">{s.name}</h3>
                                <p className="text-[#6b8599] text-sm mt-1">{s.tagline}</p>
                            </div>
                        </div>

                        <div className="flex items-end gap-2 border-t pt-6" style={{ borderColor: "rgba(150,190,215,0.08)" }}>
                            <span className="font-display text-5xl text-[#dde6f0]">{s.price}</span>
                            <span className="text-[#3a4d5c] text-sm mb-2">{s.unit}</span>
                            <span className="ml-auto text-xs text-[#3a4d5c] mb-2">⏱ {s.time}</span>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs tracking-widest uppercase text-[#3a4d5c]">What&apos;s included</p>
                            {s.steps.map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <AccentBullet />
                                    <p className="text-sm text-[#b0c4d4] leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="mt-auto py-3.5 rounded-2xl text-center text-sm font-medium text-[#0b0e14] transition-opacity duration-200 hover:opacity-80"
                            style={{ background: A }}
                        >
                            Book {s.name}
                        </a>
                    </div>
                </div>

                <div className="mb-10 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase mb-3 font-medium" style={{ color: A }}>Bundled Packages</p>
                    <h3 className="font-display text-4xl text-[#dde6f0]">Save more, get more</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className="relative rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
                            style={pkg.highlight
                                ? { background: "rgba(77,155,140,0.07)", border: `1px solid rgba(77,155,140,0.25)`, boxShadow: `0 0 60px rgba(77,155,140,0.07)` }
                                : undefined
                            }
                        >
                            {!pkg.highlight && <div className="absolute inset-0 rounded-3xl glass pointer-events-none" />}
                            {pkg.highlight && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase font-medium px-4 py-1.5 rounded-full text-[#0b0e14]" style={{ background: A }}>
                                    Most Popular
                                </span>
                            )}
                            <div className="relative">
                                <h4 className="font-display text-2xl text-[#dde6f0] mb-1">{pkg.name}</h4>
                                <p className="text-[#6b8599] text-sm">{pkg.desc}</p>
                            </div>
                            <div className="relative border-t pt-5" style={{ borderColor: "rgba(150,190,215,0.08)" }}>
                                <span className="font-display text-4xl text-[#dde6f0]">{pkg.price}</span>
                                <span className="text-[#3a4d5c] text-sm ml-2">all-in</span>
                            </div>
                            <ul className="relative space-y-2.5 flex-1">
                                {pkg.includes.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-[#b0c4d4]">
                                        <span className="text-xs" style={{ color: A }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className="relative py-3.5 rounded-2xl text-center text-sm font-medium transition-all duration-300"
                                style={pkg.highlight
                                    ? { background: A, color: "#0b0e14" }
                                    : { background: "rgba(150,190,215,0.06)", color: "#dde6f0", border: "1px solid rgba(150,190,215,0.10)" }
                                }
                            >
                                Choose {pkg.name}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-[#3a4d5c] mt-8">
                    Prices shown for standard saloon. SUVs &amp; vans add 20–30%. Based in Cardiff — serving all of South Wales &amp; beyond.
                </p>
            </div>
        </section>
    );
}