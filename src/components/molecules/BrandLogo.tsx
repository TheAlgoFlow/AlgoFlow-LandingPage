import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
    className?: string;
    imageSize?: number;
    textClassName?: string;
    flowClassName?: string;
}

export default function BrandLogo({
    className = "",
    imageSize = 32,
    textClassName = "font-semibold text-base text-inherit",
}: BrandLogoProps) {
    return (
        <Link href="/" className={`flex items-center gap-2 ${className}`}>
            <div
                className="relative flex items-center justify-center shrink-0"
                style={{ width: imageSize, height: imageSize }}
            >
                <Image
                    src="/AlgoFlow-Logo.png"
                    alt="Algo Flow Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <span className={`flex items-center gap-1 whitespace-nowrap ${textClassName}`}>
                Algo{" "}
                <span className="flex items-baseline">
                    <span style={{ color: "#CCFF00" }}>F</span>
                    <span style={{ color: "#FF6B00" }}>l</span>
                    <span style={{ color: "#F900FF" }}>o</span>
                    <span style={{ color: "#5200FF" }}>w</span>
                </span>
            </span>
        </Link>
    );
}
