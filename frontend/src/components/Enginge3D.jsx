import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Torus, Cylinder } from "@react-three/drei";
import * as THREE from "three";

// ── scroll utility ───────────────────────────────────────────────────────────
function useScrollProgress(sectionRef) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const scrolled = -rect.top;
            setProgress(Math.min(1, Math.max(0, scrolled / total)));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [sectionRef]);
    return progress;
}

// ── info steps ───────────────────────────────────────────────────────────────
const steps = [
    {
        id: 0,
        label: "01",
        title: "Pre-Wash Foam",
        body: "High-expansion snow foam saturates every surface, breaking down road film and contamination without contact. We let the chemistry do the heavy lifting before a single mitt touches your paint.",
        icon: "◈",
    },
    {
        id: 1,
        label: "02",
        title: "Clay Bar Treatment",
        body: "A fine-grade clay bar glides across the paint, extracting bonded iron fallout, rail dust, and industrial particulates. The result is a glass-smooth surface ready for correction.",
        icon: "◉",
    },
    {
        id: 2,
        label: "03",
        title: "Machine Polish",
        body: "Dual-action and rotary polishers work through diminishing abrasive compounds, erasing swirl marks, light scratches, and oxidation. Measured with a gloss meter at every stage.",
        icon: "✦",
    },
    {
        id: 3,
        label: "04",
        title: "Ceramic Seal",
        body: "A professional-grade SiO₂ ceramic coating bonds to the clear coat, forming a semi-permanent hydrophobic shell. 9H hardness, 5-year durability, and a depth of gloss unmatched by any wax.",
        icon: "◆",
    },
];

// ── 3D machine: a stylised engine cross-section ──────────────────────────────
function Piston({ offset, speed }) {
    const ref = useRef(null);
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset;
        ref.current.position.y = Math.sin(t) * 0.5;
    });
    return (
        <mesh ref={ref} castShadow>
            <cylinderGeometry args={[0.28, 0.28, 0.7, 24]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.15} />
        </mesh>
    );
}

function ConnectingRod({ offset, speed }) {
    const ref = useRef(null);
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset;
        ref.current.rotation.z = Math.sin(t) * 0.4;
    });
    return (
        <group ref={ref}>
            <mesh>
                <cylinderGeometry args={[0.06, 0.06, 1.2, 8]} />
                <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.1} />
            </mesh>
        </group>
    );
}

function Crankshaft() {
    const ref = useRef(null);
    useFrame(({ clock }) => {
        ref.current.rotation.z = clock.getElapsedTime() * 1.8;
    });
    return (
        <group ref={ref}>
            <mesh>
                <cylinderGeometry args={[0.08, 0.08, 4.5, 16]} />
                <meshStandardMaterial color="#111" metalness={1} roughness={0.05} />
            </mesh>
            {[-1.5, -0.5, 0.5, 1.5].map((x, i) => (
                <mesh key={i} position={[x, 0.45, 0]}>
                    <cylinderGeometry args={[0.13, 0.13, 0.18, 16]} />
                    <meshStandardMaterial color="#8faab8" metalness={1} roughness={0.1} />
                </mesh>
            ))}
        </group>
    );
}

function GoldRing({ y, r, speed }) {
    const ref = useRef(null);
    useFrame(({ clock }) => {
        ref.current.rotation.y = clock.getElapsedTime() * speed;
        ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.3;
    });
    return (
        <Torus ref={ref} args={[r, 0.04, 16, 80]} position={[0, y, 0]}>
            <meshStandardMaterial color="#4d9b8c" metalness={1} roughness={0.1} emissive="#1d5c52" emissiveIntensity={0.3} />
        </Torus>
    );
}

function CoreOrb({ scrollP }) {
    const ref = useRef(null);
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        ref.current.rotation.y = t * 0.3 + scrollP * Math.PI * 2;
        ref.current.rotation.x = t * 0.15;
        const s = 1 + scrollP * 0.4;
        ref.current.scale.setScalar(s);
    });
    return (
        <mesh ref={ref} castShadow>
            <icosahedronGeometry args={[0.8, 4]} />
            <MeshDistortMaterial
                color="#0a0a0a"
                metalness={0.95}
                roughness={0.05}
                distort={0.25}
                speed={2}
                envMapIntensity={2}
            />
        </mesh>
    );
}

function GoldParticles() {
    const count = 200;
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 2 + Math.random() * 2.5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            arr[i * 3 + 2] = r * Math.cos(phi);
        }
        return arr;
    }, []);

    const ref = useRef(null);
    useFrame(({ clock }) => {
        ref.current.rotation.y = clock.getElapsedTime() * 0.08;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#4d9b8c" transparent opacity={0.7} sizeAttenuation />
        </points>
    );
}

function CylBore({ x }) {
    return (
        <group position={[x, 0.3, 0]}>
            <Cylinder args={[0.32, 0.32, 1.6, 24, 1, true]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#151515" metalness={0.9} roughness={0.2} side={THREE.BackSide} />
            </Cylinder>
            <Piston offset={x} speed={1.5} />
            <group position={[0, -0.8, 0]}>
                <ConnectingRod offset={x} speed={1.5} />
            </group>
        </group>
    );
}

function Machine({ scrollP }) {
    const groupRef = useRef(null);
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                scrollP * Math.PI * 1.5 - Math.PI * 0.25,
                0.06
            );
            groupRef.current.position.y = THREE.MathUtils.lerp(
                groupRef.current.position.y,
                scrollP * -0.5,
                0.06
            );
        }
    });

    return (
        <group ref={groupRef}>
            <GoldParticles />
            <GoldRing y={0} r={1.6} speed={0.4} />
            <GoldRing y={0.6} r={1.2} speed={-0.3} />
            <GoldRing y={-0.6} r={1.3} speed={0.55} />

            {/* Engine block */}
            <Float speed={0.6} rotationIntensity={0} floatIntensity={0.1}>
                <group position={[0, 0.4, 0]}>
                    {/* Block body */}
                    <mesh position={[0, -0.2, 0]} castShadow>
                        <boxGeometry args={[3.8, 1.2, 0.9]} />
                        <meshStandardMaterial color="#181818" metalness={0.8} roughness={0.25} />
                    </mesh>
                    {/* Cylinder bores */}
                    <CylBore x={-1.5} />
                    <CylBore x={-0.5} />
                    <CylBore x={0.5} />
                    <CylBore x={1.5} />
                    {/* Crankshaft housing */}
                    <mesh position={[0, -1.1, 0]}>
                        <boxGeometry args={[4, 0.5, 0.9]} />
                        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.15} />
                    </mesh>
                    <group position={[0, -1.2, 0]}>
                        <Crankshaft />
                    </group>
                </group>
            </Float>

            <CoreOrb scrollP={scrollP} />
        </group>
    );
}

function Scene({ scrollP }) {
    return (
        <>
            <Environment preset="night" />
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-5, -2, -5]} intensity={1.5} color="#4d9b8c" />
            <pointLight position={[0, 3, 3]} intensity={1} color="#4466ff" />
            <Machine scrollP={scrollP} />
        </>
    );
}

// ── info panel ────────────────────────────────────────────────────────────────
function InfoPanel({ step, visible }) {
    return (
        <div
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
        >
            <div className="glass rounded-3xl p-8 max-w-sm">
                <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl text-[#4d9b8c]">{step.icon}</span>
                    <span className="text-xs tracking-[0.3em] uppercase text-[#3a4d5c] font-medium">{step.label}</span>
                </div>
                <h3 className="font-display text-3xl text-[#dde6f0] mb-4">{step.title}</h3>
                <p className="text-[#6b8599] text-sm leading-relaxed font-light">{step.body}</p>
            </div>
        </div>
    );
}

// ── exported section ──────────────────────────────────────────────────────────
export default function Engine3DSection() {
    const sectionRef = useRef(null);
    const scrollP = useScrollProgress(sectionRef);

    const activeStep = Math.min(steps.length - 1, Math.floor(scrollP * steps.length));

    return (
        <section
            ref={sectionRef}
            id="process"
            style={{ height: `${steps.length * 100 + 100}vh` }}
            className="relative"
        >
            {/* sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
                {/* section header */}
                <div className="pt-16 pb-4 text-center z-10 relative">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#4d9b8c] mb-2">The Science Behind the Shine</p>
                    <h2 className="font-display text-5xl md:text-6xl text-[#dde6f0]">Our Process</h2>
                </div>

                {/* main layout */}
                <div className="flex-1 flex items-center relative px-6 max-w-7xl mx-auto w-full gap-8">
                    {/* LEFT – step info */}
                    <div className="hidden md:flex flex-col justify-center w-80 flex-shrink-0 z-10">
                        <InfoPanel step={steps[activeStep]} visible={true} />

                        {/* progress dots */}
                        <div className="flex gap-2 mt-8 ml-8">
                            {steps.map((s, i) => (
                                <div
                                    key={s.id}
                                    className={`transition-all duration-500 rounded-full ${i === activeStep
                                            ? "w-8 h-2 bg-[#4d9b8c]"
                                            : i < activeStep
                                                ? "w-2 h-2 bg-[#4d9b8c]/40"
                                                : "w-2 h-2 bg-white/10"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* CENTER – 3D canvas */}
                    <div className="flex-1 h-full relative min-h-0">
                        <Canvas
                            camera={{ position: [0, 1, 6], fov: 45 }}
                            gl={{ antialias: true, alpha: true }}
                            style={{ background: "transparent" }}
                        >
                            <Scene scrollP={scrollP} />
                        </Canvas>

                        {/* mobile step label */}
                        <div className="md:hidden absolute bottom-8 left-0 right-0 px-6">
                            <div className="glass rounded-2xl p-5">
                                <p className="text-xs text-[#4d9b8c] uppercase tracking-widest mb-1">{steps[activeStep].label} — {steps[activeStep].title}</p>
                                <p className="text-xs text-[#6b8599] leading-relaxed">{steps[activeStep].body}</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT – step list */}
                    <div className="hidden lg:flex flex-col gap-3 w-64 flex-shrink-0 z-10">
                        {steps.map((s, i) => (
                            <div
                                key={s.id}
                                className={`rounded-2xl p-4 transition-all duration-500 ${i === activeStep
                                        ? "bg-white/[0.06] border border-white/10"
                                        : "border border-transparent opacity-40"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg text-[#4d9b8c]">{s.icon}</span>
                                    <div>
                                        <p className="text-xs text-[#3a4d5c] uppercase tracking-widest">{s.label}</p>
                                        <p className="text-sm text-[#dde6f0] font-medium">{s.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* scroll progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
                    <div
                        className="h-full bg-[#4d9b8c] transition-all duration-100"
                        style={{ width: `${scrollP * 100}%` }}
                    />
                </div>
            </div>
        </section>
    );
}