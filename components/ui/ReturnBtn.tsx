import Link from "next/link";

export default function ReturnBtn() {
    return (
        <Link href="/products" >
            <button className="bg-black/10 flex text-white justify-center text-xl items-center gap-2 p-3 absolute top-30 left-10 rounded-full hover:bg-black/50 hover:cursor-pointer transition">
                ← Return to Products
            </button>
        </Link>
    );
}