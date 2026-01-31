import React from 'react';
import { motion } from 'framer-motion'; // Removed AnimatePresence
import { track } from '@vercel/analytics/react';
import { Star } from 'lucide-react';
import DehydrationQuiz from './DehydrationQuiz';

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-hydra-lightBlue to-white">
            {/* Background Blobs */}
            <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-hydra-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-hydra-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

                {/* Text Content (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-right order-1"
                >
                    <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-1 mb-6">
                        <span className="text-red-600 font-bold text-sm">🛑 هل تشعر بالتعب الدائم؟</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-hydra-dark mb-10 leading-tight md:leading-normal">
                        هل تعاني من{' '}
                        <span className="text-hydra-orange">
                            التعب والصداع
                        </span>{' '}
                        دون سبب واضح؟
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-lg ml-auto leading-relaxed">
                        75% من الناس يعانون من الجفاف المزمن دون علمهم. هذا يؤثر على طاقتك، تركيزك، ومزاجك.
                    </p>

                    <div className="flex items-center gap-2 mb-8 bg-gray-50 px-4 py-2 rounded-xl w-fit ml-auto">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>
                        <div className="text-sm text-gray-700 font-bold">
                            أكثر من 5,000 شخص استعادوا نشاطهم
                        </div>
                    </div>
                </motion.div>

                {/* Quiz Card (Left Side - Originally Product Image) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative order-2"
                >
                    <div className="relative z-20">
                        {/* We embed the Quiz directly here, utilizing its existing card style */}
                        <DehydrationQuiz />
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
