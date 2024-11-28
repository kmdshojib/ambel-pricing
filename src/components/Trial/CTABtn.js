import * as React from "react";

export const CTAButton = ({ variant = "primary", children, onClick }) => {
    const baseStyles = "overflow-hidden gap-2 self-stretch px-5 py-3 rounded-lg border border-solid shadow-sm";
    const styles = {
        primary: `${baseStyles} bg-cyan-900 text-white border-cyan-900`,
        secondary: `${baseStyles} bg-white text-slate-700 border-gray-300`
    };

    return (
        <button
            className={styles[variant]}
            onClick={onClick}
            type="button"
            role="button"
            tabIndex={0}
        >
            {children}
        </button>
    );
}