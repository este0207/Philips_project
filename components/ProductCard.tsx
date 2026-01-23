"use client";
import getProducts from '../lib/getProducts';
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <motion.div
    className='bg-red-500 p-10 rounded-2xl flex flex-col justify-between items-center'
    >
        <div className="top">
            <Image src="/yourImg.png" alt="Product Image" width={200} height={200} />
            <h2>product_name</h2>
        </div>
        <div className="botom flex justify-between">
            <p>product_price</p>
            <button className='bg-amber-400 p-2 rounded-full hover:cursor-pointer'>Add to Cart</button>
        </div>
    </motion.div>
  );
}