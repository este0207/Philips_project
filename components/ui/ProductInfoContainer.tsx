"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import getProducts from '../../lib/getProducts';
import ReturnBtn from '@/components/ui/ReturnBtn';
import AddCartBtn from './AddCartBtn';

export default function ProductInfoContainer() {
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        async function fetchProduct() {
            const products = await getProducts();
            const found = products.find((p: any) => String(p.id) === String(id));
            setProduct(found);
        }
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="p-8">Chargement...</div>;
    }

    return (
        <div className="p-8 bg-white/70 backdrop-blur-2xl absolute top-0 left-0 w-full h-screen pt-35 flex flex-col items-center">
            <ReturnBtn />
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg grid grid-cols-2 items-center"
            >
                <div className="mb-4 flex justify-center items-center w-full">
                    <Image src={product.product_image || '/placeholder.png'} alt="product_Image" width={200} height={200} className="rounded-xl object-cover" />
                </div>
                <div className="pl-6 gap-4 flex flex-col">
                    <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
                    <p className="text-xl font-semibold mb-2">Prix : {product.product_price}</p>
                    <p className="text-gray-700">{product.product_desc}</p>
                    <AddCartBtn />
                </div>
            </motion.div>
        </div>
    );
}
