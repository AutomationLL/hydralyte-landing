import React from 'react';
import { ShieldCheck, UserCheck, Stethoscope, Award } from 'lucide-react';

export default function TrustBar() {
    return (
        <div className="bg-gray-50 border-b border-gray-100 py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-around gap-8 text-gray-600">

                <div className="flex items-center gap-3">
                    <Stethoscope className="w-8 h-8" />
                    <span className="font-bold text-sm">يوصي به الأطباء</span>
                </div>
                <div className="flex items-center gap-3">
                    <UserCheck className="w-8 h-8" />
                    <span className="font-bold text-sm">اكثر 4.8/5 نجوم ⭐⭐⭐⭐⭐ | أكثر من 5000 عميل</span>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8" />
                    <span className="font-bold text-sm">تركيبة منظمة الصحة العالمية</span>
                </div>
                <div className="flex items-center gap-3">
                    <Award className="w-8 h-8" />
                    <span className="font-bold text-sm">الأكثر مبيعاً 2025</span>
                </div>

            </div>
        </div>
    );
}
