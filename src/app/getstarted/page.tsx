"use client"

import { useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Spotlight } from "@/components/shared/Spotlight";

interface FormData {
    intent: string;
    cryptoManagement: string[];
    priorities: string[];
    riskTolerance: number;
    investmentAmount: string;
    email: string;
    telegram: string;
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxaMj5SfWjcS8JsQC_4J5_ycE-zzJgBg2_ZNsW7iZHnWCoW9W2WfbX8PnFs6vM3QJMdvA/exec";

export default function Getstarted() {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string>("");
    const [formData, setFormData] = useState<FormData>({
        intent: "",
        cryptoManagement: [],
        priorities: [],
        riskTolerance: 50,
        investmentAmount: "",
        email: "",
        telegram: ""
    });

    const totalSteps: number = 7;
    const navigate = useRouter()

    const handleNext = (): void => {
        if (canProceed()) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
        }
    };

    const handleBack = (): void => {
        setCurrentStep(prev => Math.max(prev - 1, 0));
    };

    const handleMultiSelect = (field: keyof Pick<FormData, "cryptoManagement" | "priorities">, value: string): void => {
        setFormData(prev => {
            const current = prev[field];
            if (current.includes(value)) {
                return { ...prev, [field]: current.filter(v => v !== value) };
            }
            if (field === "priorities" && current.length >= 3) {
                return prev;
            }
            return { ...prev, [field]: [...current, value] };
        });
    };

    const canProceed = (): boolean => {
        switch (currentStep) {
            case 0: return true;
            case 1: return formData.intent !== "";
            case 2: return formData.cryptoManagement.length > 0;
            case 3: return formData.priorities.length > 0;
            case 4: return true;
            case 5: return formData.investmentAmount !== "";
            case 6: return formData.email !== "" && formData.telegram !== "";
            default: return true;
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitError("");

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setCurrentStep(7);
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative h-full min-h-screen bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fa] overflow-hidden">
            {/* Optional animated soft light */}
            <Spotlight className="-top-10 left-0 h-screen w-screen opacity-30 sm:opacity-40 md:opacity-50" fill="#6cb3e3" />
            
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
                <div className="w-full max-w-2xl">
                    {currentStep < 7 && (
                        <div className="w-full h-1 bg-gray-200 rounded-full mb-12">
                            <div
                                className="h-full rounded-full transition-all duration-500 ease-out"
                                style={{ 
                                    background: "linear-gradient(90deg, #6cb3e3 0%, #9a84be 100%)",
                                    width: `${((currentStep + 1) / totalSteps) * 100}%`
                                }}
                            />
                        </div>
                    )}

                    <div className="w-full">
                        {currentStep === 0 && (
                            <div className="text-center space-y-6">
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                                    Meet <span className="bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] bg-clip-text text-transparent">DR HIRO</span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-xl mx-auto">
                                    Your agentic DeFi asset manager
                                </p>
                                <p className="text-lg text-gray-500">
                                    Join our waitlist to help shape the smartest, safest way to invest and save on chain.
                                </p>
                                <button
                                    onClick={handleNext}
                                    className="mt-8 px-8 py-4 bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                                >
                                    Get Started <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        {/* Question 1: Intent */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    What brings you here?
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "I'm curious about DeFi but not sure where to start.",
                                        "I want to earn better yield on my stablecoins.",
                                        "I already manage my own crypto portfolio and want to optimize it.",
                                        "I'm just exploring."
                                    ].map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setFormData({ ...formData, intent: option })}
                                            className={`w-full p-6 text-left rounded-2xl border-2 transition-all ${
                                                formData.intent === option
                                                    ? "border-[#6cb3e3] bg-[#6cb3e3]/5"
                                                    : "border-gray-200 hover:border-[#6cb3e3]/50"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg text-gray-700">{option}</span>
                                                {formData.intent === option && (
                                                    <Check className="w-6 h-6 text-[#6cb3e3]" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        How do you currently manage your crypto?
                                    </h2>
                                    <p className="text-gray-500 mt-2">Select all that apply</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Mostly on exchanges",
                                        "Manually with aggregators or wallets",
                                        "Using DeFi apps",
                                        "Haven't started investing in crypto yet"
                                    ].map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleMultiSelect("cryptoManagement", option)}
                                            className={`w-full p-6 text-left rounded-2xl border-2 transition-all ${
                                                formData.cryptoManagement.includes(option)
                                                    ? "border-[#6cb3e3] bg-[#6cb3e3]/5"
                                                    : "border-gray-200 hover:border-[#6cb3e3]/50"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg text-gray-700">{option}</span>
                                                {formData.cryptoManagement.includes(option) && (
                                                    <Check className="w-6 h-6 text-[#6cb3e3]" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        What matters most to you when investing?
                                    </h2>
                                    <p className="text-gray-500 mt-2">Select up to 3</p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Automation",
                                        "Protocol access",
                                        "Safety / custody",
                                        "Simplicity / UX",
                                        "Transparency / explanation",
                                        "Yield"
                                    ].map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleMultiSelect("priorities", option)}
                                            className={`w-full p-6 text-left rounded-2xl border-2 transition-all ${
                                                formData.priorities.includes(option)
                                                    ? "border-[#6cb3e3] bg-[#6cb3e3]/5"
                                                    : "border-gray-200 hover:border-[#6cb3e3]/50"
                                            } ${
                                                formData.priorities.length >= 3 && !formData.priorities.includes(option)
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
                                            disabled={formData.priorities.length >= 3 && !formData.priorities.includes(option)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg text-gray-700">{option}</span>
                                                {formData.priorities.includes(option) && (
                                                    <Check className="w-6 h-6 text-[#6cb3e3]" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    How comfortable are you with risk?
                                </h2>
                                <div className="space-y-8 pt-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={formData.riskTolerance}
                                        onChange={(e) => setFormData({ ...formData, riskTolerance: parseInt(e.target.value) })}
                                        className="w-full h-3 rounded-full appearance-none cursor-pointer"
                                        style={{
                                            background: `linear-gradient(to right, #6cb3e3 0%, #9a84be ${formData.riskTolerance}%, #e5e7eb ${formData.riskTolerance}%, #e5e7eb 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Keep it ultra-safe</span>
                                        <span>I know what I&apos;m doing</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    What&apos;s your typical investment amount?
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "Less than $1,000",
                                        "$1,000–$10,000",
                                        "$10,001–$100,000",
                                        "$100,000+"
                                    ].map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setFormData({ ...formData, investmentAmount: option })}
                                            className={`w-full p-6 text-left rounded-2xl border-2 transition-all ${
                                                formData.investmentAmount === option
                                                    ? "border-[#6cb3e3] bg-[#6cb3e3]/5"
                                                    : "border-gray-200 hover:border-[#6cb3e3]/50"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg text-gray-700">{option}</span>
                                                {formData.investmentAmount === option && (
                                                    <Check className="w-6 h-6 text-[#6cb3e3]" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Question 6: Contact Info */}
                        {currentStep === 6 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Share your email and Telegram for updates
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your@email.com"
                                            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#6cb3e3] focus:outline-none text-lg transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Telegram
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.telegram}
                                            onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                                            placeholder="@username"
                                            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#6cb3e3] focus:outline-none text-lg transition-all"
                                        />
                                    </div>
                                    {submitError && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                            {submitError}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Confirmation Page */}
                        {currentStep === 7 && (
                            <div className="text-center space-y-6">
                                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] flex items-center justify-center">
                                    <Check className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    You&apos;re on the list.
                                </h1>
                                <p className="text-lg text-gray-600">
                                    We&apos;ll be in touch soon with early access and updates.
                                </p>
                                <button
                                    onClick={() => navigate.push("/")}
                                    className="w-60 h-10 mx-auto rounded-md cursor-pointer bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] flex items-center justify-center"
                                >
                                    <p className="text-white">Go Back</p>
                                </button>
                            </div>
                        )}
                    </div>

                    {currentStep > 0 && currentStep < 7 && (
                        <div className="flex justify-between items-center mt-12">
                            <button
                                onClick={handleBack}
                                className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                                disabled={isSubmitting}
                            >
                                <ChevronLeft className="w-5 h-5" /> Back
                            </button>
                            {currentStep === 6 ? (
                                <button
                                    onClick={handleSubmit}
                                    disabled={!canProceed() || isSubmitting}
                                    className={`px-8 py-4 bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 ${
                                        (!canProceed() || isSubmitting) ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"} <Check className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    disabled={!canProceed()}
                                    className={`px-8 py-4 bg-gradient-to-r from-[#6cb3e3] to-[#9a84be] text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 ${
                                        !canProceed() ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    Next <ChevronRight className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
