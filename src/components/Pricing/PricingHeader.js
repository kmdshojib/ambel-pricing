import * as React from "react";

export function PricingHeader() {
    return (
        <div className="flex flex-col items-center w-full max-md:max-w-full">
            <div className="flex flex-col max-w-full text-center w-[1024px]">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex items-start self-center text-sm font-medium leading-none text-cyan-900 bg-blend-multiply">
                        <div className="self-stretch px-3 py-1 bg-purple-50 rounded-2xl">
                            Pricing plans
                        </div>
                    </div>
                    <div className="mt-4 text-5xl font-semibold text-green-700 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                        Let's Get Started.
                        <br />
                        We've got a Plan that's perfect for you.{" "}
                    </div>
                </div>
                <div className="mt-6 text-xl text-sky-600 max-md:max-w-full">
                    Simple, transparent pricing that grows with you. Try any plan free for 30 days.
                </div>
            </div>
        </div>
    );
}