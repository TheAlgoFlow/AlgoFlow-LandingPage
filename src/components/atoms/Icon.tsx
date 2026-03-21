import React from "react";

type IconName = "menu" | "x" | "chevron-down" | "chevron-up" | "arrow-right" | "check" | "zap";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
    className?: string;
}

const paths: Record<IconName, React.ReactNode> = {
    check: <polyline points="20 6 9 17 4 12" />,
    x: (
        <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </>
    ),
    "chevron-down": <polyline points="6 9 12 15 18 9" />,
    "chevron-up": <polyline points="18 15 12 9 6 15" />,
    "arrow-right": (
        <>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </>
    ),
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    menu: (
        <>
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </>
    ),
};

export default function Icon({ name, size = 20, className = "", ...props }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
            {...props}
        >
            {paths[name]}
        </svg>
    );
}
