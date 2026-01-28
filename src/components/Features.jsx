import React from 'react';
import { Activity, Droplet, Heart, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Zap,
        title: 'ترطيب فوري',
        desc: 'تركيبة علمية لامتصاص السوائل أسرع من الماء وحده.'
    },
    {
        icon: Droplet,
        title: 'توازن الأملاح',
        desc: 'يعوض الصوديوم والبوتاسيوم المفقود بدقة.'
    },
    {
        icon: Heart,
        title: 'سكر أقل',
        desc: 'يحتوي على 75% سكر أقل من المشروبات الأخرى.'
    },
    {
        icon: ShieldCheck,
        title: 'معتمد طبياً',
        desc: 'تركيبة موثوقة وآمنة لجميع أفراد العائلة.'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-hydra-dark mb-4">لماذا هيدرالايت؟</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        خيارك الأول لترطيب أسرع وأكثر صحة في جميع حالات نقص السوائل.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-hydra-lightBlue/30 hover:bg-hydra-lightBlue transition-colors group text-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <feature.icon className="w-8 h-8 text-hydra-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-hydra-dark mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
