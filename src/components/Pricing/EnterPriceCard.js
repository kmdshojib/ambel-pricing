import * as React from "react";
import arrow from "../../../assets/arraow.svg"
export const EnterpriseCard = ({
    icon,
    price,
    practitionerCount,
    features
}) => {
    return (
        <div style={{background:"white"}} className="flex overflow-hidden flex-col flex-1 shrink bg-white rounded-2xl border border-gray-200 border-solid shadow-lg basis-0 min-w-[240px]">
            <div className="flex flex-col px-8 pt-8 w-full max-md:px-5">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full text-xl font-semibold text-center text-cyan-900 whitespace-nowrap">
                        <img loading="lazy" src={icon} alt="" className="object-contain self-center w-10 rounded-3xl aspect-square" />
                        <div className="mt-5">Enterprise</div>
                    </div>
                    <div className="mt-2 text-5xl font-semibold tracking-tighter leading-none text-center text-gray-900 max-md:text-4xl">
                        <span className="text-3xl">$</span>{price}
                    </div>
                    <div className="flex gap-2 self-center mt-2 max-w-full rounded-none w-[217px]">
                        <div className="grow text-base font-medium text-zinc-600">Practitioner Number</div>
                        <div className="flex gap-4 px-1 my-auto text-sm text-gray-900 whitespace-nowrap rounded border border-cyan-900 border-solid bg-zinc-300">
                            <div>{practitionerCount}</div>
                            <img loading="lazy" src={arrow} alt="" className="object-contain shrink-0 my-auto aspect-[0.54] w-[7px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center p-8 w-full text-base text-slate-600 max-md:px-5">
                <div className="flex flex-col w-full">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex gap-3 items-start w-full ${index > 0 ? 'mt-4' : ''}`}>
                            <img loading="lazy" src={feature.icon} alt="" className="object-contain shrink-0 w-6 rounded-xl aspect-square" />
                            <div className="flex-1 shrink min-w-[240px]">{feature.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center p-8 w-full text-base font-semibold text-white bg-gray-50 max-md:px-5">
                <div className="flex flex-col w-full">
                    <button
                        className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-3 w-full bg-cyan-900 rounded-lg border border-cyan-900 border-solid shadow-sm min-w-[240px]"
                        aria-label="Get started with Enterprise plan"
                    >
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
};