import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const offers = [
    {
        title: 'عبوة التوفير (ليمون لايم)',
        packs: '20 قرص',
        price: '79',
        original: '120',
        features: ['مثالية لتجربة الترطيب السريع', 'نكهة ليمون لايم المنعشة', 'سعرات حرارية أقل'],
        bestValue: false,
        link: 'https://hydralyte-sa.com/ar/%D8%B9%D8%A8%D9%88%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D9%81%D9%8A%D8%B1-%D8%A3%D9%82%D8%B1%D8%A7%D8%B5-%D9%87%D9%8A%D8%AF%D8%B1%D8%A7%D9%84%D8%A7%D9%8A%D8%AA-%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%84%D9%8A%D8%AA-%D9%81%D9%88%D8%A7%D8%B1-%D9%84%D9%8A%D9%85%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%85-40-%D9%82%D8%B1%D8%B5/p1255018121'
    },
    {
        title: 'مجموعة النكهات الجديدة',
        packs: 'باقة متنوعة',
        price: '177',
        original: '240',
        features: ['مزيج من أشهى نكهات الفواكه', 'تنوع يناسب كل الأذواق', 'مثالية للعائلة'],
        bestValue: false,
        link: 'https://hydralyte-sa.com/ar/hydralyte-new-flavor-bundle/p685076142'
    },
    {
        title: 'اشتر 2 واحصل على 1 مجاناً',
        packs: '120 قرص',
        price: '198',
        original: '300',
        features: ['الخيار الأفضل للتحدي', 'توفير هائل (66 ريال للعبوة)', 'تكفي لمدة شهرين (60 يوم)'],
        bestValue: true,
        link: 'https://hydralyte-sa.com/ar/buy-2-get-1-free/p812754972'
    }
];

export default function Offers() {
    return (
        <section id="offers" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">عروض حصرية</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-hydra-dark mb-4">اختر باقتك المفضلة</h2>
                    <p className="text-gray-500">استمتع بأفضل الأسعار عند الطلب اليوم.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {offers.map((offer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col relative bg-white rounded-3xl p-8 border-2 ${offer.bestValue ? 'border-hydra-orange scale-105 shadow-2xl z-10' : 'border-gray-100 shadow-xl'}`}
                        >
                            {offer.bestValue && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hydra-orange text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
                                    الأكثر توفيراً 💰
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 min-h-[56px] flex items-center justify-center">{offer.title}</h3>
                                <div className="text-5xl font-black text-hydra-dark mb-2">
                                    {offer.price} <span className="text-base text-gray-500 font-normal">ريال</span>
                                </div>
                                {offer.original && (
                                    <div className="text-gray-400 line-through text-sm">بدلاً من {offer.original} ريال</div>
                                )}
                                <div className="mt-4 inline-block bg-gray-100 px-4 py-1 rounded-lg text-sm font-bold text-gray-600">
                                    {offer.packs}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {offer.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${offer.bestValue ? 'bg-orange-100 text-hydra-orange' : 'bg-gray-100 text-gray-500'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={offer.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${offer.bestValue ? 'bg-hydra-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                            >
                                اضف للسلة
                                <ArrowLeft className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
