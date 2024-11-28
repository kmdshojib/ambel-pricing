import * as React from "react";
import { PricingCard } from "./PricingCard";
import { EnterpriseCard } from "./EnterPriceCard";
import { PricingHeader } from "./PricingHeader";
import { PricingToggle } from "./PricingToggle";
import thunder from "../../../assets/thunder.png"
import pp from "../../../assets/practioner.png"
import tik from "../../../assets/thunder.png"
import bg from "../../../assets/bg.svg"
import Trial from "../Trial/Trial";

const pricingData = {
    payAsYouGo: {
        icon: `${thunder}`,
        title: "Pay As You Go",
        price: "10%",
        subtitle: "10% from your customer payment",
        features: [
            { icon: `${tik}`, text: "Only pre-paid booking" },
            { icon: `${tik}`, text: "Both practitioner and Organization" },
            { icon: `${tik}`, text: "Up to 5 practitioners in organization" },
            { icon: `${tik}`, text: "2 staff members are allowed" },
            { icon: `${tik}`, text: "Basic chat and email support" }
        ]
    },
    practitioner: {
        icon: `${pp}`,
        title: "Practitioner",
        price: "$49",
        subtitle: "1 practitioner license/monthly",
        features: [
            { icon: `${tik}`, text: "All booking options" },
            { icon: `${tik}`, text: "All schedule Feature" },
            { icon: `${tik}`, text: "Individual single practitioner license" },
            { icon: `${tik}`, text: "3 staff members are allowed" },
            { icon: `${tik}`, text: "Unlimited email marketing" }
        ]
    },
    enterprise: {
        icon: `${pp}`,
        price: "39",
        practitionerCount: "10",
        features: [
            { icon: `${tik}`, text: "All booking options" },
            { icon: `${tik}`, text: "Only for Organization" },
            { icon: `${tik}`, text: "Unlimited practitioners and staff" },
            { icon: `${tik}`, text: "Customizable 6 page website" },
            { icon: `${tik}`, text: "E-commerce functionality" }
        ]
    }
};

const PricingSection = () => {
    return (
        <>
            {/* Pricing Section Header */}
            <div className="flex flex-col pt-16 bg-teal-50">
                <div className="flex flex-col items-center px-8 max-w-7xl w-full mx-auto max-md:px-5">
                    <PricingHeader />
                    <PricingToggle />
                </div>
                <img
                    loading="lazy"
                    src={bg}
                    alt="Pricing Illustration"
                    className="object-contain w-full max-w-[1440px] mx-auto max-md:px-5"
                />
            </div>

            {/* Main Pricing Plans */}
            <main
                className="flex flex-col items-center justify-center gap-16 p-8 max-w-7xl w-full mx-auto relative md:bottom-[285px] bottom-[85px]"
                role="main"
                aria-label="Pricing plans"
            >
                {/* Pricing Cards */}
                <div className="flex flex-wrap gap-8 justify-center items-start w-full">
                    <PricingCard {...pricingData.payAsYouGo} />
                    <PricingCard {...pricingData.practitioner} />
                    <EnterpriseCard {...pricingData.enterprise} />
                </div>

                {/* Trial Component */}
                <div className="flex justify-center w-full mt-16">
                    <Trial />
                </div>
            </main>
        </>
    );
};

export default PricingSection;