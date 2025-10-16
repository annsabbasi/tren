import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { pricingData, type PricingTier, } from '../../../Content/pricingData';
import { Check, X, ArrowRight, Zap } from 'lucide-react';

const PricingSection: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

    const FeatureIcon = ({ included }: { included: boolean }) => {
        return included ? (
            <Check className="w-5 h-5 text-[#14E893]" />
        ) : (
            <X className="w-5 h-5 text-[#E81418]" />
        );
    };

    const PricingCard = ({ tier }: { tier: PricingTier }) => {
        // const price = billingPeriod === 'yearly' ? tier.yearlyPrice : tier.monthlyPrice;
        const displayPrice = billingPeriod === 'yearly'
            ? `$${parseFloat(tier.monthlyPrice.replace('$', '')).toFixed(2)}`
            : tier.monthlyPrice;

        return (
            <Card className={`
        relative overflow-hidden rounded-3xl border-0
        bg-gradient-to-b from-white/5 to-transparent
        shadow-[inset_0px_0px_0px_1px_#FFFFFF1A]
        ${tier.popular ? 'ring-1 ring-[#14E893]' : ''}
      `}>
                {/* Popular Badge */}
                {tier.popular && (
                    <div className="absolute top-8 -right-12 bg-[#14E893] text-black text-sm font-medium px-16 py-1 transform rotate-45">
                        Most popular
                    </div>
                )}

                <CardContent className="p-0">
                    {/* Header */}
                    <div className="pt-10 pb-8 px-8">
                        <h4 className="text-white text-lg font-[450] mb-2">{tier.name}</h4>
                        <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-white text-4xl font-medium">{displayPrice}</h3>
                            {tier.savings && (
                                <span className="bg-gradient-to-r from-[#14E893] to-[#5131AD] text-white text-sm px-3 py-1.5 rounded-full border border-white/10">
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

                    {/* Divider */}
                    <div className="border-t border-gray-700 mx-8" />

                    {/* CTA Button */}
                    <div className="p-8">
                        <button className={`
              w-full py-3 px-10 rounded-full flex items-center justify-center gap-2
              text-base font-medium transition-all duration-200
              ${tier.buttonVariant === 'primary'
                                ? 'bg-[#14E893] text-black hover:bg-[#12d488]'
                                : 'bg-gradient-to-r from-[#14E893] to-[#5131AD] text-white hover:opacity-90'
                            }
              shadow-[inset_0px_0px_0px_2px_#FFFFFF1A]
            `}>
                            Subscribe now
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-700 mx-8" />

                    {/* Features Accordion */}
                    <div className="p-7">
                        <Accordion type="multiple" className="space-y-6">
                            {/* AI Prompts */}
                            <AccordionItem value="ai-prompts" className="border-0">
                                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                    <span className="text-lg font-[450] text-white">{tier.features.aiPrompts.title}</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 space-y-3">
                                    {tier.features.aiPrompts.items.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2.5">
                                            <FeatureIcon included={feature.included} />
                                            <span className="text-gray-400 text-base">{feature.name}</span>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Trading Strategies */}
                            <AccordionItem value="trading-strategies" className="border-0">
                                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                    <span className="text-lg font-[450] text-white">Trading strategies</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 space-y-3">
                                    {tier.features.tradingStrategies.items.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2.5">
                                            <FeatureIcon included={feature.included} />
                                            <span className="text-gray-400 text-base">{feature.name}</span>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Premium Features */}
                            <AccordionItem value="premium-features" className="border-0">
                                <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                    <span className="text-lg font-[450] text-white">Premium features</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 space-y-3">
                                    {tier.features.premiumFeatures.items.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2.5">
                                            <FeatureIcon included={feature.included} />
                                            <span className="text-gray-400 text-base">{feature.name}</span>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </CardContent>
            </Card>
        );
    };

    return (
        <section className="w-full py-20 bg-[#06040c] px-5">
            <div className="max-w-[1502px] mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h4 className="flex items-center gap-2 lg:text-[24px] text-[16px] justify-center font-[450] text-gray-300 mb-4">
                        <Zap className="md:w-5 w-3.5" />
                        Membership and pricing plans
                    </h4>
                    <h2 className="text-white lg:text-[68px] md:text-[48px] text-[34px] font-[450]">
                        Explore the best plan for you
                    </h2>
                </div>

                {/* Billing Toggle */}
                <div className="text-center mb-12">
                    <Tabs
                        value={billingPeriod}
                        onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
                        className="inline-block"
                    >
                        <TabsList className="
              bg-transparent p-2.5 border-2 border-[#FFFFFF1A] rounded-full
              shadow-[20px_0px_50px_0px_#28AD9B80,_-20px_0px_50px_0px_#4E3AAC80]
              md:w-[504px] w-full
            ">
                            <TabsTrigger
                                value="yearly"
                                className="
                  relative text-white sm:text-xl text-base py-2.5 px-7 rounded-full
                  data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14E893]/25 data-[state=active]:to-[#5131AD]/25
                  data-[state=active]:shadow-[inset_0px_0px_0px_1px_#FFFFFF1A]
                  backdrop-blur-[75px] sm:w-[235px] w-2/3 font-[450]
                "
                            >
                                Annually
                                <span className="
                  bg-gradient-to-r from-[#14E893] to-[#5131AD]
                  shadow-[inset_0px_0px_0px_2px_#FFFFFF1A]
                  rounded-full py-1.5 px-3 sm:text-base text-xs font-medium
                  ml-3.5
                ">
                                    Save 20%
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="monthly"
                                className="
                  text-white sm:text-xl text-base py-2.5 px-7 rounded-full
                  data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#14E893]/25 data-[state=active]:to-[#5131AD]/25
                  data-[state=active]:shadow-[inset_0px_0px_0px_1px_#FFFFFF1A]
                  sm:w-[235px] w-1/3 font-[450]
                "
                            >
                                Monthly
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* Free Trial Card */}
                <Card className="
          mb-8 rounded-3xl border-0
          bg-gradient-to-br from-white/3 via-gray-500/2 to-transparent
          shadow-[0px_0px_0px_1px_#FFFFFF1A]
        ">
                    <CardContent className="p-8 sm:p-16">
                        <div className="flex flex-wrap justify-between items-center gap-8">
                            <div className="flex-1 min-w-[200px]">
                                <h4 className="text-white text-4xl font-medium mb-4">Free</h4>
                                <p className="text-gray-400 text-base">Limited time - free trial</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1">
                                {['Should I Buy Analysis', 'Price Prediction', 'Technical Analysis', 'Option Strategy'].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2.5">
                                        <Check className="w-5 h-5 text-white" />
                                        <span className="text-gray-400 text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <button className="text-gray-400 hover:text-white border border-transparent py-3 px-10 rounded-full transition-colors">
                                    See demo
                                </button>
                                <button className="
                  bg-white text-black py-3 px-10 rounded-full
                  flex items-center gap-2 hover:bg-gray-100 transition-colors
                  w-full sm:w-auto justify-center
                ">
                                    Start free trial
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingData.map((tier) => (
                        <PricingCard key={tier.id} tier={tier} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;