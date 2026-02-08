import {t} from '../../lib/language';
import { useLanguage } from '../../lib/LanguageContext';
import { useCart } from '../../lib/CartContext';

export default function AddCartBtn({
    id,
    name,
    price,
    image,
}: {
    id?: string | number;
    name?: string;
    price?: number | string;
    image?: string;
}) {
    const { lang } = useLanguage();
        const { addItem } = useCart();

        const numericPrice = typeof price === 'number'
            ? price
            : parseFloat(String(price ?? 0).replace(/[^\d.,]/g, '').replace(',', '.')) || 0;

        const itemId = id ?? name ?? "item";
    return (
                <button
                    className="px-4 py-2 bg-gray-600 text-white rounded-3xl hover:bg-gray-700 hover:cursor-pointer transition"
                    onClick={() => addItem({ id: itemId, name: name ?? "Produit", price: numericPrice, image })}
                >
                    {t("products.addToCart", lang)}
                </button>
    );
}