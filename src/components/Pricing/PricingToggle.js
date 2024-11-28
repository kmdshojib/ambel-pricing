import React from "react";

export const PricingToggle = () => {
    let isYearly = false;

    const handleToggle = (yearly) => {
        isYearly = yearly;

        // Update button styles
        const monthlyButton = document.getElementById("monthly-btn");
        const yearlyButton = document.getElementById("yearly-btn");

        if (yearly) {
            yearlyButton.classList.add("bg-white", "rounded-lg");
            monthlyButton.classList.remove("bg-white", "rounded-lg");
        } else {
            monthlyButton.classList.add("bg-white", "rounded-lg");
            yearlyButton.classList.remove("bg-white", "rounded-lg");
        }


    };

    React.useEffect(() => {
        const monthlyButton = document.getElementById("monthly-btn");
        const yearlyButton = document.getElementById("yearly-btn");

        // Add event listeners
        monthlyButton.addEventListener("click", () => handleToggle(false));
        yearlyButton.addEventListener("click", () => handleToggle(true));

        // Cleanup event listeners
        return () => {
            monthlyButton.removeEventListener("click", () => handleToggle(false));
            yearlyButton.removeEventListener("click", () => handleToggle(true));
        };
    }, []);

    return (
        <div className="flex gap-1 items-start p-1 mt-10 text-base font-semibold text-gray-900 whitespace-nowrap bg-gray-200 rounded-lg">
            <button
                id="monthly-btn"
                className="gap-2.5 self-stretch px-12 py-2 bg-white rounded-lg max-md:px-5"
                tabIndex={0}
                aria-label="Switch to monthly pricing"
            >
                Monthly
            </button>
            <button
                id="yearly-btn"
                className="gap-2.5 self-stretch px-14 py-2 max-md:px-5"
                tabIndex={0}
                aria-label="Switch to yearly pricing"
            >
                Yearly
            </button>
        </div>
    );
};
