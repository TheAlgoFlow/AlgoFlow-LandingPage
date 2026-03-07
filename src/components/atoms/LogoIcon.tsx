export default function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H22L12 2Z" fill="url(#paint0_linear)" />
            <defs>
                <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4285F4" />
                    <stop offset="0.5" stopColor="#34A853" />
                    <stop offset="1" stopColor="#FBBC05" />
                </linearGradient>
            </defs>
        </svg>
    );
}
