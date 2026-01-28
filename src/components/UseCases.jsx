import React from 'react';
import { Dumbbell, Plane, Thermometer, Briefcase } from 'lucide-react';

const cases = [
    {
        icon: Dumbbell,
        title: "أثناء وبعد الرياضة",
        desc: "تعويض سريع للأملاح المفقودة بالتعرق لتحسين الأداء والاستشفاء."
    },
    {
        icon: Thermometer,
        title: "عند المرض",
        desc: "يساعد في حالات القيء والإسهال والحمى لمنع الجفاف الخطير."
    },
    {
        icon: Plane,
        title: "السفر والجو الحار",
        desc: "الحل المثالي للتغلب على إرهاق السفر وجفاف الطائرات."
    },
    {
        icon: Briefcase,
        title: "العمل والتركيز",
        desc: "نقص السوائل يسبب الصداع وقلة التركيز. ابق يقظاً مع هيدرالايت."
    }
];

export default function UseCases() {
    return (
        <section className="py-20 bg-hydra-lightBlue/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-hydra-dark mb-4">متى تستخدم هيدرالايت؟</h2>
                    <p className="text-gray-500">رفيقك اليومي لصحة أفضل ونشاط دائم.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-12 h-12 bg-hydra-blue/10 rounded-xl flex items-center justify-center mb-6 text-hydra-blue">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
