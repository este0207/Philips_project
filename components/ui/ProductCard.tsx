"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {t} from '../../lib/language';
import { useLanguage } from '../../lib/LanguageContext';
import { useCart } from '../../lib/CartContext';

type ProductCardProps = {
  id?: string | number ;
  name: string;
  price: number | string;
  image?: string;
  desc?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, desc }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
    
  const { lang } = useLanguage();
  const { addItem } = useCart();

  const numericPrice = typeof price === 'number'
    ? price
    : parseFloat(String(price).replace(/[^\d.,]/g, '').replace(',', '.')) || 0;

  const itemId = id ?? name;

  return (
    <Link href={`/products/${encodeURIComponent(id ?? '')}`} passHref>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white/90 dark:bg-neutral-900 shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.03] transition-transform duration-200 min-w-full max-w-xs"
        whileHover={{ scale: 1.04 }}
      >
        <div className="w-full flex flex-col items-center">
          <div className="relative w-40 h-40 mb-2 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <Image
              src={image || '/placeholder.png'}
              alt={name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 text-center" style={{ fontFamily: 'Fredoka, Arial, Helvetica, sans-serif' }}>{name}</h2>
          {desc && <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center mb-2 line-clamp-2">{desc}</p>}
        </div>
        <div className="w-full flex items-center justify-between mt-auto">
          <span className="text-xl font-semibold text-black/90 dark:text-white">{typeof price === 'number' ? price.toFixed(2) + ' €' : price}</span>
          <button
            className="ml-4 px-4 py-2 bg-black hover:bg-black/70 text-white font-bold rounded-full shadow transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem({ id: itemId, name, price: numericPrice, image });
            }}
          >
            {t("products.addToCart", lang)}
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;