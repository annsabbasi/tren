import React, { useState, useRef, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { X, Zap, ChevronRight, BadgeCheck } from 'lucide-react';
import { pricingData, type PricingTier } from '@/Content/pricingData';

const FeatureIcon = ({ included }: { included: boolean }) =>
    included ? <BadgeCheck className="w-5 h-5 text-[#14E893]" /> : <X className="w-[17px] h-[17px] text-[#E81418] border border-red-600 rounded-full p-[1px] mr-1" />;

const PricingCard = ({ tier, billingPeriod, isSticky = false }: { tier: PricingTier; billingPeriod: 'monthly' | 'yearly'; isSticky?: boolean }) => {
    const displayPrice = billingPeriod === 'yearly'
        ? `$${parseFloat(tier.monthlyPrice.replace('$', '')).toFixed(2)}`
        : tier.monthlyPrice;

    return (
        <Card className={`
      relative overflow-hidden rounded-3xl border-0
      bg-gradient-to-b from-white/5 to-transparent
      shadow-[inset_0px_0px_0px_1px_#FFFFFF1A] pb-0
      ${isSticky ? 'sticky top-6 z-10 shadow-lg transition-all duration-200' : ''}
      transition-all duration-200
    `}>
            {/* ${tier.popular ? 'ring-1 ring-[#14E893]' : ''} */}

            {tier.popular && (
                <div className="absolute top-8 -right-14 bg-[#14E893] text-black text-xs font-semibold px-16 py-1 transform rotate-45">
                    Most popular
                </div>
            )}

            <CardContent className="p-0">
                <div className="pt-2 pb-6 px-8">
                    <h4 className="text-gry-400 text-md font-medium mb-2">{tier.name}</h4>

                    <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-white text-3xl font-medium">{displayPrice}</h3>
                        {tier.savings && (
                            <span className="special-btn !py-2 !text-xs flex items-center !px-4">
                                {tier.savings}
                            </span>
                        )}
                    </div>

                    <p className="text-gray-400 text-sm">
                        / month{' '}
                        <span className="text-white ml-2">
                            {billingPeriod === 'yearly' ? `${tier.yearlyPrice} / year` : 'billed monthly'}
                        </span>
                    </p>
                </div>

                <div className="border-t border-gray-700 w-full" />
                <div className="px-8 py-6">
                    <button className='special-btn !py-2 !px-4 flex items-center justify-center gap-2 text-md w-full' >
                        Subscribe now
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="border-t border-gray-700 w-full" />

                <div className="px-7 py-4">
                    {/* <Accordion type="single" collapsible className="space-y-6"> */}
                    <Accordion type="multiple" className="space-y-6" defaultValue={Object.keys(tier.features)}>
                        {Object.entries(tier.features).map(([key, feature]) => (
                            <AccordionItem key={key} value={key} className="border-0 my-4">
                                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                    <span className="text-base font-medium text-white text-left">{feature.title}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 space-y-3">
                                    {feature.items.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2.5">
                                            <FeatureIcon included={item.included} />
                                            <span className="text-gray-400 text-base">{item.name}</span>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </CardContent>
        </Card >
    );
};

const FreeTrialCard = () => (
    <Card className="bg-transparent py-0 rounded-4xl mb-8">
        <CardContent className="p-6 md:p-12">
            <div className="flex flex-col lg:flex-row justify-between items-center ">
                <div className="text-center lg:text-left">
                    <h4 className="text-white text-3xl md:text-4xl font-medium mb-2">Free</h4>
                    <p className="text-gray-400 text-base">Limited time - free trial</p>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 flex-1 max-w-md ml-auto">
                    {['Should I Buy Analysis', 'Price Prediction', 'Technical Analysis', 'Option Strategy'].map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 w-fit">
                            <BadgeCheck className="w-5 h-5 text-white" />
                            <span className="text-gray-400 text-base">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <button className="w-full sm:w-auto text-gray-400 px-4 rounded-4xl cursor-pointer">
                        See demo
                    </button>
                    <button className="bg-white rounded-4xl text-gray-900 text-base py-2 px-6 font-bold flex items-center gap-2 justify-center cursor-pointer">
                        Start free trial
                        <ChevronRight className="w-4 h-4 text-gray-900" />
                    </button>
                </div>
            </div>
        </CardContent>
    </Card>
);

const BillingToggle = ({ billingPeriod, setBillingPeriod }: {
    billingPeriod: 'monthly' | 'yearly';
    setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}) => (
    <Tabs
        value={billingPeriod}
        onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
        className="w-full max-w-sm"
    >
        <TabsList className="gradient-box-shadow rounded-full w-full !px-1 h-11">
            <TabsTrigger
                value="yearly"
                className="rounded-full py-4 flex items-center justify-between gap-4 !pl-6 cursor-pointer data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14E893]/25 data-[state=active]:to-[#5131AD]/25
          data-[state=active]:shadow-[inset_0px_0px_0px_1px_#FFFFFF1A]
        "
            >
                Annually
                <span className="special-btn !py-1 !px-4 !text-xs">
                    Save 20%
                </span>
            </TabsTrigger>
            <TabsTrigger
                value="monthly"
                className="
          flex-1 text-base py-3 rounded-full font-medium
          data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14E893]/25 data-[state=active]:to-[#5131AD]/25
          data-[state=active]:shadow-[inset_0px_0px_0px_1px_#FFFFFF1A] cursor-pointer
        "
            >
                Monthly
            </TabsTrigger>
        </TabsList>
    </Tabs>
);

const PricingSection: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
    const [openCard, setOpenCard] = useState<string | null>(null);
    const [stickyCards, setStickyCards] = useState<Set<string>>(new Set());
    const cardsRef = useRef<Map<string, HTMLDivElement>>(new Map());

    // Check if any accordion is open in any card

    // Update sticky cards when openCard changes
    useEffect(() => {
        if (openCard) {
            // When a card is opened, make all cards below it sticky
            const openedCardIndex = pricingData.findIndex(tier => tier.id === openCard);
            const newStickyCards = new Set<string>();

            pricingData.forEach((tier, index) => {
                if (index > openedCardIndex) {
                    newStickyCards.add(tier.id);
                }
            });

            setStickyCards(newStickyCards);
        } else {
            // When no card is open, clear all sticky cards
            setStickyCards(new Set());
        }
    }, [openCard]);

    // Handle scroll to maintain sticky behavior
    useEffect(() => {
        const handleScroll = () => {
            if (!openCard) return;

            const openedCardElement = cardsRef.current.get(openCard);
            if (!openedCardElement) return;

            const openedCardRect = openedCardElement.getBoundingClientRect();
            const openedCardBottom = openedCardRect.bottom;
            const viewportHeight = window.innerHeight;

            // If the opened card is near the bottom of the viewport, keep other cards sticky
            if (openedCardBottom < viewportHeight - 100) {
                const openedCardIndex = pricingData.findIndex(tier => tier.id === openCard);
                const newStickyCards = new Set<string>();

                pricingData.forEach((tier, index) => {
                    if (index > openedCardIndex) {
                        newStickyCards.add(tier.id);
                    }
                });

                setStickyCards(newStickyCards);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [openCard]);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                    <Zap className="w-5 h-5" />
                    <span className="text-lg font-medium">Membership and pricing plans</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-white">
                    Explore the best plan for you
                </h2>
            </div>

            <div className="flex justify-center mb-12">
                <BillingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
            </div>

            <FreeTrialCard />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
                {pricingData.map((tier) => (
                    <div
                        key={tier.id}
                        ref={(el) => {
                            if (el) {
                                cardsRef.current.set(tier.id, el);
                            } else {
                                cardsRef.current.delete(tier.id);
                            }
                        }}
                        className="relative"
                        onMouseEnter={() => setOpenCard(tier.id)}
                        onMouseLeave={(e) => {
                            // Only clear if not moving to another card
                            const relatedTarget = e.relatedTarget as HTMLElement;
                            if (!relatedTarget || !relatedTarget.closest(`[data-tier-id="${tier.id}"]`)) {
                                setOpenCard(null);
                            }
                        }}
                        data-tier-id={tier.id}
                    >
                        <PricingCard
                            tier={tier}
                            billingPeriod={billingPeriod}
                            isSticky={stickyCards.has(tier.id)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;