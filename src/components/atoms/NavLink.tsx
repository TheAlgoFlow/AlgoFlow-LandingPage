import React, { AnchorHTMLAttributes } from 'react';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    hasDropdown?: boolean;
    mobile?: boolean;
    children: React.ReactNode;
}

export default function NavLink({ hasDropdown, mobile, children, className = '', ...props }: NavLinkProps) {
    const baseClasses = "hover:text-black transition-colors flex";
    const layoutClasses = mobile
        ? "py-2 border-b border-black/5 items-center justify-between"
        : "items-center gap-1";

    return (
        <a className={`${baseClasses} ${layoutClasses} ${className}`} {...props}>
            {children}
            {hasDropdown && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={mobile ? "opacity-70" : "opacity-70 mt-[2px]"}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            )}
        </a>
    );
}
