import { useState } from "react";
import { A } from "../constants";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", car: "", service: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    if (sent) {
        return (
            <div className="glass rounded-3xl p-12 text-center">
                <div className="text-5xl mb-6" style={{ color: A }}>✓</div>
                <h3 className="font-display text-3xl text-[#dde6f0] mb-3">We&apos;ll be in touch</h3>
                <p className="text-[#6b8599]">Thank you for your enquiry. Expect a response within 2 business hours.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs text-[#6b8599] uppercase tracking-widest mb-2">Full Name</label>
                    <input name="name" placeholder="Rhys Williams" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-xs text-[#6b8599] uppercase tracking-widest mb-2">Email</label>
                    <input name="email" type="email" placeholder="rhys@email.co.uk" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-xs text-[#6b8599] uppercase tracking-widest mb-2">Phone</label>
                    <input name="phone" placeholder="+44 7700 900 000" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-xs text-[#6b8599] uppercase tracking-widest mb-2">Your Vehicle</label>
                    <input name="car" placeholder="e.g. BMW M4 Competition" value={form.car} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label className="block text-xs text-[#6b8599] uppercase tracking-widest mb-2">Service Required</label>
                <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    <option>Full Detail</option>
                    <option>Paint Correction</option>
                    <option>Ceramic Coating</option>
                    <option>Interior Detail</option>
                    <option>Alloy Wheel Restoration</option>
                    <option>Paint Protection Film</option>
                    <option>Not sure – need advice</option>
                </select>
            </div>
            <div>
                <label className="block text-xs text-[#6b8599] uppercase tracking-widest mb-2">Additional Notes</label>
                <textarea name="message" placeholder="Tell us about your vehicle's condition, any specific concerns, or preferred date…" value={form.message} onChange={handleChange} />
            </div>
            <button
                type="submit"
                className="w-full py-4 rounded-2xl font-medium text-[#0b0e14] transition-opacity duration-200 hover:opacity-80 text-sm tracking-wide"
                style={{ background: A }}
            >
                Send Enquiry
            </button>
            <p className="text-center text-xs text-[#3a4d5c]">Based in Cardiff, Wales · Serving South Wales &amp; beyond · Response within 2 hours</p>
        </form>
    );
}