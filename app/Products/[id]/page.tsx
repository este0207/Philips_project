"use client";
import { useParams } from 'next/navigation';

export default function ProductInfo() {
    const params = useParams();
    const { id } = params;
    // TODO: Fetch product data by id here
    return (
        <div className="p-8 bg-white/90 absolute top-0 left-0 w-full h-screen pt-35">
            <h1 className="text-3xl font-bold mb-4">Product ID: {id}</h1>
            <p className="text-gray-700 mb-2">Ceci est la page d'information du produit. Implémentez ici la logique pour afficher les détails du produit avec l'ID ci-dessus.</p>
        </div>
    );
}
