
import getProducts from '../../lib/getProducts';
import ProductCard from '../../components/ProductCard';

export default async function ProductsPage() {
  let products = null;
  let error = null;
  try {
    products = await getProducts();
  } catch (err: any) {
    error = err?.message || JSON.stringify(err);
    console.error('Supabase fetch error:', err);
  }
  return (
    <main className="p-8 bg-white/90 absolute top-0 left-0 w-full">
      <div className="pt-25 h-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="">
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-800 border border-red-300 rounded">
              <strong>Error:</strong> {error}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  p-6 w-full rounded-lg">
            {products && products.length > 0 ? (
              products.map((product: any) => (
                <div key={product.id} className="flex flex-col gap-2 items-center p-4 rounded-lg">
                  <ProductCard
                    id={product.id}
                    name={product.product_name || 'Produit'}
                    price={product.product_price || 0}
                    image={product.product_image || '/placeholder.png'}
                    desc={product.desc}
                  />
                </div>
              ))
            ) : !error ? (
              <div className="col-span-full text-center text-neutral-500">No products found.</div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
