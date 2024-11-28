import * as React from "react";
import { FAQItem } from "./faqItem";
import { faqData } from "../../constants/faqData";
import faqImage from "../../../assets/faq.png";

const FAQSection = () => {
    return (
        <main className="flex overflow-hidden flex-col items-center self-stretch py-20 bg-white">
            <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
                <section className="flex flex-col items-start w-full max-md:max-w-full">
                    <div className="flex flex-col max-w-full w-[768px]">
                        <header className="flex flex-col w-full font-semibold max-md:max-w-full">
                            <p className="text-base text-cyan-900 max-md:max-w-full">
                                Support
                            </p>
                            <h1 className="mt-3 text-4xl tracking-tighter leading-none text-gray-900 max-md:max-w-full">
                                Frequently asked questions
                            </h1>
                        </header>
                        <p className="mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
                            Everything you need to know about the product and billing. Can't
                            find the answer you're looking for? Please{" "}
                            <a href="#contact" className="underline">
                                chat to our friendly team
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>
            <div className="flex flex-wrap gap-10 items-center px-8 mt-16 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
                <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                    {faqData.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            iconSrc={faq.iconSrc}
                        />
                    ))}
                </div>
                <img
                    src={faqImage}
                    alt="FAQ illustration"
                    className="object-contain flex-1 shrink self-stretch my-auto w-full rounded-3xl aspect-square basis-0 min-w-[240px] max-md:max-w-full"
                />
            </div>
        </main>
    );
}

export default FAQSection;