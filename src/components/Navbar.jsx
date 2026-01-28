import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
                    <span className="text-xl md:text-2xl">hydralyte-sa.com</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-hydra-dark hover:text-hydra-orange font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-hydra-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30">
                        تسوق الآن
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-hydra-dark">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b absolute w-full overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-hydra-dark font-medium hover:text-hydra-orange"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-hydra-orange text-white py-3 rounded-lg font-bold w-full">
                                تسوق الآن
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
