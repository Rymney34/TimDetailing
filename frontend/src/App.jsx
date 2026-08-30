import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import TealDivider from "./components/TealDivider";
import Engine3DSection from "./components/Engine3D";
import { A, A2 } from "./constants";
import { services, gallery, testimonials } from "./data";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-full bg-[#0b0e14] text-[#dde6f0]">
      <Nav />
      <HeroSection />
      <TealDivider />

      {/* SERVICES */}
      
      {/* 3D PROCESS */}
      <Engine3DSection />

      {/* BEFORE / AFTER */}
      <section id="results" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: A }}>The Transformation</p>
            <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0] mb-4">Before &amp; After</h2>
            <p className="text-[#6b8599] font-light">Drag the slider to reveal the difference.</p>
          </div>
          <BeforeAfterSlider />
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            {[["8+", "Years Experience"], ["2,400+", "Cars Detailed"], ["100%", "Satisfaction Rate"]].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl p-6">
                <div className="font-display text-4xl text-[#dde6f0] mb-1">{n}</div>
                <div className="text-xs text-[#6b8599] uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <PricingSection />

      {/* GALLERY */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: A }}>Previous Work</p>
            <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0]">Our Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((item) => (
              <div
                key={item.car}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
                style={{ background: "#121820" }}
              >
                <img
                  src={item.img}
                  alt={item.car}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-display text-lg text-[#dde6f0]">{item.car}</p>
                  <p className="text-xs uppercase tracking-widest mt-0.5" style={{ color: A }}>{item.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: A }}>Client Reviews</p>
            <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0]">What They Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-3xl p-8 flex flex-col gap-5">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-sm" style={{ color: A }}>★</span>
                  ))}
                </div>
                <p className="text-[#b0c4d4] text-sm leading-relaxed font-light flex-1">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-[#dde6f0] font-medium text-sm">{t.name}</p>
                  <p className="text-[#6b8599] text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: A }}>Get in Touch</p>
            <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0] mb-4">Book Your Detail</h2>
            <p className="text-[#6b8599] font-light">Fill in the form and we&apos;ll get back to you within 2 hours.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}