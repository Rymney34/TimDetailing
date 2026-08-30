function Footer(){
    return(
        <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(150,190,215,0.07)" }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <span className="font-display text-2xl text-[#dde6f0]">
                    Apex<span className="teal-gradient">Detail</span>
                </span>
                <p className="text-[#3a4d5c] text-sm text-center">
                    © 2024 ApexDetail Ltd · Cardiff, Wales · Registered in England &amp; Wales
                </p>
                <div className="flex gap-6 text-sm text-[#3a4d5c]">
                    <a href="#" className="hover:text-[#dde6f0] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#dde6f0] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[#dde6f0] transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer