"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import getProducts from '../../../lib/getProducts';

export default function ProductInfo() {
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
        <div className="p-8 bg-white/90 absolute top-0 left-0 w-full h-screen pt-35 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
            <div className="mb-4">
                <Image src={product.product_image || '/placeholder.png'} alt="product_Image" width={200} height={200} className="rounded-xl object-cover" />
            </div>
            <p className="text-xl font-semibold mb-2">Prix : {product.product_price}</p>
        </div>
    );
}
