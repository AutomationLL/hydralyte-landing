import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Comparison() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-hydra-dark mb-6">ليست كل المشروبات متساوية</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        انظر كيف يتفوق هيدرالايت على المشروبات الاخرى في منحك الترطيب المثالي والصحي.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-100">
                    <div className="grid grid-cols-3 bg-gray-50 p-4 border-b">
                        <div className="col-span-1"></div>
                        <div className="col-span-1 text-center font-bold text-hydra-blue text-lg md:text-xl">هيدرالايت</div>
                        <div className="col-span-1 text-center font-bold text-gray-400 text-sm md:text-lg">الماء</div>
                    </div>

                    <div className="divide-y">
                        {[
                            { label: 'سرعة الامتصاص', hydra: 'عالية جداً', water: 'بطيئة' },
                            { label: 'السكريات', hydra: '< 2%', water: '0%' },
                            { label: 'السعرات الحرارية', hydra: 'منخفضة', water: '0' },
                            { label: 'تعويض الأملاح', hydra: true, water: false },
                            { label: 'معتمد طبياً', hydra: true, water: false },
                        ].map((row, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid grid-cols-3 p-4 md:p-6 items-center hover:bg-gray-50 transition-colors"
                            >
                                <div className="col-span-1 font-bold text-gray-700 text-xs md:text-base">{row.label}</div>

                                {/* Hydralyte Col */}
                                <div className="col-span-1 flex justify-center text-center font-bold text-hydra-blue">
                                    {row.hydra === true ? <Check className="w-6 h-6 md:w-8 md:h-8" /> : row.hydra}
                                </div>

                                {/* Water Col */}
                                <div className="col-span-1 flex justify-center text-center text-gray-500">
                                    {row.water === true ? <Check className="w-5 h-5" /> : row.water === false ? <Minus className="w-5 h-5 text-gray-300" /> : row.water}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
