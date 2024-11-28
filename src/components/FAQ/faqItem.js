import * as React from "react";

export function FAQItem({ question, answer, iconSrc }) {
    return (
        <div className="flex flex-wrap gap-4 items-start w-full max-md:mt-10 max-md:max-w-full">
            <img
                loading="lazy"
                src={iconSrc}
                alt=""
                className="object-contain shrink-0 w-12 rounded-3xl aspect-square"
            />
            <div className="flex flex-col flex-1 shrink pt-2.5 basis-0 min-w-[240px] max-md:max-w-full">
                <h3 className="text-xl font-semibold text-gray-900 max-md:max-w-full">
                    {question}
                </h3>
                <p className="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">
                    {answer}
                </p>
            </div>
        </div>
    );
}