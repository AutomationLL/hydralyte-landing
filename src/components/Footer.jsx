import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 border-t">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-hydra-blue mb-4">hydralyte-sa.com</div>
                        <p className="text-gray-500 max-w-sm">
                            شريكك المعتمد لترطيب صحي وسريع. انضم إلى آلاف العملاء الراضين اليوم.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-hydra-dark mb-4">روابط سريعة</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li><a href="https://hydralyte-sa.com" className="hover:text-hydra-orange">الرئيسية</a></li>
                            <li><a href="https://hydralyte-sa.com/products" className="hover:text-hydra-orange">المنتجات</a></li>
                            <li><a href="https://hydralyte-sa.com/ar/hydration-at-the-speed-of-light/page-1935253707" className="hover:text-hydra-orange">عن هيدرالايت</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-hydra-dark mb-4">المساعدة</h4>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li>تواصل معنا</li>
                            <li><a href="tel:+966920032375" className="hover:text-hydra-orange">+966 920032375</a></li>
                            <li><a href="https://hydralyte-sa.com/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%AA%D8%AD%D8%AF-%D9%8A-%D9%A7-%D8%A3%D9%8A%D8%A7%D9%85-%D9%84%D9%84%D8%AA%D8%B1%D8%B7%D9%8A%D8%A8/page-758769357" className="hover:text-hydra-orange">سياسة تحدي هيدرالايت</a></li>
                            <li><a href="https://hydralyte-sa.com/ar/redirect/pages/614469134" className="hover:text-hydra-orange">سياسة الخصوصية</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-400 text-sm pt-8 border-t">
                    © {new Date().getFullYear()} Hydralyte SA. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
}
