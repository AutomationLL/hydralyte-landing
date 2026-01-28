import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:hidden"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="text-right">
                            <div className="text-xs text-gray-500 font-bold line-through">300 SAR</div>
                            <div className="text-lg font-black text-hydra-blue">198 SAR</div>
                        </div>
                        <button
                            onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })}
                            className="flex-1 bg-hydra-orange text-white py-3 px-6 rounded-xl font-bold shadow-lg shadow-orange-500/30 animate-pulse"
                        >
                            اطلب العرض الآن
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
