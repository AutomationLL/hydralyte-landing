import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
    {
        q: "هل هيدرالايت مناسب للأطفال؟",
        a: "نعم، هيدرالايت آمن ومناسب لجميع الأعمار، بما في ذلك الأطفال وكبار السن."
    },
    {
        q: "كم حبة يجب أن أتناول؟",
        a: "للاستخدام اليومي، قم بإذابة قرصين في 200 مل من الماء. عند الجفاف الشديد، يمكن زيادة الجرعة حسب ارشادات الطبيب."
    },
    {
        q: "ما هو الفرق بينه وبين الماء؟",
        a: "الماء لا يحتوي على الأملاح الضرورية للاحتفاظ بالسوائل. هيدرالايت يحتوي على توازن دقيق من الجلوكوز والشوارد ليضمن امتصاص الجسم للماء بسرعة."
    },
    {
        q: "هل يحتوي على سكر كثير؟",
        a: "لا، يحتوي هيدرالايت على كمية قليلة جداً من السكر (أقل بـ 75% من المشروبات الأخرى) وهي الكمية الضرورية فقط لتفعيل عملية الامتصاص."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-hydra-dark mb-12">الأسئلة الشائعة</h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <motion.details
                            key={idx}
                            className="group bg-gray-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold text-lg">
                                <h3 className="text-right">{item.q}</h3>
                                <div className="shrink-0 transition duration-300 group-open:-rotate-45">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-hydra-blue">
                                        <Plus className="w-5 h-5" />
                                    </div>
                                </div>
                            </summary>
                            <p className="mt-4 leading-relaxed text-gray-600 text-lg">
                                {item.a}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}
