import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        id: 1,
        text: "خرافي فعلا معه قدرت اشرب المويه بكميات",
        author: "عميل هيدرالايت",
        rating: 5
    },
    {
        id: 2,
        text: "الصراحة المنتج رهيب ساعدني في المحافظة على ترطيب الجسم ودائما اخذه بعد التمرين خلصني من مشكلة العطش والدوخه انصح فيه وبقوه",
        author: "عميل هيدرالايت",
        rating: 5
    },
    {
        id: 3,
        text: "مميزه وجودة عاليه. ومجربه اكثر من مره",
        author: "عميل هيدرالايت",
        rating: 5
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-hydra-dark text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-hydra-blue/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-hydra-orange/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-hydra-orange font-bold text-sm tracking-wider uppercase mb-2 block">آراء حقيقية</span>
                    <h2 className="text-3xl md:text-4xl font-bold">ماذا يقول عملاؤنا؟</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl relative"
                        >
                            <Quote className="absolute top-6 left-6 w-10 h-10 text-hydra-blue/20 rotate-180" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                ))}
                            </div>

                            <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium text-gray-200">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hydra-orange to-hydra-blue flex items-center justify-center text-xs font-bold">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{review.author}</div>
                                    <div className="text-xs text-gray-400">تم الشراء مؤخراً</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
