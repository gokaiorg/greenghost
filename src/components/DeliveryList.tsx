import React from 'react';
import Link from 'next/link';

interface DeliveryStep {
    name: string;
    description: string;
    label: string;
    link: string;
    hint: string;
    video: string;
}

interface DeliveryListProps {
    steps: DeliveryStep[];
}

export default function DeliveryList({ steps }: DeliveryListProps) {
    // Extract unique hints
    const hints = steps.map(step => step.hint).filter(hint => hint);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Ordered Steps List */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#13DE00] mb-6">How to Order Online</h2>
                <ol className="space-y-6" aria-label="How to order online steps">
                    {steps.map((step, index) => (
                        <li key={index} className="bg-[#13DE00]/5 border border-[#13DE00]/20 p-6">
                            <div className="flex items-start gap-4">
                                {/* Number Badge */}
                                <div className="flex-shrink-0 w-10 h-10 bg-[#13DE00] text-black font-bold text-xl flex items-center justify-center">
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.name}</h3>
                                    <p className="text-gray-300 mb-4">{step.description}</p>

                                    {/* Link */}
                                    {step.link && step.label && (
                                        <Link
                                            href={`/${step.link}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#13DE00] text-black font-medium hover:bg-[#13DE00]/80 transition-colors"
                                        >
                                            {step.label}
                                            <span>{'>'}</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Hints Section */}
            {hints.length > 0 && (
                <section className="bg-[#13DE00]/5 border border-[#13DE00]/20 p-6 mb-12">
                    <h2 className="text-2xl font-bold text-[#13DE00] mb-4">Best Delivery Service</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {hints.map((hint, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {/* Info Icon */}
                                <div className="flex-shrink-0 w-6 h-6 bg-[#13DE00] text-black font-bold text-sm flex items-center justify-center rounded-full">
                                    ℹ
                                </div>
                                <p className="text-gray-300 text-sm">{hint}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Video Section */}
            {steps.some(step => step.video) && (
                <section>
                    <h2 className="text-2xl font-bold text-[#13DE00] mb-6">Weed Delivery in Phuket Thailand</h2>
                    {steps.map((step, index) => (
                        step.video && (
                            <div key={index} className="aspect-video w-full overflow-hidden border border-[#13DE00]/20 bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={step.video}
                                    title="Delivery Process Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        )
                    ))}
                </section>
            )}
        </div>
    );
}
