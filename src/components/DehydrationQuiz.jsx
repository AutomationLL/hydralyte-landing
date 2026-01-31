import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Droplets, Brain, ArrowLeft, CheckCircle } from 'lucide-react';
import { track } from '@vercel/analytics/react';

const questions = [
    {
        id: 1,
        text: 'هل تشعر بالتعب أو الصداع بشكل متكرر أثناء اليوم؟',
        icon: <Brain className="w-12 h-12 text-hydra-blue" />,
        options: [
            { text: 'نعم، غالباً', score: 2 },
            { text: 'أحياناً', score: 1 },
            { text: 'نادراً', score: 0 }
        ]
    },
    {
        id: 2,
        text: 'كم كوباً من الماء تشرب يومياً تقريباً؟',
        icon: <Droplets className="w-12 h-12 text-hydra-blue" />,
        options: [
            { text: 'أقل من 4 أكواب', score: 2 },
            { text: '4-8 أكواب', score: 1 },
            { text: 'أكثر من 8 أكواب', score: 0 }
        ]
    },
    {
        id: 3,
        text: 'هل تمارس الرياضة أو تتعرض للحرارة وتتعرق؟',
        icon: <Activity className="w-12 h-12 text-hydra-blue" />,
        options: [
            { text: 'نعم، بانتظام', score: 2 },
            { text: 'أحياناً', score: 1 },
            { text: 'لا', score: 0 }
        ]
    }
];

export default function DehydrationQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const getResult = (currentScore = score) => {
        if (currentScore >= 4) return {
            status: 'عالي المخاطر ⚠️',
            text: 'جسمك يعاني من علامات جفاف واضحة. الماء وحده قد لا يكفي لتعويض الأملاح المفقودة.',
            color: 'text-red-500'
        };
        if (currentScore >= 2) return {
            status: 'متوسط ⚠️',
            text: 'أنت معرض للجفاف. تحسين ترطيبك سيحسن نشاطك وتركيزك بشكل ملحوظ.',
            color: 'text-orange-500'
        };
        return {
            status: 'جيد ✅',
            text: 'نظامك جيد، لكن هيدرالايت سيمنحك دفعة نشاط إضافية للأيام الصعبة.',
            color: 'text-green-500'
        };
    };

    const handleAnswer = (points) => {
        const newScore = score + points;
        setScore(newScore);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
            const result = getResult(newScore);
            track('Quiz Completed', {
                score: newScore,
                risk_level: result.status,
                result_text: result.text
            });
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            {/* Optimized container with smooth layout resizing */}
            <motion.div
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white/90 md:bg-white/80 md:backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl shadow-hydra-blue/10 p-6 md:p-10 relative overflow-hidden"
            >
                {/* Simplified Decorative Background for Mobile */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-hydra-blue/5 rounded-full blur-xl md:blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-hydra-orange/5 rounded-full blur-xl md:blur-2xl translate-y-1/2 -translate-x-1/2" />

                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="flex flex-col h-full min-h-[350px] justify-between relative z-10"
                        >
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-4 shadow-sm">
                                    {questions[currentStep].icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                    {questions[currentStep].text}
                                </h3>
                            </div>

                            {/* Options */}
                            <div className="space-y-3">
                                {questions[currentStep].options.map((opt, idx) => (
                                    <motion.button
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05, duration: 0.2 }}
                                        onClick={() => handleAnswer(opt.score)}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full p-4 rounded-xl border border-gray-100 bg-white hover:border-hydra-blue/30 active:bg-blue-50 transition-all flex items-center justify-between group"
                                    >
                                        <span className="font-bold text-gray-600 group-hover:text-hydra-blue transition-colors text-lg">{opt.text}</span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                            <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-hydra-blue transition-colors" />
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Progress Dots */}
                            <div className="mt-8 flex justify-center gap-2">
                                {questions.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-hydra-blue' : 'w-2 bg-gray-200'}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-center py-8 relative z-10"
                        >
                            <div
                                className="w-20 h-20 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                            >
                                <CheckCircle className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                نتيجتك: <span className={getResult().color}>{getResult().status}</span>
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed px-4">
                                {getResult().text}
                            </p>

                            <button
                                onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full bg-hydra-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-lg animate-pulse"
                            >
                                احصل على باقة البداية الآن
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
