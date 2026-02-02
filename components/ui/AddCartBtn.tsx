import {t} from '../../lib/language';
import { useLanguage } from '../../lib/LanguageContext';
import Link from 'next/link';

export default function AddCartBtn() {
    const { lang } = useLanguage();
    return (
        <Link href="/cart" className="px-4 py-2 bg-gray-600 text-white rounded-3xl hover:bg-gray-700 hover:cursor-pointer transition">
            <button>{t("products.addToCart", lang)}</button>
        </Link>
    );
}