import React from 'react';

export default function Ingredients() {
    return (
        <section className="py-20 bg-hydra-dark text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">نحن منفتحون تماماً.<br /> <span className="text-hydra-blue">لا أسرار، فقط علم.</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        على عكس الآخرين، نحن لا نخفي مكوناتنا خلف "خلطات سرية". كل مكون في هيدرالايت تم اختياره بعناية لغرض طبي محدد وهو تسريع الامتصاص.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="font-bold text-hydra-orange mb-1">خالٍ من</div>
                            <div className="text-sm text-gray-400">75% أقل من المشروبات الأخرى، والكافيين، والألوان الصناعية</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="font-bold text-hydra-blue mb-1">مناسب لـ</div>
                            <div className="text-sm text-gray-400">جميع الأعمار، والنباتيين</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-lg">
                    <div className="bg-white text-gray-800 rounded-[2.5rem] p-10 shadow-3xl border border-gray-100 relative overflow-hidden group hover:shadow-blue-500/10 transition-shadow duration-500">
                        {/* Decorative Background Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-hydra-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="font-bold border-b border-gray-100 pb-6 mb-8 text-2xl text-hydra-dark flex items-center gap-3">
                            <span className="w-2 h-8 bg-hydra-blue rounded-full" />
                            المكوّنات الفعّالة (لكل قرص)
                        </h3>

                        <ul className="space-y-8 relative z-10">
                            <li className="flex flex-col gap-2 group/item">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-900 font-bold text-lg">جلوكوز (Glucose)</span>
                                    <span className="font-bold text-hydra-blue text-xl">1.62 جم</span>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">يدعم امتصاص الماء والأملاح بسرعة وفعالية.</p>
                            </li>

                            <li className="flex flex-col gap-2 pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-900 font-bold text-lg text-right">حمض الستريك <br /><span className="text-sm text-gray-400 font-normal">(Citric acid)</span></span>
                                    <span className="font-bold text-hydra-dark text-lg">672 ملجم</span>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">منظّم حموضة يساعد على تحسين النكهة.</p>
                            </li>

                            <li className="flex flex-col gap-2 pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-900 font-bold text-lg text-right">صوديوم <br /><span className="text-sm text-gray-400 font-normal">(from sodium chloride)</span></span>
                                    <span className="font-bold text-hydra-dark text-lg">34.5 ملجم</span>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">يدعم توازن السوائل بتعويض جزء من الصوديوم المفقود.</p>
                            </li>

                            <li className="flex flex-col gap-2 pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-900 font-bold text-lg text-right">بوتاسيوم <br /><span className="text-sm text-gray-400 font-normal">(from potassium chloride)</span></span>
                                    <span className="font-bold text-hydra-dark text-lg">78 ملجم</span>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">يساعد في الحفاظ على توازن الإلكتروليتات لدعم أداء العضلات.</p>
                            </li>

                            <li className="flex flex-col gap-2 pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-end text-right">
                                    <span className="text-gray-900 font-bold text-lg text-right">صوديوم <br /><span className="text-sm text-gray-400 font-normal">(from sodium bicarbonate)</span></span>
                                    <span className="font-bold text-hydra-dark text-lg">103.5 ملجم</span>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">يساعد كمُنظّم حموضة للمحلول ويدعم توازن السوائل.</p>
                            </li>
                        </ul>

                        <div className="mt-10 p-4 bg-blue-50 rounded-2xl text-[11px] text-hydra-blue font-medium leading-tight">
                            تم اختيار هذه المكونات بدقة لتعمل معاً على تسريع عملية الترطيب بناءً على معايير منظمة الصحة العالمية (WHO).
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
