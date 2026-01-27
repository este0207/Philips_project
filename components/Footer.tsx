"use client";
import { t } from "../lib/language";
import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
    const { lang } = useLanguage();
    return (
        <footer className="w-full bg-black/80 text-white py-6 flex flex-col items-center rounded-full">
            <div className="mb-4">
                <p className="text-lg">{t("footer.copyright", lang)}</p>
            </div>
            <div className="flex space-x-6">
                <a href="/privacy" className="hover:underline">{t("footer.privacy", lang)}</a>
                <a href="/terms" className="hover:underline">{t("footer.terms", lang)}</a>
                <a href="/contact" className="hover:underline">{t("footer.contact", lang)}</a>
            </div>
        </footer>
    );
}