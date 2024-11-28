import React from 'react';
import { CTAButton } from './CTABtn';

const Trial = () => {
    return (
        <section
            className="flex flex-wrap gap-6 justify-between items-center p-8 md:p-16 rounded-2xl bg-[#F5FFFD] max-md:px-5"
            role="region"
            aria-labelledby="cta-heading"
        >
            <div className="flex flex-col text-cyan-900 w-full md:w-[768px]">
                <h2
                    id="cta-heading"
                    className="text-3xl font-semibold leading-none max-md:text-2xl"
                >
                    Start your 30-day free trial
                </h2>
                <p className="mt-4 text-lg md:text-xl">
                    Join over 100+ practitioners and organizations already growing with Ambel
                </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start text-base font-semibold">
                <div className="flex items-start rounded-lg">
                    <CTAButton variant="secondary">Learn more</CTAButton>
                </div>
                <div className="flex items-start rounded-lg">
                    <CTAButton variant="primary">Get started</CTAButton>
                </div>
            </div>
        </section>
    );
};

export default Trial;
