"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id?: string | number ;
  name: string;
  price: number | string;
  image?: string;
  desc?: string;
};

export default function ProductCard({ id, name, price, image, desc }: ProductCardProps) {
  return (
    <Link href={`/Products/${encodeURIComponent(id ?? '')}`} passHref>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 dark:bg-neutral-900 shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.03] transition-transform duration-200 min-w-[260px] max-w-xs"
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
          <span className="text-xl font-semibold text-black/90">{typeof price === 'number' ? price.toFixed(2) + ' €' : price}</span>
          <button className="ml-4 px-4 py-2 bg-black hover:bg-black/70 text-white font-bold rounded-full shadow transition-colors duration-200">Ajouter au panier</button>
        </div>
      </motion.div>
    </Link>
  );
}