import * as React from "react";

export const PricingCard = ({
    icon,
    title,
    price,
    subtitle,
    features,
    buttonText = "Get started"
}) => {
    return (
        <div  style={{background:"white"}}  className="flex overflow-hidden flex-col flex-1 shrink font-semibold bg-white rounded-2xl border border-gray-200 border-solid shadow-lg basis-0 min-w-[240px]">
            <div className="flex flex-col px-8 pt-8 w-full text-center max-md:px-5">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full text-xl text-cyan-900">
                        <img loading="lazy" src={icon} alt="" className="object-contain self-center w-10 rounded-3xl aspect-square" />
                        <div className="mt-5">{title}</div>
                    </div>
                    <div className="mt-2 text-5xl tracking-tighter leading-none text-gray-900 max-md:text-4xl">
                        {price}
                    </div>
                    <div className="mt-2 text-base text-slate-600">{subtitle}</div>
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
            <div className="flex flex-col justify-center p-8 w-full text-base text-white bg-gray-50 max-md:px-5">
                <div className="flex flex-col w-full">
                    <button
                        className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-3 w-full bg-cyan-900 rounded-lg border border-cyan-900 border-solid shadow-sm min-w-[240px]"
                        aria-label={`${buttonText} ${title} plan`}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};