function Services(){
    return(
        <section id="services" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: A }}>What We Offer</p>
                <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0]">Services</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                {services.map((s) => (
                    <div
                    key={s.title}
                    className="glass rounded-3xl p-8 flex flex-col gap-5 group hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                    {s.tag && (
                        <span className="self-start text-[10px] tracking-widest uppercase font-medium px-3 py-1 rounded-full" style={{ background: `${A}15`, color: A, border: `1px solid ${A}25` }}>
                        {s.tag}
                        </span>
                    )}
                    <div className="text-3xl" style={{ color: A }}>{s.icon}</div>
                    <div>
                        <h3 className="font-display text-2xl text-[#dde6f0] mb-1">{s.title}</h3>
                        <p className="text-sm font-medium" style={{ color: A2 }}>{s.price}</p>
                    </div>
                    <p className="text-[#6b8599] text-sm leading-relaxed font-light">{s.desc}</p>
                    <a
                        href="#contact"
                        className="mt-auto text-sm text-[#dde6f0]/50 hover:text-[#dde6f0] transition-colors flex items-center gap-2 group-hover:gap-3 duration-200"
                    >
                        Enquire <span>→</span>
                    </a>
                    </div>
                ))}
                </div>
            </div>
        </section>
        
    )

}
export default Services