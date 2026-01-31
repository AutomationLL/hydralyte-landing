import React, { useState, useEffect } from 'react';
import { Droplets } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', href: '#' },
        { name: 'المنتجات', href: '#products' },
        { name: 'لماذا هيدرالايت؟', href: '#features' },
        { name: 'آراء العملاء', href: '#reviews' },
    ];

    return (
        <nav
            className={cn(
                'sticky top-0 z-50 transition-all duration-300',
                scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-hydra-blue flex items-center gap-2">
                    <Droplets className="w-8 h-8 text-hydra-orange fill-current" />
                    <span>Hydralyte</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#science" className="text-gray-600 hover:text-hydra-blue font-medium transition-colors">كيف يعمل؟</a>
                    <a href="#ingredients" className="text-gray-600 hover:text-hydra-blue font-medium transition-colors">المكونات</a>
                    <a href="#reviews" className="text-gray-600 hover:text-hydra-blue font-medium transition-colors">الآراء</a>
                    <a href="#faq" className="text-gray-600 hover:text-hydra-blue font-medium transition-colors">الأسئلة الشائعة</a>
                    <button className="bg-hydra-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 animate-pulse">
                        تسوق الآن
                    </button>
                </div>
            </div>
        </nav >
    );
}
