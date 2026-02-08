export default function CartPage() {
  return (
    <main className="p-8 bg-white/90 top-0 left-0 w-full min-h-screen">
      <div className="pt-25 h-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Votre panier</h1>

        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6 md:p-8 border border-white/20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">


            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/90 rounded-2xl p-6 shadow">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-neutral-500">Sous-total</span>
                <span className="text-2xl font-bold text-neutral-900">0€</span>
                <span className="text-sm text-neutral-500">TVA et frais inclus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}