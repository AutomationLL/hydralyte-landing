import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, RefreshCw, Battery, Trophy, Info } from 'lucide-react';

export default function Challenge() {
    return (
        <section className="py-24 bg-gradient-to-br from-hydra-blue/5 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-hydra-orange/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-hydra-blue/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block bg-hydra-orange text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                        🔥 الأكثر رواجاً
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-hydra-dark mb-6">
                        تحدي هيدرالايت <span className="text-hydra-blue">لمدة 7 أيام</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        جرب هيدرالايت لمدة أسبوع. إذا لم تشعر بفرق حقيقي في نشاطك وترطيبك، سنعيد لك نقودك.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <RefreshCw className="w-32 h-32" />
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-hydra-blue font-bold text-xl mb-6">1</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">اليوم الأول</h3>
                        <p className="text-gray-500 font-medium">
                            شعور فوري بالارتواء وانتعاش الجسم بعد أول كوب. وداعاً لجفاف الفم والعطش المستمر.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Battery className="w-32 h-32" />
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-hydra-orange font-bold text-xl mb-6">3</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">اليوم الثالث</h3>
                        <p className="text-gray-500 font-medium">
                            تحسن ملحوظ في مستويات الطاقة والتركيز أثناء العمل أو التمرين. اختفاء الصداع الناتج عن الجفاف.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-hydra-dark text-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Trophy className="w-32 h-32" />
                        </div>
                        <div className="w-12 h-12 bg-hydra-blue rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6">7</div>
                        <h3 className="text-2xl font-bold mb-3">اليوم السابع</h3>
                        <p className="text-gray-300 font-medium">
                            جسمك الآن في حالة ترطيب مثالي. بشرة أنضر، نوم أفضل، وأداء بدني وذهني في قمته.
                        </p>
                    </motion.div>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-hydra-orange/20 text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-hydra-dark mb-4">
                        شروط الانضمام للتحدي (ضمان الرضا 100%)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 text-right mb-8 bg-gray-50 p-6 rounded-2xl">
                        <div className="flex gap-3">
                            <Info className="w-6 h-6 text-hydra-blue shrink-0" />
                            <p className="text-sm text-gray-600">
                                في حال عدم الرضا عن النتيجة، يتم استرجاع مبلغ المنتج كاملاً (يخصم فقط 30 ريال رسوم الشحن).
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Info className="w-6 h-6 text-hydra-blue shrink-0" />
                            <p className="text-sm text-gray-600">
                                إذا تم شراء أكثر من عبوة، يسري ضمان استرجاع الأموال على عبوة واحدة فقط (المفتوحة للتجربة).
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Info className="w-6 h-6 text-hydra-blue shrink-0" />
                            <p className="text-sm text-gray-600">
                                العرض لا يستبدل سياسة الإرجاع الأساسية للمتجر، بل هو عرض إضافي لضمان ثقتكم.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Info className="w-6 h-6 text-hydra-blue shrink-0" />
                            <p className="text-sm text-gray-600">
                                للاستفسارات الطبية الخاصة، يرجى استشارة الطبيب قبل البدء.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-hydra-orange text-white text-xl font-bold py-4 px-12 rounded-full shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-all hover:scale-105"
                    >
                        ابدأ التحدي الآن
                    </button>
                </div>

            </div>
        </section>
    );
}
