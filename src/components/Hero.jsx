import React from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics/react';
import ProductImage from '../assets/product-mockup.png';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-b from-hydra-lightBlue to-white">
            {/* Background Blobs - Hidden on mobile for performance */}
            <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-hydra-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-hydra-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-right"
                >
                    <span className="inline-block bg-hydra-blue/10 text-hydra-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                        🔥 العرض لفترة محدودة
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-hydra-dark mb-6 leading-[1.2]">
                        وداعاً <span className="text-hydra-blue">للعطش</span><br />
                        والدوخة <span className="text-hydra-orange">نهائياً</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg mr-auto md:mr-0 ml-auto leading-relaxed">
                        الحل الطبي الأسرع لتعويض السوائل. اشرب هيدرالايت واستعد نشاطك في دقائق.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-start">
                        <button
                            onClick={() => {
                                track('CTA Click', { name: 'Hero Main CTA', location: 'Hero Section' });
                                document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-hydra-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-shadow shadow-xl shadow-orange-500/30 text-lg"
                        >
                            اطلب العرض الخاص ⚡️
                        </button>
                        <button
                            onClick={() => document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-hydra-dark border-2 border-gray-100 px-8 py-4 rounded-full font-bold hover:border-hydra-blue hover:text-hydra-blue transition-colors"
                        >
                            كيف يعمل؟
                        </button>
                    </div>
                    <div className="mt-12 flex items-center justify-end gap-6 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            سكر أقل (أقل بـ 75% من المشروبات الأخرى)
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            مدعوم علمياً
                        </span>
                    </div>
                </motion.div>

                {/* Visual Content (Mockup) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            <motion.img
                                src={ProductImage}
                                alt="Hydralyte Product"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut"
                                }}
                                style={{ willChange: "transform" }}
                                className="w-auto h-[120%] object-contain drop-shadow-2xl z-20"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                            style={{ willChange: "transform" }}
                            className="absolute top-10 -left-4 w-28 h-28 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center p-4 z-30 border border-gray-100"
                        >
                            <div className="text-center">
                                <div className="text-hydra-blue font-bold text-2xl">3x</div>
                                <div className="text-sm text-gray-600 font-bold">امتصاص أسرع</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.2 }}
                            style={{ willChange: "transform" }}
                            className="absolute bottom-20 -right-4 w-32 h-32 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center p-4 z-30 border border-gray-100"
                        >
                            <div className="text-center">
                                <div className="text-hydra-orange font-bold text-xl leading-snug">سكر أقل</div>
                                <div className="text-[10px] text-gray-500 font-bold leading-tight">بـ 75% من المشروبات الأخرى</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
