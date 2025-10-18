"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search or Ask",
    description: "Enter your stock, crypto, or question.",
    content: (
      <div className="space-y-2">
        <div className="h-3 w-3/4 bg-gray-800 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-800 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-800 rounded"></div>
        <div className="h-3 w-1/3 bg-gray-800 rounded"></div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Get AI Insights",
    description: "Predictions, news summaries, signals.",
    content: (
      <div className="flex justify-center">
        <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 opacity-90 shadow-lg shadow-blue-500/20" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Act Smarter",
    description: "Set alerts, save to watchlist, and trade confidently.",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full border border-cyan-500" />
          <div className="h-3 w-3/4 bg-gray-800 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full border border-cyan-500 bg-cyan-500/20" />
          <div className="h-3 w-2/3 bg-gray-800 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full border border-cyan-500" />
          <div className="h-3 w-1/2 bg-gray-800 rounded"></div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-[#070B14] text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm text-gray-400 mb-3">⭐ How it works</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Tech Tren – your personal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400">
            AI consultant for Investment
          </span>
        </h2>
        <p className="text-gray-400 mb-16">
          Find out if you're the investor – in 3 minutes
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: step.id * 0.2, duration: 0.6 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-b from-[#0C0F1A] to-[#0C0F1A]/70 border border-gray-800/60 hover:border-cyan-400/50 transition-all duration-300`}
            >
              {/* Step circle */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${
                    step.id === 1
                      ? "from-cyan-400 to-green-400"
                      : step.id === 2
                      ? "from-blue-400 to-purple-400"
                      : "from-emerald-400 to-cyan-400"
                  } flex items-center justify-center font-bold text-black shadow-lg`}
                >
                  {step.id}
                </div>
              </div>

              <div className="pt-6 mt-4 space-y-4">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <div className="text-gray-400 text-sm">{step.description}</div>
                <div className="pt-4">{step.content}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center gap-4">
          <Button className="bg-gradient-to-r from-sky-500 to-teal-400 text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 transition">
            Start free trial
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-cyan-400 flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-cyan-400" />
            See demo
          </Button>
        </div>
      </div>
    </section>
  );
}
