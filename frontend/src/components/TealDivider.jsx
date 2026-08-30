import { A } from "../constants";

export default function TealDivider() {
    return (
        <div className="w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: 40 }}>
                <path d="M0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 L0 40 Z" fill={`${A}12`} />
                <path d="M0 28 Q360 10 720 28 Q1080 46 1440 28" stroke={`${A}20`} strokeWidth="1" fill="none" />
            </svg>
        </div>
    );
}