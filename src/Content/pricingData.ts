export interface PricingFeature {
    name: string;
    included: boolean;
}

export interface PricingTier {
    id: string;
    name: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
    savings?: string;
    popular?: boolean;
    gradient: string;
    buttonVariant: 'default' | 'gradient' | 'primary';
    features: {
        aiPrompts: {
            title: string;
            items: PricingFeature[];
        };
        tradingStrategies: {
            title: string;
            items: PricingFeature[];
        };
        premiumFeatures: {
            title: string;
            items: PricingFeature[];
        };
    };
}

export const pricingData: PricingTier[] = [
    {
        id: 'basic',
        name: 'Basic plan',
        description: 'Limited time - free trial',
        monthlyPrice: '$14.95',
        yearlyPrice: '$143.52',
        savings: 'Save $35.55',
        gradient: 'linear-gradient(180deg,rgba(20,232,147,0.1)_0%,rgba(6,4,12,.1)_35%)',
        buttonVariant: 'gradient',
        features: {
            aiPrompts: {
                title: '100 AI prompts per month',
                items: [
                    { name: 'Should I Buy Analysis', included: true },
                    { name: 'Price Prediction', included: true },
                    { name: 'Technical Analysis', included: true },
                    { name: 'Option Strategy', included: true },
                ]
            },
            tradingStrategies: {
                title: 'Trading strategies',
                items: [
                    { name: 'Pivot Point Signal', included: true },
                    { name: 'AI Stock Picker', included: false },
                    { name: 'SwingMax Signal', included: false },
                    { name: 'DayTrading Signal', included: false },
                    { name: 'Crypto Radar', included: false },
                    { name: 'Pattern Signal', included: false },
                    { name: 'S&P 500 Market Signal', included: false },
                    { name: 'AI Alert', included: false },
                    { name: 'AI Earning Prediction', included: false },
                ]
            },
            premiumFeatures: {
                title: 'Premium features',
                items: [
                    { name: 'AI Screener', included: true },
                    { name: 'Stock Monitor', included: true },
                    { name: 'Congress Trade Monitor', included: true },
                    { name: 'Crypto Spotlight', included: false },
                    { name: 'Real-time Quotes & Charts', included: false },
                    { name: 'Alerts for Signals & Movers', included: false },
                    { name: 'First Priority Support', included: false },
                ]
            }
        }
    },
    {
        id: 'pro',
        name: 'Pro plan',
        description: 'Perfect for serious traders',
        monthlyPrice: '$29.95',
        yearlyPrice: '$287.52',
        savings: 'Save $71.48',
        gradient: 'linear-gradient(180deg,rgba(79,57,172,0.25)_0%,rgba(6,4,12,.1)_35%)',
        buttonVariant: 'gradient',
        features: {
            aiPrompts: {
                title: '400 AI prompts per month',
                items: [
                    { name: 'Should I Buy Analysis', included: true },
                    { name: 'Price Prediction', included: true },
                    { name: 'Technical Analysis', included: true },
                    { name: 'Option Strategy', included: true },
                ]
            },
            tradingStrategies: {
                title: 'Trading strategies',
                items: [
                    { name: 'Pivot Point Signal', included: true },
                    { name: 'AI Stock Picker', included: true },
                    { name: 'SwingMax Signal', included: true },
                    { name: 'DayTrading Signal', included: true },
                    { name: 'Crypto Radar', included: false },
                    { name: 'Pattern Signal', included: false },
                    { name: 'S&P 500 Market Signal', included: false },
                    { name: 'AI Alert', included: false },
                    { name: 'AI Earning Prediction', included: false },
                ]
            },
            premiumFeatures: {
                title: 'Premium features',
                items: [
                    { name: 'AI Screener', included: true },
                    { name: 'Stock Monitor', included: true },
                    { name: 'Congress Trade Monitor', included: true },
                    { name: 'Crypto Spotlight', included: true },
                    { name: 'Real-time Quotes & Charts', included: true },
                    { name: 'Alerts for Signals & Movers', included: false },
                    { name: 'First Priority Support', included: false },
                ]
            }
        }
    },
    {
        id: 'max',
        name: 'Max plan',
        description: 'Most popular choice',
        monthlyPrice: '$49.95',
        yearlyPrice: '$479.52',
        savings: 'Save $111.48',
        popular: true,
        gradient: 'linear-gradient(180deg,rgba(20,232,147,0.5)_0%,rgba(6,4,12,.1)_35%)',
        buttonVariant: 'primary',
        features: {
            aiPrompts: {
                title: '1000 AI prompts per month',
                items: [
                    { name: 'Should I Buy Analysis', included: true },
                    { name: 'Price Prediction', included: true },
                    { name: 'Technical Analysis', included: true },
                    { name: 'Option Strategy', included: true },
                ]
            },
            tradingStrategies: {
                title: 'Trading strategies',
                items: [
                    { name: 'Pivot Point Signal', included: true },
                    { name: 'AI Stock Picker', included: true },
                    { name: 'SwingMax Signal', included: true },
                    { name: 'DayTrading Signal', included: true },
                    { name: 'Crypto Radar', included: true },
                    { name: 'Pattern Signal', included: true },
                    { name: 'S&P 500 Market Signal', included: true },
                    { name: 'AI Alert', included: false },
                    { name: 'AI Earning Prediction', included: false },
                ]
            },
            premiumFeatures: {
                title: 'Premium features',
                items: [
                    { name: 'AI Screener', included: true },
                    { name: 'Stock Monitor', included: true },
                    { name: 'Congress Trade Monitor', included: true },
                    { name: 'Crypto Spotlight', included: true },
                    { name: 'Real-time Quotes & Charts', included: true },
                    { name: 'Alerts for Signals & Movers', included: true },
                    { name: 'First Priority Support', included: true },
                ]
            }
        }
    },
    {
        id: 'expert',
        name: 'Expert plan',
        description: 'For professional traders',
        monthlyPrice: '$99.95',
        yearlyPrice: '$959.52',
        savings: 'Save $231.48',
        gradient: 'linear-gradient(180deg,rgba(79,57,172,0.65)_0%,rgba(6,4,12,.1)_35%)',
        buttonVariant: 'gradient',
        features: {
            aiPrompts: {
                title: '1500 AI prompts per month',
                items: [
                    { name: 'Should I Buy Analysis', included: true },
                    { name: 'Price Prediction', included: true },
                    { name: 'Technical Analysis', included: true },
                    { name: 'Option Strategy', included: true },
                ]
            },
            tradingStrategies: {
                title: 'Trading strategies',
                items: [
                    { name: 'Pivot Point Signal', included: true },
                    { name: 'AI Stock Picker', included: true },
                    { name: 'SwingMax Signal', included: true },
                    { name: 'DayTrading Signal', included: true },
                    { name: 'Crypto Radar', included: true },
                    { name: 'Pattern Signal', included: true },
                    { name: 'S&P 500 Market Signal', included: true },
                    { name: 'AI Alert', included: true },
                    { name: 'AI Earning Prediction', included: true },
                ]
            },
            premiumFeatures: {
                title: 'Premium features',
                items: [
                    { name: 'AI Screener', included: true },
                    { name: 'Stock Monitor', included: true },
                    { name: 'Congress Trade Monitor', included: true },
                    { name: 'Crypto Spotlight', included: true },
                    { name: 'Real-time Quotes & Charts', included: true },
                    { name: 'Alerts for Signals & Movers', included: true },
                    { name: 'First Priority Support', included: true },
                ]
            }
        }
    }
];