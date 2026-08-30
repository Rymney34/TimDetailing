import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider() {
    const [position, setPosition] = useState(50);
    const containerRef = useRef(null);
    const dragging = useRef(false);

    const updatePosition = useCallback((clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
        setPosition(pct);
    }, []);

    const onMouseDown = () => { dragging.current = true; };
    const onMouseMove = (e) => { if (dragging.current) updatePosition(e.clientX); };
    const onMouseUp = () => { dragging.current = false; };
    const onTouchMove = (e) => { updatePosition(e.touches[0].clientX); };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl select-none cursor-col-resize"
            style={{ maxHeight: 560 }}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
        >
            <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1400&h=800&fit=crop&auto=format"
                alt="After car detailing"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />
            <div className="absolute bottom-5 right-5 glass text-[#dde6f0] text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full z-10">
                After
            </div>

            <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
                <img
                    src="https://images.unsplash.com/photo-1770935883781-a2f5a52b69da?w=1400&h=800&fit=crop&auto=format"
                    alt="Before car detailing"
                    className="absolute inset-0 h-full object-cover"
                    style={{ width: containerRef.current?.offsetWidth ?? 1400 }}
                    draggable={false}
                />
            </div>
            <div className="absolute bottom-5 left-5 glass text-[#dde6f0] text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full z-10">
                Before
            </div>

            <div
                className="slider-handle"
                style={{ left: `${position}%` }}
                onMouseDown={onMouseDown}
                onTouchMove={onTouchMove}
            >
                <span className="slider-arrow-left" />
                <span className="slider-arrow-right" />
            </div>
        </div>
    );
}