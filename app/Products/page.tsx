import getProducts from '../../lib/getProducts';

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
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-800 border border-red-300 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}
      <ul>
        {products && products.length > 0 ? (
          products.map((product: any) => (
            <li key={product.id} className="mb-2 p-2 border rounded">
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </li>
          ))
        ) : !error ? (
          <li>No products found.</li>
        ) : null}
      </ul>
    </main>
  );
}
