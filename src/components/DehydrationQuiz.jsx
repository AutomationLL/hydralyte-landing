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
            {/* Optimized High-Performance Container */}
            <div className="bg-white border border-gray-100 rounded-[2rem] shadow-xl p-6 md:p-10 relative overflow-hidden">

                {/* Decoration - static and lightweight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/2" />

                {!showResult ? (
                    <div className="relative overflow-hidden min-h-[350px]">
                        {/* Slider Track */}
                        <motion.div
                            animate={{ x: `-${currentStep * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth mechanical slide
                            className="flex h-full"
                        >
                            {questions.map((q, i) => (
                                <div key={q.id} className="min-w-full px-1 flex flex-col h-full justify-between">
                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-4">
                                            {q.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                            {q.text}
                                        </h3>
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-3">
                                        {q.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(opt.score)}
                                                className="w-full p-4 rounded-xl border border-gray-200 bg-white hover:border-hydra-blue/50 active:bg-blue-50 active:scale-[0.98] transition-all duration-150 flex items-center justify-between group"
                                            >
                                                <span className="font-bold text-gray-600 group-hover:text-hydra-blue">{opt.text}</span>
                                                <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-hydra-blue" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Progress Dots - Absolute positioned at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-1">
                            {questions.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-hydra-blue' : 'w-2 bg-gray-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8 relative z-10"
                    >
                        <div className="w-20 h-20 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
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
                            className="w-full bg-hydra-orange text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                        >
                            احصل على باقة البداية الآن
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
