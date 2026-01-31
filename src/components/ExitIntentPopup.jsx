import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Timer, Gift } from 'lucide-react';
import { track } from '@vercel/analytics/react';

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const alreadyShown = sessionStorage.getItem('exit_popup_shown');
        if (alreadyShown) {
            setHasShown(true);
            return;
        }

        // Trigger 1: Time Delay (3 seconds)
        const timer = setTimeout(() => {
            if (!hasShown && !sessionStorage.getItem('exit_popup_shown')) {
                showPopup('Timer');
            }
        }, 3000);

        // Trigger 2: Mouse Leave (Desktop)
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('exit_popup_shown')) {
                showPopup('Mouse Leave');
            }
        };

        // Trigger 3: Scroll Up Logic (Mobile "Intent to Leave")
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // If user scrolls up significantly fast (simple check: scrolling up when fairly down the page)
            if (lastScrollY > currentScrollY && window.scrollY > 500 && (lastScrollY - currentScrollY) > 50) {
                if (!hasShown && !sessionStorage.getItem('exit_popup_shown')) {
                    // Verify not just a small jitter
                    // triggering logic here
                    // For now, let's stick to the Timer + MouseLeave as primary, 
                    // and maybe a simple "back button" history push state if we were really aggressive, 
                    // but scroll up is safer.
                    // Let's rely on Timer for mobile mostly as it's less intrusive than "scroll jacking".
                }
            }
            lastScrollY = currentScrollY;
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        // window.addEventListener('scroll', handleScroll); // Disabled scroll trigger for now to avoid false positives, focusing on Timer for mobile.

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
            // window.removeEventListener('scroll', handleScroll);
        };
    }, [hasShown]);

    const showPopup = (triggerSource) => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
        track('Exit Intent Shown', { source: triggerSource });
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const copyCode = () => {
        navigator.clipboard.writeText('7days');
        track('Coupon Copied', { code: '7days' });
        // Optional: Show "Copied" feedback
        const btn = document.getElementById('coupon-btn');
        if (btn) btn.innerText = 'تم النسخ! ✅';
        setTimeout(() => {
            document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
            setIsVisible(false);
        }, 1000);
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl overflow-hidden text-center"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-hydra-orange/20 to-transparent" />

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-hydra-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Gift className="w-8 h-8 text-hydra-orange animate-bounce" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                انتظر! لا تفوت العرض
                            </h3>
                            <p className="text-gray-600 mb-6">
                                عند استخدام الكود ستحصل على خصم إضافي <span className="font-bold text-hydra-orange">10%</span>.<br />
                                استخدم الكود أدناه:
                            </p>

                            <button
                                id="coupon-btn"
                                onClick={copyCode}
                                className="w-full border-2 border-dashed border-hydra-orange/50 bg-orange-50 rounded-xl py-4 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-orange-100 transition-colors mb-4 group"
                            >
                                <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">انقر لنسخ الكود</span>
                                <span className="text-3xl font-black text-hydra-dark group-hover:scale-105 transition-transform">7days</span>
                            </button>

                            <button
                                onClick={() => {
                                    handleClose();
                                    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-sm text-gray-400 underline hover:text-gray-600"
                            >
                                لا شكرًا، لا أريد الخصم
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
