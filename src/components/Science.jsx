import React from 'react';
import { motion } from 'framer-motion';

export default function Science() {
    return (
        <section id="science" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-hydra-orange font-bold uppercase tracking-widest text-sm mb-2 block">كيف يعمل؟</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-hydra-dark mb-6">علم الترطيب السريع</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                عندما تصاب بالجفاف، يفقد جسمك السوائل والشوارد الحيوية. شرب الماء وحده لا يكفي لأن جسمك يحتاج إلى التوازن الصحيح لامتصاصه.
                            </p>
                            <p>
                                يعتمد هيدرالايت على <strong className="text-hydra-blue">نظام النقل المشترك للصوديوم والجلوكوز</strong>. هذه المعادلة الدقيقة من الملح والسكر تسمح لجسمك بامتصاص الماء مباشرة في مجرى الدم أسرع بـ 3 مرات من الماء وحده.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-hydra-lightBlue p-4 rounded-xl text-center">
                                <div className="text-3xl font-bold text-hydra-blue mb-1">3x</div>
                                <div className="text-sm text-gray-600">امتصاص أسرع</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <div className="text-3xl font-bold text-hydra-orange mb-1">100%</div>
                                <div className="text-sm text-gray-600">توازن الكترولايت</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Clear Step-by-Step Visualisation */}
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative">
                            <div className="space-y-8 relative z-10">
                                {/* Step 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-2xl border border-gray-100 shrink-0">
                                        🚫
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-1">الماء وحده بطيء</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">جدار الأمعاء يمتص الماء ببطء شديد، مما يعني بقاء السوائل في معدتك وعدم وصولها للدم.</p>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="absolute top-12 right-6 w-0.5 h-8 bg-gray-200 -z-10" />

                                {/* Step 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-hydra-orange/10 rounded-full flex items-center justify-center shadow-md text-2xl border border-hydra-orange/20 shrink-0 text-hydra-orange">
                                        🗝️
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-1">المفتاح السحري</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            تركيبة هيدرالايت الدقيقة من <span className="text-hydra-orange font-bold">الصوديوم والجلوكوز</span> تعمل مثل المفتاح الذي يفتح بوابات الخلايا المغلقة.
                                        </p>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="absolute top-40 right-6 w-0.5 h-8 bg-gray-200 -z-10" />

                                {/* Step 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-hydra-blue/10 rounded-full flex items-center justify-center shadow-md text-2xl border border-hydra-blue/20 shrink-0 animate-pulse">
                                        ⚡️
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg mb-1">امتصاص فوري</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            بمجرد فتح البوابات، يتدفق الماء بسرعة هائلة إلى مجرى الدم، ليعيد ترطيبك <span className="text-hydra-blue font-bold">أسرع 3 مرات</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
