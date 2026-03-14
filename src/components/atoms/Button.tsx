import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon';
    fullWidth?: boolean;
    children: React.ReactNode;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsLink = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ variant = 'primary', size = 'md', fullWidth, className = '', children, ...props }: ButtonProps) {
    let baseStyles = "font-medium transition-all flex items-center justify-center gap-2";

    if (fullWidth) {
        baseStyles += " w-full";
    }

    // Variant styles
    if (variant === 'primary') {
        baseStyles += " bg-[#5200FF] text-white hover:bg-[#4400DD] shadow-sm hover:shadow-md";
    } else if (variant === 'secondary') {
        baseStyles += " bg-surface border border-border text-muted hover:bg-[#F5F1EB] hover:border-faint";
    } else if (variant === 'ghost') {
        baseStyles += " hover:bg-foreground/5 text-foreground shadow-none";
    }

    // Size styles
    if (size === 'xs') {
        baseStyles += " px-4 py-2 rounded-full text-[14px]";
    } else if (size === 'sm') {
        baseStyles += " px-5 py-2.5 rounded-full text-[14px]";
    } else if (size === 'md') {
        baseStyles += " px-5 py-3 rounded-xl text-[14px]";
    } else if (size === 'lg') {
        baseStyles += " px-8 py-2.5 rounded-full text-lg";
    } else if (size === 'icon') {
        baseStyles += " p-2 rounded-lg";
    }

    const combinedClasses = `${baseStyles} ${className}`.trim();

    if (props.as === 'a') {
        const { as, ...linkProps } = props;
        return <a className={combinedClasses} {...linkProps}>{children}</a>;
    }

    const { as, ...buttonProps } = props;
    return <button className={combinedClasses} {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}
