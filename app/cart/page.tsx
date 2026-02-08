"use client";
import { useCart } from "../../lib/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  return (
    <main className="p-8 bg-white/90 top-0 left-0 w-full min-h-screen">
      <div className="pt-25 h-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Votre panier</h1>

        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6 md:p-8 border border-white/20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {items.length === 0 ? (
                <div className="bg-white/90 rounded-2xl p-6 text-center text-neutral-600 shadow">
                  Votre panier est vide.
                </div>
              ) : (
                items.map(item => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center justify-between bg-white/90 rounded-2xl p-4 shadow gap-4"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-16 h-16 rounded-xl bg-neutral-100 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-sm text-neutral-500">IMG</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-neutral-900">{item.name}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            className="px-2 py-1 rounded-md bg-neutral-200 text-neutral-700"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                          >
                            −
                          </button>
                          <span className="text-sm text-neutral-700">{item.qty}</span>
                          <button
                            className="px-2 py-1 rounded-md bg-neutral-200 text-neutral-700"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold text-neutral-900">
                        {(item.price * item.qty).toFixed(2)} €
                      </span>
                      <button
                        className="px-4 py-2 bg-black text-white rounded-full hover:bg-black/80 transition"
                        onClick={() => removeItem(item.id)}
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/90 rounded-2xl p-6 shadow">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-neutral-500">Sous-total</span>
                <span className="text-2xl font-bold text-neutral-900">{subtotal.toFixed(2)} €</span>
                <span className="text-sm text-neutral-500">TVA et frais inclus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}